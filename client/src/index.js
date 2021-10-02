import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { App } from './components/';
import { ContactProvider } from './context/contact/contactContext';
import { AuthProvider } from './context/auth/authContext';
import { AlertProvider } from './context/alert/alertContext';

ReactDOM.render(
  <AuthProvider>
    <ContactProvider>
      <AlertProvider>
        <App />
      </AlertProvider>
    </ContactProvider>
  </AuthProvider>,
  document.getElementById('root')
);
