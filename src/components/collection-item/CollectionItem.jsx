import React from 'react';
import './CollectionItem.scss';

import { connect } from 'react-redux';
import { addCartItem } from '../../redux/actions';
import { CustomButton } from '../';

const CollectionItem = ({ item, addCartItem }) => {
  const { name, imageUrl, price } = item;

  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>$ {price}</span>
      </div>

      <CustomButton onClick={() => addCartItem(item)} inverted>
        Add to Cart
      </CustomButton>
    </div>
  );
};

const dispatchToProp = {
  addCartItem,
};

export default connect(null, dispatchToProp)(CollectionItem);
