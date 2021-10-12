import React from 'react';
import styles from './Register.module.css';
import { Typography } from '@mui/material';

import { RegisterForm } from '../../';

const Register = () => {
  return (
    <div className={styles.register}>
      <div className={styles.registerInner}>
        <Typography className={styles.registerHeading} variant='h5'>
          Реєстрація
        </Typography>

        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
