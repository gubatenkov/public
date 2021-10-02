import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { Typography } from '@material-ui/core';

const AlertBox = ({ children, type }) => {
  return (
    <div style={{ maxWidth: '500px', margin: '4rem auto 0' }}>
      <Alert severity={type}>
        <Typography variant='h5'>{children}</Typography>
      </Alert>
    </div>
  );
};

export default AlertBox;
