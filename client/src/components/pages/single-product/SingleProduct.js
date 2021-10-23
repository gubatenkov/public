import React, { useState } from 'react';
import styles from './SingleProduct.module.css';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, List, Paper, Typography } from '@mui/material';

import { BreadcrumbsItem, SelectItemQuantity, Spinner } from '../..';
import ProductListItem from './product-list-item/PoductListItem';
import {
  setProduct,
  setError,
} from '../../../features/single-product/singleProductSlice';
import { addCartItem } from '../../../features/cart/cartSlice';
import { useGetProductByIdQuery } from '../../../serviсes/productApi';

const SingleProduct = () => {
  const { id } = useParams();
  const { data, error, isLoading, isError, isSuccess } =
    useGetProductByIdQuery(id);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.singleProduct.item);
  const errors = useSelector((state) => state.singleProduct.productErrors);

  if (isSuccess && !isLoading) {
    dispatch(setProduct(data.data.product));
  }
  if (isError) {
    dispatch(setError(error));
  }
  if (errors.length > 0) {
    throw new Error(errors[errors.length - 1].error);
  }

  return (
    <div>
      <div className='breadcrumbs-wrap' style={{ margin: '2rem' }}>
        <BreadcrumbsItem aria-label='breadcrumb'>
          {product?.name ?? 'product'}
        </BreadcrumbsItem>
      </div>

      {isLoading ? <Spinner /> : <ProductLayout product={product} />}
    </div>
  );
};

const ProductLayout = ({ product }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);
  const { name, description, image, price, countInStock, rating } = product;
  const cartItems = useSelector((state) => state.cart.cartItems);
  const itemInCart = cartItems.find((i) => i._id === product._id);
  let productBtnStatus;

  if (countInStock === 0) {
    productBtnStatus = 'Скоро у наявностi';
  } else if (itemInCart !== undefined) {
    productBtnStatus = 'Вже у кошику';
  } else {
    productBtnStatus = 'У кошик';
  }

  const handleAddToCart = () => {
    dispatch(addCartItem({ ...product, amount }));
  };

  return (
    <div className={styles.productInner}>
      <Grid container spacing={4}>
        <Grid item md={6}>
          <Paper component='div' style={{ overflow: 'hidden' }} elevation={3}>
            <img className={styles.productImg} src={`.${image}`} alt={name} />
          </Paper>
        </Grid>

        <Grid item md={6}>
          <div className={styles.productMetaWrap}>
            <div className={styles.productMetaTop}>
              <Typography variant='h4'>{name}</Typography>

              <List>
                <ProductListItem label='Рейтинг:'>
                  {rating} зiрок
                </ProductListItem>
                <ProductListItem label='У наявностi:'>
                  {countInStock} шт.
                </ProductListItem>
                <ProductListItem label='Цiна:'> {price} UAH</ProductListItem>
                <ProductListItem divider={false}>{description}</ProductListItem>
              </List>
            </div>

            <div className={styles.productActions}>
              {countInStock > 0 && (
                <SelectItemQuantity
                  available={countInStock}
                  value={itemInCart !== undefined ? itemInCart.amount : amount}
                  onChangeHandler={setAmount}
                  disabled={itemInCart !== undefined}
                />
              )}

              <Button
                variant='contained'
                color='primary'
                fullWidth
                size='large'
                disabled={countInStock === 0 || itemInCart !== undefined}
                onClick={handleAddToCart}
              >
                {productBtnStatus}
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SingleProduct;
