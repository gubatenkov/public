import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { AppBar, Button, ButtonGroup, Typography } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { useAuthContext } from '../../context/auth/authContext';
import { useContactContext } from '../../context/contact/contactContext';

const Header = ({ title, icon }) => {
  const location = useLocation();
  const { currentUser, logoutUser } = useAuthContext();
  const { clearContacts } = useContactContext();

  const handleLogout = () => {
    logoutUser();
    clearContacts();
  };

  const showUserActions = () => {
    if (currentUser !== null) {
      return (
        <Button size='large' onClick={handleLogout}>
          Выйти
        </Button>
      );
    }
    if (location.pathname === '/' && !currentUser) {
      return (
        <Button component={Link} size='large' to='/register'>
          Регистрация
        </Button>
      );
    }
    if (location.pathname === '/register' && !currentUser) {
      return (
        <Button component={Link} to='/' size='large'>
          Войти
        </Button>
      );
    }
  };

  useEffect(() => {}, [currentUser, location.pathname]);

  return (
    <AppBar className='header' position='static'>
      <Link
        className='brand'
        to={currentUser ? '/dashboard' : '/'}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        {icon}{' '}
        <Typography
          className='heading'
          variant='h4'
          style={{ margin: '0 0 0 1rem' }}
        >
          {title}
        </Typography>
      </Link>

      <div className='actions'>
        <ButtonGroup
          variant='text'
          color='inherit'
          aria-label='menu button group'
        >
          {showUserActions()}
          <Button component={Link} to='/about' size='large'>
            Инфо
          </Button>
        </ButtonGroup>
      </div>
    </AppBar>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.any,
};

Header.defaultProps = {
  title: 'Контакты',
};

export default Header;
