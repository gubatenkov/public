import React from 'react';
import './CartIcon.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../redux/actions/';

const CartIcon = ({ toggleCartDropdown }) => {
  return (
    <div className='cart-icon' onClick={toggleCartDropdown}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

const dispatchToProp = {
  toggleCartDropdown,
};

export default connect(null, dispatchToProp)(CartIcon);
