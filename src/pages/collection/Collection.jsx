import React from 'react';
import './Collection.scss';

import { selectCollection } from '../../redux/selectors/shopSelector';
import { connect } from 'react-redux';
import { CollectionItem } from '../../components';

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <div className='title'>{title}</div>
      <div className='items'>
        {items.map((item) => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

const stateToProp = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(stateToProp)(Collection);
