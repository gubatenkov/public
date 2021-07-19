import React from 'react';
import './CartIcon.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../redux/actions/';
import { selectCartItemsCount } from '../../redux/selectors/cartSelector';

const CartIcon = ({ toggleCartDropdown, cartItems }) => {
  return (
    <div className='cart-icon' onClick={toggleCartDropdown}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartItems}</span>
    </div>
  );
};

const stateToProp = (state) => {
  return {
    cartItems: selectCartItemsCount(state),
  };
};

const dispatchToProp = {
  toggleCartDropdown,
};

export default connect(stateToProp, dispatchToProp)(CartIcon);
