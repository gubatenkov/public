import React from 'react';

import { IconButton, InputBase, Paper } from '@material-ui/core';
import BackspaceIcon from '@material-ui/icons/Backspace';

const Search = ({ query, setQuery }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery('');
  };

  return (
    <Paper
      className='search'
      style={{
        padding: '5px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      component='form'
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      onChange={(e) => setQuery(e.target.value)}
      onSubmit={handleSubmit}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        type='text'
        placeholder='Поиск...'
        inputProps={{ 'aria-label': 'поиск контактов' }}
        style={{ width: '100%', padding: '0 15px', fontSize: '1.4rem' }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <IconButton type='submit' sx={{ p: '10px' }} aria-label='search'>
        <BackspaceIcon />
      </IconButton>
    </Paper>
  );
};

export default Search;
