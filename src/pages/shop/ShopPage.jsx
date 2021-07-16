import React, { Component } from 'react';
import './ShopPage.scss';

import SHOP_DATA from './shop.data.js';
import { CollectionPreview } from '../../components/';

export default class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    const { collections } = this.state;

    return (
      <div className='shop-page'>
        {collections.map(({ id, ...restCollectionProps }) => (
          <CollectionPreview key={id} {...restCollectionProps} />
        ))}
      </div>
    );
  }
}
