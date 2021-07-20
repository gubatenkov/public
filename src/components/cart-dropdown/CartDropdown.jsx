import React from 'react';
import './CartDropdown.scss';

import { CustomButton, CartItem } from '../';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/selectors/cartSelector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartDropdown } from '../../redux/actions';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const onGoToCheckout = () => {
    history.push('/checkout');
    // close dropdown when already on checkout page
    dispatch(toggleCartDropdown());
  };

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })
        ) : (
          <span className='empty-message'>Cart is empty</span>
        )}
      </div>

      <CustomButton onClick={onGoToCheckout}>CHECKOUT</CustomButton>
    </div>
  );
};

const stateToProp = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(stateToProp)(CartDropdown));
