import React from 'react';

import { Form } from '../../components';
import { Typography } from '@material-ui/core';

const Contact = () => {
  return (
    <div className='contact-page'>
      <Typography
        className='title'
        variant='h4'
        style={{ textAlign: 'center', padding: '2rem' }}
      >
        Contact form
      </Typography>
      <Form />
    </div>
  );
};

export default Contact;
