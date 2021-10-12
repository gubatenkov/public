import React from 'react';

import { Breadcrumbs, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const BreadcrumbsItem = ({ children }) => {
  return (
    <Breadcrumbs aria-label='breadcrumb'>
      <Link
        color='inherit'
        to='/'
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        Головна
      </Link>
      <Typography color='text.primary'>{children}</Typography>
    </Breadcrumbs>
  );
};

export default BreadcrumbsItem;
