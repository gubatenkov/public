import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from 'assets/images/react.svg';

const Logo = () => {
  const location = useLocation();

  return (
    <Link to={location.pathname} className='navbar-brand mr-0 mr-md-2 logo'>
      <span className='logo-lg d-flex align-items-center'>
        <img className='me-1' src={logo} alt='logo' height='30' />
        <span className='fs-5 mb-0 mt-0 text-info'>React CRM</span>
      </span>
    </Link>
  );
};

export default Logo;
