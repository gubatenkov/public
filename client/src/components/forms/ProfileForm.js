import React, { useEffect, useState } from 'react';
import styles from './RegisterForm.module.css';
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { isEmailValid } from '../../utils/functions';
import {
  updateUserProfile,
  saveUserProfileError,
} from '../../features/auth/authSlice';
import { CustomMessage } from '../';
import { useUpdateUserMutation } from '../../serviсes/authApi';

const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [visible, setVisible] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const profileErrors = useSelector((state) => state.auth.profileErrors);
  //eslint-disable-next-line
  const [sendUpdateProfileRequest, { isLoading, isSuccess, isErorr, error }] =
    useUpdateUserMutation();
  const dispatch = useDispatch();
  const [name, setName] = useState(user?.name ?? '');
  const [email, setEmail] = useState(user?.email ?? '');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  // show error alert (4s); Clear timeout on unmount
  useEffect(() => {
    setVisible(true);
    const id = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(id);
  }, [errors]);

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
        saveUserProfileError({
          message: 'Перевірте поле Пошта',
        })
      );
    } else if (password !== password2) {
      dispatch(
        saveUserProfileError({
          message: 'Перевірте чи співпадають паролі',
        })
      );
    } else {
      // send update profile request
      sendUpdateProfileRequest({ email, name, password })
        .unwrap()
        .then((res) => {
          if (res.status === 'success') {
            dispatch(updateUserProfile(res.data.updatedUser));
          }
        })
        .catch((err) => {
          dispatch(
            saveUserProfileError({
              message: err.message,
            })
          );
        });
      // clear fields after request
      setPassword('');
      setPassword2('');
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
        value={email}
        fullWidth
        size='small'
        {...register('email', emailFieldParams)}
        helperText={errors?.email?.message}
        error={errors?.email?.message && true}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        className={styles.registerFormInput}
        label="Iм'я"
        type='text'
        value={name}
        fullWidth
        size='small'
        {...register('name', nameFieldParams)}
        helperText={errors?.name?.message}
        error={errors?.name?.message && true}
        onChange={(e) => setName(e.target.value)}
      />

      <TextField
        className={styles.registerFormInput}
        label='Пароль'
        type='password'
        value={password}
        fullWidth
        size='small'
        {...register('password', passFieldParams)}
        helperText={errors?.password?.message}
        error={errors?.password?.message && true}
        onChange={(e) => setPassword(e.target.value)}
      />

      <TextField
        className={`${styles.registerFormInput} ${styles.mb40}`}
        label='Пiдтвердiть пароль'
        type='password'
        value={password2}
        fullWidth
        size='small'
        {...register('password2')}
        helperText={errors?.password2?.message}
        error={errors?.password2?.message && true}
        onChange={(e) => setPassword2(e.target.value)}
      />

      <Button
        className={styles.registerFormBtn}
        variant='contained'
        color='secondary'
        fullWidth
        type='submit'
        disabled={isLoading}
      >
        Оновити
      </Button>

      {/* show authErrors message under form in UI */}
      {profileErrors.length > 0 && visible && (
        <CustomMessage type='info'>
          {profileErrors[profileErrors.length - 1].message}
        </CustomMessage>
      )}
    </form>
  );
};

export default ProfileForm;
