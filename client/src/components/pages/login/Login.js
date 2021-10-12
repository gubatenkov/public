import React from 'react';
import styles from './Login.module.css';
import { Typography } from '@mui/material';

import { LoginForm } from '../../';

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.loginInner}>
        <Typography className={styles.loginHeading} variant='h5'>
          Авторизацiя
        </Typography>

        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
