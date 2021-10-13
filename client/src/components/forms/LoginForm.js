import React, { useEffect, useState } from 'react';
import styles from './LoginForm.module.css';
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { isEmailValid } from '../../utils/functions';
import { useLoginUserMutation } from '../../serviсes/authApi';
import { setAuthError, setUser } from '../../features/auth/authSlice';
import { CustomMessage } from '../';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const authErrors = useSelector((state) => state.auth.authErrors);
  const [authorizeUser, { isLoading, isError, error }] = useLoginUserMutation();

  // show error alert (4s); clear timeout on unmount
  useEffect(() => {
    setVisible(true);
    const id = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(id);
  }, [authErrors]);

  // validation params for inputs
  const loginFieldParams = {
    required: "Це поле обов'язкове",
  };
  const passFieldParams = {
    required: "Це поле обов'язкове також",
    maxLength: { value: 10, message: 'Пароль максимум 10 лiтер' },
  };

  const submitForm = (res) => {
    const { login: email, password } = res;

    if (!isEmailValid(email)) {
      // notify user to check email
      dispatch(
        setAuthError({
          message: 'Перевiрте будь-ласка поле Пошта!',
          timestamp: new Date().toLocaleString(),
        })
      );
    } else {
      // send authApi request with credentials
      authorizeUser({ email, password })
        .unwrap()
        .then((resp) => {
          // if auth OK set user to the store
          if (resp.status === 'success') {
            dispatch(setUser(resp.data.user));
          }
          if (isError) {
            dispatch(setAuthError(error));
          }
        })
        .catch((err) => {
          // set possible errors to authErorrs in store
          console.log(err);
          dispatch(setAuthError(err.data.data));
        });
    }
  };

  return (
    <form
      className={styles.loginForm}
      onSubmit={handleSubmit((res) => submitForm(res))}
    >
      <TextField
        className={styles.loginFormInput}
        label='Пошта'
        type='email'
        fullWidth
        size='small'
        {...register('login', loginFieldParams)}
        helperText={errors?.login?.message}
        error={errors?.login?.message && true}
      />

      <TextField
        className={`${styles.loginFormInput} ${styles.mb40}`}
        label='Пароль'
        type='password'
        fullWidth
        size='small'
        {...register('password', passFieldParams)}
        helperText={errors?.password?.message}
        error={errors?.password?.message && true}
      />

      <Button
        className={styles.loginFormBtn}
        variant='contained'
        color='secondary'
        fullWidth
        type='submit'
        disabled={isLoading}
      >
        Увiйти
      </Button>

      {/* show authErrors message under form in UI */}
      {authErrors.length > 0 && visible && (
        <CustomMessage type='error'>
          {authErrors[authErrors.length - 1].message}
        </CustomMessage>
      )}

      <p className={styles.loginFormLink}>
        Нема облiкового запису? <Link to='/register'>Створiть</Link>{' '}
      </p>
    </form>
  );
};

export default LoginForm;
