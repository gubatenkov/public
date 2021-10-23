import React, { useEffect } from 'react';
import styles from './Home.module.css';
import { Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

// eslint-disable-next-line
import { renderItems, useFetch } from '../../../utils/functions';
import { ProductItem, Spinner } from '../../';
import {
  setLoadedProducts,
  setError,
} from '../../../features/products/productListSlice';
import { useGetAllProductsQuery } from '../../../serviсes/productApi';

const Home = () => {
  // const [products, isLoading, errors] = useFetch();
  const { data, error, isLoading, isError } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.productList.items);
  const errors = useSelector((state) => state.productList.productListErrors);

  useEffect(() => {
    if (data?.status === 'success') {
      dispatch(setLoadedProducts(data.data.products));
    }
    if (isError) {
      dispatch(setError({ message: error.error }));
    }
    if (errors.length > 0) {
      const last = errors.length - 1;
      throw new Error(errors[last].error);
    }
  }, [data]);

  return (
    <div className={styles.home}>
      <Typography className={styles.heading} variant='h4'>
        Останні надходження
      </Typography>

      <div className={styles.content}>
        <Grid container spacing={3}>
          {isLoading ? <Spinner /> : renderItems(items, ProductItem)}
        </Grid>
      </div>
    </div>
  );
};

export default Home;
