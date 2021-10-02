import React, { useEffect, useState } from 'react';

import { Button, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { AlertBox } from '../';
import { useAlertContext } from '../../context/alert/alertContext';
import { isEmailValid } from '../../utils/functions';
import { authService } from '../../utils/authService';
import { useAuthContext } from '../../context/auth/authContext';

const Login = ({ history }) => {
  const { alerts, visible, showAlert, removeAlert } = useAlertContext();
  const { currentUser, setLoginedUserToState, checkLocalUser, setLoginFailed } =
    useAuthContext();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  useEffect(() => {
    // if user has been logined earlier redirect to dashboard
    checkLocalUser();
    if (currentUser) {
      history.push('/dashboard');
    }
    // clear alert on unmounting
    return () => removeAlert();
    // eslint-disable-next-line
  }, [currentUser]);

  const loginUser = () => {
    authService
      .loginUser(user)
      .then((data) => {
        if (data.status === 'success') {
          setLoginedUserToState(data.data);
          // showAlert('Пользователь авторизован', 'success', 3000);
          setUser({
            email: '',
            password: '',
          });
        }
        if (data.status === 'failed') {
          showAlert(`Ошибка авторизации. Сообщение: ${data.message}`, 'error');
        }
      })
      .catch((err) => {
        setLoginFailed(err);
        showAlert(`Ошибка авторизации! Сообщение: ${err.message}`, 'warning');
      });
  };

  const onChange = (e) => {
    setUser((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    // validate auth data before send to the server
    if (!isEmailValid(email)) {
      showAlert('Проверьте почту');
    } else if (password.length < 5) {
      showAlert('Пароль не менее 5 симовлов');
    } else {
      // send auth data to the server
      loginUser();
    }
  };

  return (
    <div className='login'>
      <div className='login-inner'>
        <Typography variant='h3' className='page-heading'>
          Авторизация
        </Typography>

        <form className='login-form' onSubmit={onSubmitForm}>
          <TextField
            id='email'
            name='email'
            type='email'
            className='contact-field'
            label='Почта'
            style={{ margin: 8 }}
            fullWidth
            margin='normal'
            variant='outlined'
            required
            value={email}
            onChange={onChange}
          />
          <TextField
            id='password'
            name='password'
            type='password'
            className='contact-field'
            label='Пароль'
            style={{ margin: 8 }}
            fullWidth
            margin='normal'
            variant='outlined'
            required
            value={password}
            onChange={onChange}
          />
          user@gmail.com - 123456
          <Button
            style={{ marginTop: '4rem' }}
            variant='contained'
            color='primary'
            size='large'
            fullWidth
            type='submit'
          >
            Войти
          </Button>
          <Typography
            variant='h5'
            style={{ textAlign: 'center', margin: '2rem 0 0' }}
          >
            Нет аккаунта? <Link to='/register'>Создать</Link>
          </Typography>
        </form>

        {/* if there any new alerts then show last message */}
        {visible && alerts.length !== 0 && (
          <AlertBox type={alerts[alerts.length - 1].type}>
            {alerts[alerts.length - 1].message}
          </AlertBox>
        )}
      </div>
    </div>
  );
};

export default Login;
