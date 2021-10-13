import React from 'react';
import styles from '../shipping/Shipping.module.css';
import { Typography } from '@mui/material';

import { ShippingForm, Stepper } from '../../';

const Shipping = () => {
  return (
    <div className={styles.shipping}>
      <div className={styles.shippingInner}>
        <Typography className={styles.shippingHeading} variant='h5'>
          Даннi для доставки
        </Typography>

        <Stepper />

        <ShippingForm />
      </div>
    </div>
  );
};

export default Shipping;
