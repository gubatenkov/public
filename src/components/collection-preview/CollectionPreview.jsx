import React from 'react';
import './CollectionPreview.scss';

import { CollectionItem } from '../';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...restCollectionProps }) => (
            <CollectionItem key={id} id={id} {...restCollectionProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
