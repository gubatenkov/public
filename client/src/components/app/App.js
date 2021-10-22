import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
  Payment,
  PlaceOrder,
  Order,
  Profile,
  ProtectedRoute,
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
          <ProtectedRoute path='/shipping' component={Shipping} />
          <ProtectedRoute path='/payment' component={Payment} />
          <ProtectedRoute path='/placeorder' component={PlaceOrder} />
          <ProtectedRoute path='/order/:id' component={Order} />
          <ProtectedRoute path='/profile' component={Profile} />
          <Route path='/product/:id'>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <SingleProduct />
            </ErrorBoundary>
          </Route>
          <Route path='*' render={() => <Redirect to='/' />} />
        </Switch>
      </Container>
    </div>
  );
};

export default App;
