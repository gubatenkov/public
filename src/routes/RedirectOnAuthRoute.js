import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const RedirectOnAuthRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <Route {...rest}>
      {isAuthenticated ? <Redirect to='/dashboard' /> : <Component />}
    </Route>
  );
};

export default RedirectOnAuthRoute;
