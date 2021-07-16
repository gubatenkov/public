import React from 'react';
import './Header.scss';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase';
import { CustomButton } from '../';

const Header = ({ currentUser }) => (
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
            <CustomButton
              className='option option-btn'
              onClick={() => auth.signOut()}
            >
              Log Out
            </CustomButton>
          ) : (
            <Link className='option option-btn' to='/signin'>
              SIGN IN
            </Link>
          )}
        </div>
      </div>
    </div>
  </header>
);

export default Header;
