import React from 'react';
import './CartDropdown.scss';

import { CustomButton, CartItem } from '../';
import { connect } from 'react-redux';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>

      <CustomButton>CHECKOUT</CustomButton>
    </div>
  );
};

const stateToProp = ({ cart }) => {
  return {
    cartItems: cart.cartItems,
  };
};

export default connect(stateToProp, null)(CartDropdown);
