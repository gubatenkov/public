import React from 'react';
import styles from '../payment/Payment.module.css';
import { Typography } from '@mui/material';

import { PaymentForm, Stepper } from '../../';

const Payment = () => {
  return (
    <div className={styles.payment}>
      <div className={styles.paymentInner}>
        <Typography className={styles.paymentHeading} variant='h5'>
          Оберiть спосiб розрахунку
        </Typography>

        <Stepper />

        <PaymentForm />
      </div>
    </div>
  );
};

export default Payment;
