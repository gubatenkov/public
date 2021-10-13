import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import { ErrorBoundary } from 'react-error-boundary';

import {
  Cart,
  ErrorFallback,
  Header,
  Home,
  Login,
  RedirectOnAuthRoute,
  Register,
  SingleProduct,
  Shipping,
} from '../';

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
          <RedirectOnAuthRoute path='/register' component={Register} />
          <RedirectOnAuthRoute path='/login' component={Login} />
          <Route path='/cart' component={Cart} />
          <Route path='/shipping' component={Shipping} />
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
