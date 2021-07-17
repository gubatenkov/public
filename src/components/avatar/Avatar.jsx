import React from 'react';

const Avatar = ({ src, alt, ...restProps }) => (
  <img src={src} alt={alt} {...restProps} />
);

export default Avatar;
