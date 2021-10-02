import React, { useEffect } from 'react';

import { Box, CircularProgress, Grid, Typography } from '@material-ui/core';
import { ContactForm, ContactList, Search } from '..';
import { useContactContext } from '../../context/contact/contactContext';
import { useState } from 'react';
import { useAuthContext } from '../../context/auth/authContext';
import { searchItem } from '../../utils/functions';

const Dashboard = () => {
  const [query, setQuery] = useState('');
  const { editContact, contacts, fetchInitialContacts, loading } =
    useContactContext();
  const { currentUser } = useAuthContext();
  const editTitle = 'Отредактируйте';
  const addTitle = 'Добавьте';

  useEffect(() => {
    fetchInitialContacts();
    // eslint-disable-next-line
  }, []);

  const showGreeting = () => {
    return `Рады видеть, ${
      currentUser?.name[0].toUpperCase() + currentUser?.name.slice(1)
    }!`;
  };

  return (
    <div className='home'>
      <Grid container spacing={4}>
        <Grid item md={7} sm={12} xs={12}>
          <Box textAlign='center'>
            <Typography variant='h3' style={{ padding: '1rem' }}>
              {showGreeting()}
            </Typography>
            <Typography variant='h4' style={{ padding: '2rem' }}>
              {editContact !== null ? editTitle : addTitle} контакт
            </Typography>
          </Box>

          <ContactForm />
        </Grid>

        <Grid item md={5} sm={12} xs={12}>
          <Search setQuery={setQuery} query={query} />
          {/* show spinner when loading, then contacts */}
          {loading ? (
            <div style={{ margin: '4rem', textAlign: 'center' }}>
              <CircularProgress />
            </div>
          ) : (
            <ContactList contacts={searchItem(contacts, query)} />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
