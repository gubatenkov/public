import React from 'react';
import styles from './OrderSummary.module.css';
import { Button, Paper, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import CardRow from '../checkout-card/CardRow';

const OrderSummary = ({ taxInPercent = 0, totalPrice, totalAmount }) => {
  const roundedTax = Math.ceil((totalPrice / 100) * taxInPercent);
  const normalTotalPrice = totalPrice.toFixed(2);

  return (
    <Paper className={styles.checkoutCard} elevation={2}>
      <Typography variant='h5'>
        Загалом: {normalTotalPrice - roundedTax} UAH
      </Typography>

      <CardRow
        className={styles.checkoutCardRow}
        label='Товари:'
        value={`${totalAmount} шт.`}
      />

      <CardRow
        className={styles.checkoutCardRow}
        label='Доставка:'
        value={`${Math.ceil(totalPrice / 100) * 5} UAH`}
      />

      <CardRow
        className={styles.checkoutCardRow}
        label={`Збiр ПДВ -${taxInPercent}%:`}
        value={`${roundedTax} UAH`}
        divider={false}
      />

      <Button fullWidth variant='outlined' color='primary'>
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
