import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { useForm } from 'react-hook-form';
import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateShippingData } from '../../features/cart/cartSlice';

const ShippingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    address: '',
    city: '',
    index: '',
    country: '',
  });

  const handleChange = (e) => {
    setFormState((state) => ({ ...state, [e.target.name]: e.target.value }));
  };
  // form validation params
  const addressFieldParams = {
    required: "Обов'язково",
  };
  const cityFieldParams = {
    required: "Обов'язково",
    maxLength: { value: 15, message: 'Максимальна довжина: 15 лiтер' },
    pattern: {
      value: /^[ЁёА-я ,.'-]+$/i,
      message: 'Лише росiйською або українською. Та без чисел',
    },
  };
  const indexFieldParams = {
    required: "Обов'язково",
  };
  const countryFieldParams = {
    required: "Обов'язково",
    maxLength: { value: 15, message: 'Максимальна довжина: 15 лiтер' },
    pattern: {
      value: /^[ЁёА-я ,.'-]+$/i,
      message: 'Лише росiйською або українською. Та без чисел',
    },
  };

  const submitForm = (res) => {
    // set final shipping data to the store
    dispatch(updateShippingData(res));
  };

  return (
    <form
      className={styles.loginForm}
      onSubmit={handleSubmit((res) => submitForm(res))}
    >
      <TextField
        className={styles.loginFormInput}
        value={formState.address}
        name='address'
        label='Адреса'
        type='text'
        fullWidth
        size='small'
        {...register('address', addressFieldParams)}
        helperText={errors?.address?.message}
        error={errors?.address?.message && true}
        onChange={(e) => handleChange(e)}
      />

      <TextField
        className={styles.loginFormInput}
        value={formState.city}
        name='city'
        label='Мiсто'
        type='text'
        fullWidth
        size='small'
        {...register('city', cityFieldParams)}
        helperText={errors?.city?.message}
        error={errors?.city?.message && true}
        onChange={(e) => handleChange(e)}
      />

      <TextField
        className={styles.loginFormInput}
        value={formState.index}
        name='index'
        label='Поштовий iндекс'
        type='number'
        fullWidth
        size='small'
        {...register('index', indexFieldParams)}
        helperText={errors?.index?.message}
        error={errors?.index?.message && true}
        onChange={(e) => handleChange(e)}
      />

      <TextField
        className={`${styles.loginFormInput} ${styles.mb40}`}
        value={formState.country}
        name='country'
        label='Країна'
        type='text'
        fullWidth
        size='small'
        {...register('country', countryFieldParams)}
        helperText={errors?.country?.message}
        error={errors?.country?.message && true}
        onChange={(e) => handleChange(e)}
      />

      <Button
        className={styles.loginFormBtn}
        variant='contained'
        color='secondary'
        fullWidth
        type='submit'
      >
        Далi
      </Button>
    </form>
  );
};

export default ShippingForm;
