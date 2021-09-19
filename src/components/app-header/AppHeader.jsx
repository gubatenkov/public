import React from 'react';
import { ThemeToggle } from '../';

const AppHeader = ({ todo, done, changeTeheme, darkMode }) => {
  return (
    <header
      className='header d-flex flex-column text-center'
      style={{ marginBottom: '2rem' }}
    >
      <h1 style={{ textTransform: 'uppercase' }}>Достижений</h1>
      <p style={{ color: 'grey' }}>
        {todo} осталось и выполнено {done}
      </p>
      <ThemeToggle changeTeheme={changeTeheme} darkMode={darkMode} />
    </header>
  );
};

export default AppHeader;
