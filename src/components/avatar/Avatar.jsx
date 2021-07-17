import React from 'react';
import './Avatar.scss';

const Avatar = ({ src, alt, ...restProps }) => (
  <img src={src} alt={alt} {...restProps} />
);

export default Avatar;
