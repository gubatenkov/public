import React, { useCallback, useEffect, useState } from 'react';

import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@material-ui/core';
import { useContactContext } from '../../context/contact/contactContext';

const ContactForm = () => {
  const { editContact, addContact, updateContact, clearEditContact } =
    useContactContext();
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });
  const [emailInputError, setEmailInputError] = useState(false);
  const { name, email, phone, type } = contact;

  const handleAbortEdit = () => {
    clearEditContact();
  };

  const checkEditContact = useCallback(() => {
    if (editContact !== null) {
      setContact(editContact);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      });
    }
  }, [editContact]);

  const onChange = (e) => {
    setContact((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const isEmailValid = (email) => {
    if (email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
      return true;
    } else {
      return false;
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (editContact === null) {
      if (isEmailValid(contact.email)) {
        addContact(contact);
        setContact({
          name: '',
          email: '',
          phone: '',
          type: 'personal',
        });
        setEmailInputError(false);
      } else {
        setEmailInputError(true);
      }
    } else {
      if (isEmailValid(contact.email)) {
        updateContact(contact);
        clearEditContact();
        setContact({
          name: '',
          email: '',
          phone: '',
          type: 'personal',
        });
        setEmailInputError(false);
      } else {
        setEmailInputError(true);
      }
    }
  };

  useEffect(() => {
    checkEditContact();
  }, [editContact, checkEditContact]);

  return (
    <form className='contact-form' onSubmit={onSubmitForm}>
      <TextField
        id='name'
        name='name'
        type='text'
        className='contact-field'
        label='Имя'
        style={{ margin: 8 }}
        fullWidth
        margin='normal'
        variant='outlined'
        required
        value={name}
        onChange={onChange}
      />
      <TextField
        id='email'
        name='email'
        type='email'
        className='contact-field'
        label='Почта'
        style={{ margin: 8 }}
        fullWidth
        margin='normal'
        variant='outlined'
        error={emailInputError}
        required
        value={email}
        onChange={onChange}
      />
      <TextField
        id='phone'
        name='phone'
        type='number'
        className='contact-field'
        label='Телефон'
        style={{ margin: 8 }}
        fullWidth
        margin='normal'
        variant='outlined'
        value={phone}
        onChange={onChange}
      />

      <Typography variant='h5' style={{ marginTop: '2rem' }}>
        Тип:
      </Typography>

      <FormControl component='fieldset'>
        <RadioGroup
          aria-label='type'
          name='type'
          value={type}
          onChange={onChange}
        >
          <FormControlLabel
            value='personal'
            control={<Radio />}
            label='Личный'
          />
          <FormControlLabel
            value='business'
            control={<Radio />}
            label='Бизнес'
          />
        </RadioGroup>

        <Button
          style={{ marginTop: '2rem' }}
          variant='contained'
          color='primary'
          size='large'
          fullWidth
          type='submit'
        >
          {editContact === null ? 'Создать' : 'Изменить'}
        </Button>

        {editContact && (
          <Button
            style={{ marginTop: '2rem' }}
            variant='contained'
            color='secondary'
            size='large'
            fullWidth
            onClick={handleAbortEdit}
          >
            Отменить
          </Button>
        )}
      </FormControl>
    </form>
  );
};

export default ContactForm;
