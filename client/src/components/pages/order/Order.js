import React, { useEffect, useState } from 'react';
import styles from '../payment/Payment.module.css';
import { Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';

import { CustomMessage, OrderRow, OrderSummary, Spinner } from '../../';
import { renderOrderItems } from '../../../utils/functions';
import OrderProductItem from '../placeorder/OrderProductItem';
import {
  useGetOrderByIdQuery,
  usePayOrderMutation,
} from '../../../serviсes/orderApi';
import {
  payOrderError,
  payOrderSuccess,
  saveOrder,
  saveOrderError,
} from '../../../features/orders/ordersSlice';
import { clearCartItems } from '../../../features/cart/cartSlice';

const Order = () => {
  const [sdkReady, setSdkReady] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, isSuccess, isError, error, isLoading, refetch } =
    useGetOrderByIdQuery(id);
  //eslint-disable-next-line
  const [payOrder, { isLoading: isPaying, isSuccess: isPayed }] =
    usePayOrderMutation();
  const orders = useSelector((state) => state.orders.orderItems);
  const isAuthorized = useSelector((state) => state.auth.isAuthorized);
  //   const orderPay = useSelector((state) => state.orders.orderPay);
  let activeOrder = orders.filter((o) => o._id === id)[0];
  let itemsAmount;

  const successPaymentHandler = (paymentRes) => {
    payOrder(id, paymentRes)
      .unwrap()
      .then((res) => {
        console.log('Payment response:', res);
        if (res.status === 'success') {
          dispatch(payOrderSuccess());
          dispatch(clearCartItems());
          refetch();
        }
      })
      .catch((err) => dispatch(payOrderError(err)));
  };

  const createScript = async () => {
    const { data: clientId } = await axios.get('/api/config/paypal');
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
    script.async = true;
    script.id = 'PaypalScript';
    script.onload = () => {
      setSdkReady(true);
    };
    document.body.appendChild(script);
  };

  useEffect(() => {
    if (!document.getElementById('PaypalScript')) {
      createScript();
    }
  }, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch(saveOrder(data.data.order));
    }
    if (isError) {
      dispatch(saveOrderError(error));
    }
    //eslint-disable-next-line
  }, [data]);

  if (isLoading) {
    return <Spinner />;
  }
  if (!isAuthorized) {
    return (
      <div className={styles.payment}>
        <div className={styles.paymentInner}>
          <CustomMessage type='info'>
            Деталі замовлення доступні тільки після авторизації
          </CustomMessage>
        </div>
      </div>
    );
  }
  if (!activeOrder) {
    return (
      <div className={styles.payment}>
        <div className={styles.paymentInner}>
          <CustomMessage type='info'>Такого замовлення немє</CustomMessage>
        </div>
      </div>
    );
  } else {
    itemsAmount = activeOrder.orderItems.reduce(
      (acc, item) => acc + item.amount,
      0
    );

    return (
      <div className={styles.payment}>
        <div className={styles.paymentInner}>
          <Typography className={styles.paymentHeading} variant='h5'>
            Замовлення № {id}
          </Typography>

          <Grid container spacing={3}>
            <Grid item md={8} xs={12} sm={12} lg={8}>
              <OrderRow rowHeading='Статус замовлення'>
                {activeOrder.isPaid ? (
                  <CustomMessage type='success'>
                    Сплачено {activeOrder.paidAt}
                  </CustomMessage>
                ) : (
                  <CustomMessage type='error'>Потрібно оплатити</CustomMessage>
                )}
              </OrderRow>

              <OrderRow rowHeading='Шиппінг'>
                Им'я: {activeOrder.user.name}
                <br />
                Пошта: {activeOrder.user.email}
                <p style={{ marginTop: '0' }}>
                  вул. {activeOrder.shippingAddress.address}, мiсто{' '}
                  {activeOrder.shippingAddress.city},{' '}
                  {activeOrder.shippingAddress.index},{' '}
                  {activeOrder.shippingAddress.country}
                </p>
                {activeOrder.isDelivered ? (
                  <CustomMessage type='success'>Доставлено</CustomMessage>
                ) : (
                  <CustomMessage type='error'>Не доставлено</CustomMessage>
                )}
              </OrderRow>

              <OrderRow rowHeading='Спосiб розрахунку'>
                Система: {activeOrder.paymentMethod.toUpperCase()}
              </OrderRow>

              <OrderRow rowHeading='Товари' divider={false}>
                {renderOrderItems(activeOrder.orderItems, OrderProductItem)}
              </OrderRow>
            </Grid>

            <Grid item md={4} xs={12} sm={12} lg={4}>
              <OrderSummary
                tax={activeOrder.taxPrice}
                totalAmount={itemsAmount}
                totalPrice={activeOrder.totalPrice}
                shippingPrice={activeOrder.shippingPrice}
                visibleBtn={false}
              />
              {!activeOrder.isPaid &&
                (!sdkReady ? (
                  <Spinner />
                ) : (
                  <>
                    <PayPalButton
                      amount={activeOrder.totalPrice}
                      onSuccess={successPaymentHandler}
                    />
                    <p>login: sb-43tzrr8219816@personal.example.com</p>
                    <p>pass: ${'5r3nMK9<'}</p>
                  </>
                ))}
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
};

export default Order;
