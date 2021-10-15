import React from 'react';
import styles from './Cart.module.css';
import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { CustomMessage, CartItem, CheckoutCard } from '../../';
import { renderCartItems } from '../../../utils/functions';

const Cart = () => {
  const items = useSelector((state) => state.cart.cartItems);
  // calculating cart totals
  let totals = items.reduce(
    (acc, item) => {
      acc.totalSum = acc.totalSum + item.price * item.amount;
      acc.totalAmount = acc.totalAmount + item.amount;
      return acc;
    },
    { totalSum: 0, totalAmount: 0 }
  );

  return (
    <div className={styles.cart}>
      <Typography variant='h4'>Зараз у кошику:</Typography>

      <div className={styles.cartContent}>
        {/* if cart is empty show message */}
        {items.length === 0 ? (
          <CustomMessage type='info'>
            Нiчого нема! Почнiть <Link to='/'>додавати товари</Link>
          </CustomMessage>
        ) : (
          // else render items from cart
          <Grid container spacing={2}>
            <Grid container item md={9}>
              {renderCartItems(items, CartItem)}
            </Grid>

            <Grid container item md={3}>
              <CheckoutCard
                taxInPercent={3}
                totalAmount={totals.totalAmount}
                totalPrice={totals.totalSum}
              />
            </Grid>
          </Grid>
        )}
      </div>
    </div>
  );
};

export default Cart;
