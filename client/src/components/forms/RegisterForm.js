import React, { useEffect, useState } from 'react';
import styles from './RegisterForm.module.css';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { isEmailValid } from '../../utils/functions';
import { useRegisterUserMutation } from '../../serviсes/authApi';
import { setAuthError, setUser } from '../../features/auth/authSlice';
import { CustomMessage } from '../';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [visible, setVisible] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const authErrors = useSelector((state) => state.auth.authErrors);
  const [registerUser, { isLoading, isSuccess, isError, error }] =
    useRegisterUserMutation();

  // show error alert (4s); clear timeout on unmount
  useEffect(() => {
    setVisible(true);
    const id = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(id);
  }, [authErrors]);

  // if auth success redirect to "/" page
  useEffect(() => {
    if (isSuccess) history.push('/');
    // eslint-disable-next-line
  }, [isSuccess]);

  // validation params for inputs
  const emailFieldParams = {
    required: "Це поле обов'язкове",
  };

  const nameFieldParams = {
    required: "Це поле обов'язкове",
    minLength: { value: 1, message: "Им'я не меньше 1 лiтери" },
    maxLength: { value: 15, message: "Им'я не бiльше 15 лiтер" },
  };

  const passFieldParams = {
    required: "Це поле обов'язкове також",
    maxLength: { value: 10, message: 'Пароль максимум 10 лiтер' },
  };

  const submitForm = (res) => {
    const { email, name, password, password2 } = res;

    if (!isEmailValid(email)) {
      // notify user to check email
      dispatch(
        setAuthError({
          message: 'Перевiрте будь-ласка поле скринька!',
          timestamp: new Date().toLocaleString(),
        })
      );
    } else if (password !== password2) {
      // notify user to check pass & pass2
      dispatch(
        setAuthError({
          message: 'Перевiрте будь-ласка чи спiвпадають паролi!',
          timestamp: new Date().toLocaleString(),
        })
      );
    } else {
      // send authApi request with credentials
      registerUser({ email, name, password, password2 })
        .unwrap()
        .then((resp) => {
          // if auth OK set user to the store and redirect to ProductList page
          if (resp.status === 'success') {
            dispatch(setUser(resp.data.user));
          }
          if (isError) {
            dispatch(setAuthError(error));
          }
        })
        .catch((err) => {
          // save catched errors to the store
          dispatch(setAuthError(err.data.data));
        });
    }
  };

  return (
    <form
      className={styles.registerForm}
      onSubmit={handleSubmit((res) => submitForm(res))}
    >
      <TextField
        className={styles.registerFormInput}
        label='Пошта'
        type='email'
        fullWidth
        size='small'
        {...register('email', emailFieldParams)}
        helperText={errors?.email?.message}
        error={errors?.email?.message && true}
      />

      <TextField
        className={styles.registerFormInput}
        label="Iм'я"
        type='text'
        fullWidth
        size='small'
        {...register('name', nameFieldParams)}
        helperText={errors?.name?.message}
        error={errors?.name?.message && true}
      />

      <TextField
        className={styles.registerFormInput}
        label='Пароль'
        type='password'
        fullWidth
        size='small'
        {...register('password', passFieldParams)}
        helperText={errors?.password?.message}
        error={errors?.password?.message && true}
      />

      <TextField
        className={`${styles.registerFormInput} ${styles.mb40}`}
        label='Пiдтвердiть пароль'
        type='password'
        fullWidth
        size='small'
        {...register('password2')}
        helperText={errors?.password2?.message}
        error={errors?.password2?.message && true}
      />

      <Button
        className={styles.registerFormBtn}
        variant='contained'
        color='secondary'
        fullWidth
        type='submit'
        disabled={isLoading}
      >
        Зареєструватися
      </Button>

      {/* show authErrors message under form in UI */}
      {authErrors.length > 0 && visible && (
        <CustomMessage type='error'>
          {authErrors[authErrors.length - 1].message}
        </CustomMessage>
      )}

      <p className={styles.registerFormLink}>
        Маєте облiковий запис? <Link to='/login'>Увiйдiть</Link>{' '}
      </p>
    </form>
  );
};

export default RegisterForm;
