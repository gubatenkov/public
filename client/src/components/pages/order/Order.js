import React from 'react';
import styles from '../payment/Payment.module.css';
import { Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { CustomMessage, OrderRow, OrderSummary } from '../../';
import { renderOrderItems } from '../../../utils/functions';
import OrderProductItem from '../placeorder/OrderProductItem';
import { useGetOrderByIdQuery } from '../../../serviсes/orderApi';
import {
  saveOrder,
  saveOrderError,
} from '../../../features/orders/ordersSlice';

const Order = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, isSuccess, isError, error } = useGetOrderByIdQuery(id);
  const orders = useSelector((state) => state.orders.orderItems);
  const isAuthorized = useSelector((state) => state.auth.isAuthorized);
  let activeOrder = orders.filter((o) => o._id === id)[0];
  let itemsAmount;

  React.useEffect(() => {
    if (isSuccess) {
      dispatch(saveOrder(data.data.order));
    }
    if (isError) {
      dispatch(saveOrderError(error));
    }
    //eslint-disable-next-line
  }, [data]);

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
                  <CustomMessage type='success'>Сплачено</CustomMessage>
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
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
};

export default Order;
