import React from 'react';
import styles from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import { Badge, Button, ButtonGroup, Toolbar, Typography } from '@mui/material';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';

import Logo from './Logo/Logo';
import { clearUser } from '../../features/auth/authSlice';

const Header = ({ title }) => {
  const user = useSelector((state) => state.auth.user);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalCartItems = cartItems.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return (
    <AppBar position='static' color='secondary'>
      <Toolbar>
        <div className={styles.headerInner}>
          {/* header title */}
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}
            style={{ display: 'flex' }}
          >
            <Link
              className={styles.navLink}
              style={{ display: 'inline-flex', alignItems: 'center' }}
              to='/'
            >
              <Logo />
              {title.toUpperCase()}
            </Link>
          </Typography>

          {/* header actions */}
          <ButtonGroup
            variant='text'
            color='inherit'
            aria-label='cart and login links'
          >
            {user !== null ? (
              <UserActions
                username={user?.name}
                totalCartItems={totalCartItems}
              />
            ) : (
              <NoUserActions totalCartItems={totalCartItems} />
            )}
          </ButtonGroup>
        </div>
      </Toolbar>
    </AppBar>
  );
};

const UserActions = ({ username, totalCartItems }) => {
  const dispatch = useDispatch();

  return (
    <>
      {/* show user greeting  */}
      <Button className={styles.navLink} size='small' color='inherit'>
        Вітання, {username}
      </Button>
      {/* link to cart page */}
      <Button component={Link} to='/cart' size='small' color='inherit'>
        <Badge badgeContent={totalCartItems} color='primary'>
          <ShoppingBasketRoundedIcon fontSize='small' />
        </Badge>
      </Button>
      {/* logout */}
      <Button
        className={styles.navLink}
        color='inherit'
        startIcon={<ExitToAppRoundedIcon fontSize='small' />}
        onClick={() => dispatch(clearUser())}
      >
        Вийти
      </Button>
    </>
  );
};

const NoUserActions = ({ totalCartItems }) => {
  const [path, setPath] = React.useState('');
  let location = useLocation();

  React.useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  return (
    <>
      {/* go to cart page & show num of items in cart*/}
      <Button component={Link} to='/cart' size='small' color='inherit'>
        <Badge badgeContent={totalCartItems} color='primary'>
          <ShoppingBasketRoundedIcon fontSize='small' />
        </Badge>
      </Button>
      {/* go to login or register page btn */}
      {path === '/login' ? <RegisterBtn /> : <LoginBtn />}
    </>
  );
};

const RegisterBtn = () => (
  <Button
    className={styles.navLink}
    component={Link}
    to='/register'
    color='inherit'
    startIcon={<ExitToAppRoundedIcon fontSize='small' />}
  >
    Реєстрація
  </Button>
);

const LoginBtn = () => (
  <Button
    className={styles.navLink}
    component={Link}
    to='/login'
    color='inherit'
    startIcon={<ExitToAppRoundedIcon fontSize='small' />}
  >
    Увійти
  </Button>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
