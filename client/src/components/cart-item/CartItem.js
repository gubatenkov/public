import React, { useEffect, useState } from 'react';
import styles from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, IconButton, Typography } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { SelectItemQuantity } from '../';
import {
  removeCartItem,
  updateCartItemAmount,
} from '../../features/cart/cartSlice';

const CartItem = ({
  _id: id,
  name,
  image,
  price,
  countInStock,
  amount: amountInCart,
}) => {
  const [amount, setAmount] = useState(amountInCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateCartItemAmount({ id, amount }));
    // eslint-disable-next-line
  }, [amount]);

  return (
    <div className={styles.cartItem}>
      <Grid container item spacing={2}>
        {/* preview of item */}
        <Grid item md={2}>
          <div className={styles.cartItemImgWrap}>
            <img className={styles.cartItemImg} src={image} alt={name} />
          </div>
        </Grid>
        {/* title of item */}
        <Grid item md={5}>
          <Typography variant='body1' component={Link} to={`/product/${id}`}>
            {name}
          </Typography>
        </Grid>
        {/* price */}
        <Grid item md={2}>
          <Typography variant='h6'>{price} UAH</Typography>
        </Grid>
        {/* change amount of item in cart */}
        <Grid item md={2}>
          <SelectItemQuantity
            available={countInStock}
            value={amount}
            onChangeHandler={setAmount}
          />
        </Grid>
        {/* delete item from cart */}
        <Grid item md={1}>
          <IconButton onClick={() => dispatch(removeCartItem(id))}>
            <HighlightOffIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default CartItem;
