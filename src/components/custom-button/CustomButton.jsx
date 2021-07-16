import React from 'react';
import './CustomButton.scss';

const CustomButton = ({ children, isGoogleSignIn, ...restProps }) => {
  const classes = isGoogleSignIn ? 'blue-btn' : null;

  return (
    <button className={`custom-button ${classes}`} type='submit' {...restProps}>
      {children}
    </button>
  );
};

export default CustomButton;
