import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {
  Box,
  Button,
  CardActions,
  Chip,
  Divider,
  Typography,
} from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import PropTypes from 'prop-types';
import { useContactContext } from '../../context/contact/contactContext';

const ContactItem = ({ _id, name, email, phone, type }) => {
  const id = _id;
  const { deleteContact, setEditContact, clearEditContact, editContact } =
    useContactContext();

  const handleEdit = (id) => {
    setEditContact(id);
  };

  const handleDelete = (id) => {
    deleteContact(id);
    if (editContact?.id === id) {
      clearEditContact();
    }
  };

  return (
    <Card className='contact'>
      <CardContent>
        <Box
          className='card-row'
          display='flex'
          justifyContent='space-between'
          alignItems='center'
        >
          <Typography variant='h4'>{name}</Typography>
          <Chip
            icon={type === 'personal' ? <FaceIcon /> : <BusinessCenterIcon />}
            variant='outlined'
            label={
              <Typography variant='h6'>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Typography>
            }
          />
        </Box>

        <Box className='card-row' display='flex' alignItems='center'>
          <EmailIcon fontSize='medium' />
          <Typography variant='h5'>{email}</Typography>
        </Box>

        <Divider />

        {phone && (
          <Box className='card-row' display='flex' alignItems='center'>
            <PhoneAndroidIcon fontSize='medium' />
            <Typography variant='h5'>+ {phone}</Typography>
          </Box>
        )}
      </CardContent>
      <CardActions>
        <Button
          size='large'
          variant='outlined'
          color='primary'
          onClick={() => handleEdit(id)}
        >
          Изменить
        </Button>
        <Button
          size='large'
          variant='outlined'
          color='secondary'
          onClick={() => handleDelete(id)}
        >
          Удалить
        </Button>
      </CardActions>
    </Card>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string,
  type: PropTypes.string,
};

export default ContactItem;
