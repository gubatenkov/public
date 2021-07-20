import React from 'react';
import './ShopPage.scss';

import { CollectionsOverview } from '../../components/';
import { Route } from 'react-router-dom';
import { Collection } from '../../pages/';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={Collection} />
  </div>
);

export default ShopPage;
