import React from 'react';
import styles from '../payment/Payment.module.css';
import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { OrderRow, OrderSummary, Stepper } from '../../';
import { renderOrderItems } from '../../../utils/functions';
import OrderProductItem from './OrderProductItem';

const PlaceOrder = () => {
  const shippingData = useSelector((state) => state.cart.shippingData);
  const paymentData = useSelector((state) => state.cart.paymentData);
  const cartItems = useSelector((state) => state.cart.cartItems);
  let totals = cartItems.reduce(
    (acc, item) => {
      acc.totalSum = acc.totalSum + item.price * item.amount;
      acc.totalAmount = acc.totalAmount + item.amount;
      return acc;
    },
    { totalSum: 0, totalAmount: 0 }
  );

  return (
    <div className={styles.payment}>
      <div className={styles.paymentInner}>
        <Typography className={styles.paymentHeading} variant='h5'>
          Перевiрте замовлення
        </Typography>

        <Stepper />

        <Grid container spacing={3}>
          <Grid item md={8} xs={12} sm={12} lg={8}>
            <OrderRow rowHeading='Поточна адреса'>
              вул. {shippingData.address}, мiсто {shippingData.city},{' '}
              {shippingData.index}, {shippingData.country}
            </OrderRow>

            <OrderRow rowHeading='Спосiб розрахунку'>
              За допомогою: {paymentData.method.toUpperCase()}
            </OrderRow>

            <OrderRow rowHeading='Товари' divider={false}>
              {renderOrderItems(cartItems, OrderProductItem)}
            </OrderRow>
          </Grid>

          <Grid item md={4} xs={12} sm={12} lg={4}>
            <OrderSummary
              taxInPercent={3}
              totalAmount={totals.totalAmount}
              totalPrice={totals.totalSum}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default PlaceOrder;
