import React from 'react';
import './Header.scss';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase';
import { CustomButton, Avatar, CartIcon, CartDropdown } from '../';
import {
  selectCurrentUser,
  selectDefaultImg,
  selectCartVisible,
} from '../../redux/selectors/userSelector';
import { createStructuredSelector } from 'reselect';

const Header = ({ currentUser, defaultImg, visible }) => (
  <header className='header'>
    <div className='container'>
      <div className='header-inner'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>

        <div className='options'>
          <Link className='option' to='/shop'>
            SHOP
          </Link>
          <Link className='option' to='/contact'>
            CONTACT
          </Link>
          {currentUser ? (
            <>
              <CustomButton
                className='option option-btn'
                onClick={() => auth.signOut()}
              >
                Log Out
              </CustomButton>
              <p className='user-name'>Welcome, {currentUser.displayName}</p>
              <Avatar
                className='user-avatar'
                src={currentUser.photoURL ? currentUser.photoURL : defaultImg}
              />
            </>
          ) : (
            <Link className='option option-btn' to='/signin'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>

        {visible && <CartDropdown />}
      </div>
    </div>
  </header>
);

const stateToProp = createStructuredSelector({
  currentUser: selectCurrentUser,
  defaultImg: selectDefaultImg,
  visible: selectCartVisible,
});

export default connect(stateToProp, null)(Header);
