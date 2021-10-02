import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuthContext } from '../../context/auth/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuthContext();

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser === null ? <Redirect to='/' /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
