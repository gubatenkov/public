import React from 'react';
import './Checkout.scss';

import { CheckoutItem, StripeBtn } from '../../components';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/selectors/cartSelector';

const Checkout = ({ cartItems, cartTotal }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} cartItem={item} />;
      })}

      <div className='total'>
        <span>TOTAL: ${cartTotal}</span>
      </div>
      <p>test payment data num: 4242424242424242 exp: 01/22 cvv: 123</p>
      <StripeBtn price={cartTotal} />
    </div>
  );
};

const stateToProp = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(stateToProp, null)(Checkout);
