import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import store from './store/store';
import { Provider } from 'react-redux';
import { App } from './components/';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
