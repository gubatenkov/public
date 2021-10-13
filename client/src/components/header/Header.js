import React from 'react';
import styles from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Badge,
  Button,
  ButtonGroup,
  Toolbar,
  Typography,
  AppBar,
  Menu,
  MenuItem,
} from '@mui/material';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CreateIcon from '@mui/icons-material/Create';
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    let data = e.target.dataset.menu;
    if (data === 'exit') {
      dispatch(clearUser());
    }
  };

  return (
    <>
      {/* link to cart page */}
      <Button component={Link} to='/cart' size='small' color='inherit'>
        <Badge badgeContent={totalCartItems} color='primary'>
          <ShoppingBasketRoundedIcon fontSize='small' />
        </Badge>
      </Button>

      {/* user !== null show menu dropdown */}
      <Button
        id='basic-button'
        aria-controls='basic-menu'
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        color='inherit'
        endIcon={<KeyboardArrowDownIcon />}
        onClick={handleClick}
      >
        {username}
      </Button>

      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} data-menu='profile'>
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose} data-menu='account'>
          My account
        </MenuItem>
        <MenuItem onClick={handleClose} data-menu='exit'>
          Logout
        </MenuItem>
      </Menu>
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
      {/* Cart link */}
      <Button component={Link} to='/cart' size='small' color='inherit'>
        <Badge badgeContent={totalCartItems} color='primary'>
          <ShoppingBasketRoundedIcon fontSize='small' />
        </Badge>
      </Button>
      {/* if on Login page now, show Register link */}
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
    startIcon={<CreateIcon fontSize='small' />}
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
