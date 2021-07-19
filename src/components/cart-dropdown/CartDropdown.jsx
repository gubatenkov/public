import React from 'react';
import './CartDropdown.scss';

import { CustomButton, CartItem } from '../';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/selectors/cartSelector';

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

const stateToProp = (state) => {
  return {
    cartItems: selectCartItems(state),
  };
};

export default connect(stateToProp, null)(CartDropdown);
