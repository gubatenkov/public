import React from 'react';
import { Settings } from 'react-feather';

const SettingsButton = () => {
  return (
    <li className='notification-list'>
      <button className='btn btn-link nav-link right-bar-toggle'>
        <Settings />
      </button>
    </li>
  );
};

export default SettingsButton;
