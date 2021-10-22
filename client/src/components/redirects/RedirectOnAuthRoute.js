import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const RedirectOnAuthRoute = ({ component: Component, ...rest }) => {
  let isAuthorized = useSelector((state) => state.auth.isAuthorized);
  let query = useQuery();
  let path = '/';
  if (query.get('redirect')) {
    path = `/${query.get('redirect')}`;
  }

  return (
    <Route {...rest}>
      {isAuthorized ? <Redirect to={path} /> : <Component />}
    </Route>
  );
};

export default RedirectOnAuthRoute;
