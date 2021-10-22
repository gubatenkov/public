import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...restProps }) => {
  const isAuthorized = useSelector((state) => state.auth.isAuthorized);
  const cartItems = useSelector((state) => state.cart.cartItems);
  let redirectPath =
    cartItems.length === 0 && restProps.path !== '/profile'
      ? ''
      : restProps.path.slice(1);

  return (
    <Route
      {...restProps}
      render={(props) =>
        isAuthorized ? (
          <Component {...props} />
        ) : (
          <Redirect to={`/login?redirect=${redirectPath}`} />
        )
      }
    />
  );
};

export default ProtectedRoute;
