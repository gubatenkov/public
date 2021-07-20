import React from 'react';
import './CollectionOverview.scss';

import { selectCollectionsForPreview } from '../../redux/selectors/shopSelector';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { CollectionPreview } from '../';

const CollectionsOverview = ({ collections }) => {
  console.log(collections);
  return (
    <div>
      {collections.map(({ id, ...restCollectionProps }) => (
        <CollectionPreview key={id} {...restCollectionProps} />
      ))}
    </div>
  );
};

const stateToProp = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(stateToProp)(CollectionsOverview);
