import React, { useEffect } from 'react';
import 'assets/scss/theme.scss';
import { Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { WrappedDashboard, Login } from 'components';
import { closeSidebar, openSidebar } from 'features/sidebarSlice';
import { configureFakeBackend } from 'utils/fakeBackend';
import RedirectOnAuthRoute from 'routes/RedirectOnAuthRoute';
import ProtectedRoute from 'routes/ProtectedRoute';

// fake backend
configureFakeBackend();

const App = () => {
  const dispatch = useDispatch();
  let isVisible = useSelector((state) => state.sidebar.isVisible);

  useEffect(() => {
    // define window resize listener on mount
    let listener = () => {
      if (window.innerWidth >= 1024 && !isVisible) {
        dispatch(openSidebar());
      } else if (window.innerWidth < 1024 && isVisible) {
        dispatch(closeSidebar());
      }
    };
    // add defined listener on window
    window.addEventListener('resize', listener);
    // remove listener on unmount
    return () => window.removeEventListener('resize', listener);
    //eslint-disable-next-line
  }, [isVisible]);

  return (
    <div className='app'>
      <Switch>
        <Redirect exact path='/' to='/dashboard' />
        <RedirectOnAuthRoute path='/login' component={Login} />
        <ProtectedRoute path='/dashboard' component={WrappedDashboard} />
        <Redirect path='*' to='/dashboard' />
      </Switch>
    </div>
  );
};

export default App;
