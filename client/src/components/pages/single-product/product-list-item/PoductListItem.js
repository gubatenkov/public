import React from 'react';

import { Divider, ListItem } from '@mui/material';

const PoductListItem = ({ children, label, divider = true }) => {
  return (
    <>
      <ListItem disablePadding>
        <div
          style={{
            display: 'flex',
            width: '100%',
            padding: '10px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {label && <span>{label}</span>}
          <span>{children}</span>
        </div>
      </ListItem>
      {divider ? <Divider /> : null}
    </>
  );
};

export default PoductListItem;
