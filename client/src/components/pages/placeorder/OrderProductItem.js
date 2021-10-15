import React from 'react';
import { Divider, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const OrderProductItem = ({ image, name, price, amount }) => {
  return (
    <div style={{ margin: '0 0 10px 0' }}>
      <Grid container>
        <Grid item md={2} xs={2}>
          <img
            src={image}
            alt={name}
            style={{
              maxWidth: '100px',
              width: '100%',
              height: '50px',
              objectFit: 'cover',
            }}
          />
        </Grid>

        <Grid item md={7} xs={7}>
          <Typography variant='body2' style={{ padding: '0 10px' }}>
            {name}
          </Typography>
        </Grid>

        <Grid item md={3} xs={3}>
          <Typography variant='subtitle1'>
            {amount} шт. x {price} UAH
          </Typography>
        </Grid>
      </Grid>

      <Divider />
    </div>
  );
};

OrderProductItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
};

export default OrderProductItem;
