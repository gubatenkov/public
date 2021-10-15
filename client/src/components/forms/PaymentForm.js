import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { savePaymentMethod } from '../../features/cart/cartSlice';

const PaymentForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [payMethod, setPayMethod] = useState('paypal');

  const handleNextStep = () => {
    dispatch(savePaymentMethod(payMethod));
    history.push('/placeorder');
  };

  return (
    <>
      <form className={styles.loginForm}>
        <FormControl
          component='fieldset'
          style={{ margin: '0 0 2rem' }}
          onChange={(e) => setPayMethod(e.target.value)}
        >
          <FormLabel component='legend' style={{ margin: '0 0 1rem' }}>
            Доступнi методи:
          </FormLabel>
          <RadioGroup
            aria-label='payment'
            defaultValue='paypal'
            name='radio-buttons-group'
          >
            <FormControlLabel
              value='paypal'
              control={<Radio />}
              label='PayPal'
            />
            {/* <FormControlLabel
              value='stripe'
              control={<Radio />}
              label='Stripe'
            /> */}
            <FormControlLabel
              value='card'
              control={<Radio />}
              label='Credit Card'
              disabled
            />
          </RadioGroup>
        </FormControl>
      </form>

      <ButtonGroup style={{ width: '100%', justifyContent: 'center' }}>
        <Button
          variant='contained'
          color='secondary'
          component={Link}
          to='/shipping'
          style={{ margin: '0 1rem 0 0' }}
        >
          Назад
        </Button>

        <Button variant='contained' color='secondary' onClick={handleNextStep}>
          Вперед
        </Button>
      </ButtonGroup>
    </>
  );
};

export default PaymentForm;
