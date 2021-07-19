import React from 'react';
import './CartItem.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt='cart item' />

      <div className='item-details'>
        <div className='name'>{name}</div>
        <div className='price'>
          {quantity} x ${price}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
