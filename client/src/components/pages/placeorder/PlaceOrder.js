import React, { useEffect } from 'react';
import styles from '../payment/Payment.module.css';
import { Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { OrderRow, OrderSummary, Stepper } from '../../';
import { renderOrderItems } from '../../../utils/functions';
import OrderProductItem from './OrderProductItem';
import { useCreateOrderMutation } from '../../../serviсes/orderApi';
import {
  saveOrder,
  saveOrderError,
} from '../../../features/orders/ordersSlice';
import { useHistory } from 'react-router';

const PlaceOrder = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [createOrder, { isError, isLoading, isSuccess }] =
    useCreateOrderMutation();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const shippingData = useSelector((state) => state.cart.shippingData);
  const paymentData = useSelector((state) => state.cart.paymentData);
  let totals = cartItems.reduce(
    (acc, item) => {
      acc.totalSum = acc.totalSum + item.price * item.amount;
      acc.totalAmount = acc.totalAmount + item.amount;
      acc.tax = Math.ceil(acc.totalSum / 100) * 3;
      acc.shipping = Math.ceil(acc.totalSum / 100) * 5;
      return acc;
    },
    { totalSum: 0, totalAmount: 0, tax: 0, shipping: 0 }
  );

  const handleCreateOrder = async () => {
    try {
      const order = {
        orderItems: cartItems,
        shippingAddress: shippingData,
        paymentMethod: paymentData.method,
        totalPrice: totals.totalSum,
        shippingPrice: totals.shipping,
        taxPrice: totals.tax,
      };
      const response = await createOrder(order).unwrap();
      if (response.status === 'success') {
        dispatch(saveOrder(response.data.order));
        history.push(`/order/${response.data.order._id}`);
      }
    } catch (err) {
      dispatch(
        saveOrderError({
          status: 'error',
          message: `An error happend when trying to create new order. Message: ${err.message}`,
          timestamp: new Date().toLocaleString(),
          fullError: err,
        })
      );
    }
  };

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
              tax={totals.tax}
              totalAmount={totals.totalAmount}
              totalPrice={totals.totalSum}
              shippingPrice={totals.shipping}
              handleClick={handleCreateOrder}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default PlaceOrder;
