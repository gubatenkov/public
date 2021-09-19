import React from 'react';

import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Form = () => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
      firstName: '',
      message: '',
      email: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        display: 'flex',
        margin: '0 auto',
        flexDirection: 'column',
        maxWidth: '500px',
      }}
    >
      <TextField
        id='firstName'
        name='firstName'
        type='text'
        label='Name'
        variant='standard'
        value={formik.values.firstName}
        onChange={formik.handleChange}
      />
      <TextField
        id='email'
        name='email'
        type='email'
        label='Email'
        variant='standard'
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <TextField
        id='message'
        name='message'
        type='text'
        label='Message...'
        multiline
        rows={6}
        value={formik.values.lastName}
        onChange={formik.handleChange}
      />

      <Button
        type='submit'
        style={{ margin: '2rem 0 0' }}
        color='primary'
        variant='outlined'
      >
        Submit
      </Button>
    </form>
  );
};

export default Form;
