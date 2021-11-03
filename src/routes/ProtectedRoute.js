import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <Route {...rest}>
      {isAuthenticated ? <Component /> : <Redirect to='/login' />}
    </Route>
  );
};

export default ProtectedRoute;
