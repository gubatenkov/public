import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RedirectOnAuthRoute = ({ component: Component, ...rest }) => {
  let isAuthorized = useSelector((state) => state.auth.isAuthorized);

  return (
    <Route {...rest}>
      {isAuthorized ? <Redirect to='/' /> : <Component />}
    </Route>
  );
};

export default RedirectOnAuthRoute;
