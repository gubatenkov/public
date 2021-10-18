import React from 'react';
import styles from './OrderSummary.module.css';
import { Button, Paper, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import CardRow from '../checkout-card/CardRow';

const OrderSummary = ({
  tax,
  shippingPrice,
  totalPrice,
  totalAmount,
  handleClick,
}) => {
  const normalTotalPrice = totalPrice + tax + shippingPrice;

  return (
    <Paper className={styles.checkoutCard} elevation={2}>
      <Typography variant='h5'>
        Загалом: {normalTotalPrice.toFixed(2)} UAH
      </Typography>

      <CardRow
        className={styles.checkoutCardRow}
        label='Товари:'
        value={`${totalAmount} шт.`}
      />

      <CardRow
        className={styles.checkoutCardRow}
        label='Доставка:'
        value={`${shippingPrice} UAH`}
      />

      <CardRow
        className={styles.checkoutCardRow}
        label='Збiр ПДВ 3%:'
        value={`${tax} UAH`}
        divider={false}
      />

      <Button
        fullWidth
        variant='outlined'
        color='primary'
        onClick={() => handleClick()}
      >
        Пiдтвердити
      </Button>
    </Paper>
  );
};

OrderSummary.propTypes = {
  tax: PropTypes.number,
  totalPrice: PropTypes.number.isRequired,
  totalAmount: PropTypes.number.isRequired,
};

export default OrderSummary;
