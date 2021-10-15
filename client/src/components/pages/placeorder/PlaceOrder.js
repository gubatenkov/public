import React from 'react';
import styles from '../payment/Payment.module.css';
import { Typography } from '@mui/material';

import { Stepper } from '../../';

const PlaceOrder = () => {
  return (
    <div className={styles.payment}>
      <div className={styles.paymentInner}>
        <Typography className={styles.paymentHeading} variant='h5'>
          Перевiрте замовлення
        </Typography>

        <Stepper />
      </div>
    </div>
  );
};

export default PlaceOrder;
