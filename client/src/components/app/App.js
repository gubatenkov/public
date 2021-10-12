import React from 'react';

import {
  Cart,
  ErrorFallback,
  Header,
  Home,
  Login,
  RedirectOnAuthRoute,
  Register,
  SingleProduct,
} from '../';
import { Switch, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import { ErrorBoundary } from 'react-error-boundary';

const App = () => {
  return (
    <div className='app' style={{ height: '100vh' }}>
      <Header title='SneakStore' />

      <Container>
        <Switch>
          <Route exact path='/'>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Home />
            </ErrorBoundary>
          </Route>
          <RedirectOnAuthRoute path='/login' component={Login} />
          <RedirectOnAuthRoute path='/register' component={Register} />
          <Route path='/cart' component={Cart} />
          <Route path='/product/:id'>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <SingleProduct />
            </ErrorBoundary>
          </Route>
        </Switch>
      </Container>
    </div>
  );
};

export default App;
