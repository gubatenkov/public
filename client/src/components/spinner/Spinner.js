import React from 'react';
import { CircularProgress } from '@mui/material';

const Spinner = () => {
  return (
    <div
      style={{
        display: 'block',
        width: '100%',
        height: '100%',
        marginTop: '100px',
        textAlign: 'center',
      }}
    >
      <CircularProgress />
    </div>
  );
};

export default Spinner;
