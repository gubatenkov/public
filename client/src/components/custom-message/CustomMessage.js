import React from 'react';
import { Alert } from '@mui/material';
import PropTypes from 'prop-types';

const CustomMessage = ({ children = 'Empty message', type = 'info' }) => {
  return (
    <Alert
      severity={type}
      style={{ margin: '0 auto 1.5rem', maxWidth: '500px' }}
    >
      {children}
    </Alert>
  );
};

CustomMessage.propTypes = {
  children: PropTypes.any.isRequired,
  type: PropTypes.string.isRequired,
};

export default CustomMessage;
