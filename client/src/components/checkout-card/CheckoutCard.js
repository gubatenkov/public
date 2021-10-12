import React from 'react';
import styles from './CheckoutCard.module.css';
import { Button, Paper, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import CardRow from './CardRow';

const CheckoutCard = ({ tax = 0, totalPrice, totalAmount }) => {
  const roundedTax = Math.ceil((totalPrice / 100) * tax);
  const normalTotalPrice = totalPrice.toFixed(2);

  return (
    <Paper className={styles.checkoutCard} elevation={2}>
      <Typography variant='h5'>
        Всього до сплати: {normalTotalPrice - roundedTax} UAH
      </Typography>

      <CardRow
        className={styles.checkoutCardRow}
        label='Товари:'
        value={`${totalAmount} шт.`}
      />

      <CardRow
        className={styles.checkoutCardRow}
        label={`Збiр ПДВ -${tax}%:`}
        value={`${roundedTax} UAH`}
        divider={false}
      />

      <Button fullWidth variant='outlined' color='primary'>
        Розрахунок
      </Button>
    </Paper>
  );
};

CheckoutCard.propTypes = {
  tax: PropTypes.number,
  totalPrice: PropTypes.number.isRequired,
  totalAmount: PropTypes.number.isRequired,
};

export default CheckoutCard;
