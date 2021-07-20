import React from 'react';
import './Directory.scss';

import { MenuItem } from '../';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import selectDirectorySections from '../../redux/selectors/directorySelector';

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...restSectionProps }) => (
        <MenuItem key={id} {...restSectionProps} />
      ))}
    </div>
  );
};

const stateToProp = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(stateToProp)(Directory);
