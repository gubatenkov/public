import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { useForm } from 'react-hook-form';
import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ButtonGroup from '@mui/material/ButtonGroup';
// import { updateShippingData } from '../../features/cart/cartSlice';

const PaymentForm = () => {
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
    // dispatch(updateShippingData(res));
  };

  return (
    <>
      <form className={styles.loginForm}>
        <FormControl component='fieldset' style={{ margin: '0 0 2rem' }}>
          <FormLabel component='legend'>Доступнi методи:</FormLabel>
          <RadioGroup
            aria-label='payment'
            defaultValue='card'
            name='radio-buttons-group'
          >
            <FormControlLabel
              value='paypal'
              control={<Radio />}
              label='PayPal'
            />
            <FormControlLabel
              value='stripe'
              control={<Radio />}
              label='Stripe'
            />
            <FormControlLabel
              value='card'
              control={<Radio />}
              label='Credit Card'
            />
          </RadioGroup>
        </FormControl>
      </form>

      <ButtonGroup style={{ width: '100%', justifyContent: 'center' }}>
        <Button variant='contained' color='secondary' fullWidth type='submit'>
          Назад
        </Button>
        <Button variant='contained' color='secondary' fullWidth type='submit'>
          Вперед
        </Button>
      </ButtonGroup>
    </>
  );
};

export default PaymentForm;
