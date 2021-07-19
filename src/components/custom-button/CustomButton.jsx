import React from 'react';
import './CustomButton.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...restProps }) => {
  let classes;
  const invert = inverted ? 'inverted' : '';
  const googleSignIn = isGoogleSignIn ? 'blue-btn' : '';
  classes = `${invert} ${googleSignIn}`;

  return (
    <button className={`custom-button ${classes}`} type='submit' {...restProps}>
      {children}
    </button>
  );
};

export default CustomButton;
