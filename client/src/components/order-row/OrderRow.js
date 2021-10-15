import React from 'react';
import styles from './OrderRow.module.css';
import { Divider, Grid, ListItem, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const OrderRow = ({ rowHeading, children, divider = true }) => {
  return (
    <ListItem className={styles.orderItem}>
      <Grid container>
        <Grid item md={12} xs={12} sm={12} lg={12}>
          <Typography className={styles.orderItemHeading} variant='h5'>
            {rowHeading}
          </Typography>
        </Grid>

        <Grid item md={12} xs={12} sm={12} lg={12}>
          <Typography
            className={styles.orderItemBody}
            variant='body1'
            component='div'
          >
            {children}
          </Typography>
        </Grid>

        {divider && (
          <Grid item md={12} xs={12} sm={12} lg={12}>
            <Divider />
          </Grid>
        )}
      </Grid>
    </ListItem>
  );
};

OrderRow.propTypes = {
  rowHeading: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  divider: PropTypes.bool,
};

export default OrderRow;
