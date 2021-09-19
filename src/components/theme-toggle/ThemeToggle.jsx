import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ changeTeheme, darkMode }) => {
  return (
    <div>
      <input
        type='checkbox'
        className='checkbox'
        id='checkbox'
        onClick={changeTeheme}
        checked={darkMode ? 'checked' : ''}
        readOnly
      />
      <label htmlFor='checkbox' className='label'>
        <i className='fas fa-moon' />
        <i className='fas fa-sun' />
        <div className='ball' />
      </label>
    </div>
  );
};

export default ThemeToggle;
