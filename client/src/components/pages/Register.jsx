import React, { useEffect, useState } from 'react';

import { Button, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { AlertBox } from '../';
import { useAlertContext } from '../../context/alert/alertContext';
import { isEmailValid } from '../../utils/functions';
import { authService } from '../../utils/authService';
import { useAuthContext } from '../../context/auth/authContext';

const Register = ({ history }) => {
  const { alerts, visible, showAlert, removeAlert } = useAlertContext();
  const { currentUser, setNewUserToState, setRegisterFailed, checkLocalUser } =
    useAuthContext();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = user;

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

  const createNewUser = () => {
    authService
      // send auth data to the server
      .createUser(user)
      .then((res) => {
        // then save new user to the authContext state
        if (res.status === 'success') {
          setNewUserToState(res.data);
          showAlert(
            `Пользователь с именем ${res.data.name} успешно создан`,
            'success'
          );
        }
        if (res.status === 'failed') {
          showAlert(`Внимание! ${res.message}`, 'warning', 7000);
        }
      })
      .catch((err) => {
        setRegisterFailed(err);
        showAlert(`Ошибка! ${err.message}`, 'error');
      });
  };

  const onChange = (e) => {
    setUser((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    // validate user fields
    if (!isEmailValid(email)) {
      showAlert('Исправьте поле "Почта"');
    } else if (password !== password2) {
      showAlert('Пароли не совпадают');
    } else if (password.length < 6) {
      showAlert('Пароль не менее 6 символов');
    } else {
      createNewUser();
      // lastly clear the register form
      setUser({
        name: '',
        email: '',
        password: '',
        password2: '',
      });
    }
  };

  return (
    <div className='register'>
      <div className='register-inner'>
        <Typography variant='h3' className='page-heading'>
          Регистрация
        </Typography>

        <form className='register-form' onSubmit={onSubmitForm}>
          <TextField
            id='name'
            name='name'
            type='text'
            className='contact-field'
            label='Имя'
            style={{ margin: 8 }}
            fullWidth
            margin='normal'
            variant='outlined'
            required
            value={name}
            onChange={onChange}
          />
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
          <TextField
            id='password2'
            name='password2'
            type='password'
            className='contact-field'
            label='Подтвердите пароль'
            style={{ margin: 8 }}
            fullWidth
            margin='normal'
            variant='outlined'
            value={password2}
            onChange={onChange}
          />

          <Button
            style={{ marginTop: '4rem' }}
            variant='contained'
            color='primary'
            size='large'
            fullWidth
            type='submit'
          >
            Создать аккаунт
          </Button>

          <Typography
            variant='h5'
            style={{ textAlign: 'center', margin: '2rem 0 0' }}
          >
            Есть аккаунт? <Link to='/'>Войти</Link>
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

export default Register;
