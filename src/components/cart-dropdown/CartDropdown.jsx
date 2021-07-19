import React from 'react';
import './CartDropdown.scss';

import { CustomButton } from '../';
import { connect } from 'react-redux';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    </div>
  );
};

const stateToProp = ({ cart }) => {
  return {
    cartItems: cart.cartItems,
  };
};

export default connect(stateToProp, null)(CartDropdown);
