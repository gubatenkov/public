import React from 'react';
import './CheckoutItem.scss';

import { connect } from 'react-redux';
import { removeCartItem, updateQtyCartItem } from '../../redux/actions';

const CheckoutItem = ({
  cartItem: { id, name, imageUrl, price, quantity },
  dispatch,
}) => {
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <button
          className='quantity-btn increase'
          onClick={() => dispatch(updateQtyCartItem(id, 'dec'))}
        >
          &#10094;
        </button>
        <span>{quantity}</span>
        <button
          className='quantity-btn decrease'
          onClick={() => dispatch(updateQtyCartItem(id, 'inc'))}
        >
          &#10095;
        </button>
      </span>
      <span className='price'>${price}</span>
      <div
        className='remove-button'
        onClick={() => dispatch(removeCartItem(id))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default connect()(CheckoutItem);
