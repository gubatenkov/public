import React from 'react';

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { About, Header, Dashboard, Login, Register } from '../';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import { Container } from '@material-ui/core';
import PrivateRoute from '../routes/PrivateRoute';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Header title='Контакты' icon={<PhoneEnabledIcon fontSize='large' />} />

        <Container>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/register' component={Register} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <Route path='/about' component={About} />
            <Route exact path='*'>
              <Redirect to='/' />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
};

export default App;
