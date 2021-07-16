import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HomePage, ShopPage, SigninAndSignupPage } from '../../pages/';
import { Header } from '../';
import { auth } from '../../firebase';

class App extends React.Component {
  state = {
    currentUser: null,
  };

  unSubscribeOnAuth = null;

  componentDidMount() {
    this.unSubscribeOnAuth = auth.onAuthStateChanged((user) => {
      console.log(user);
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unSubscribeOnAuth();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className='app'>
        <Router>
          <Header currentUser={currentUser} />

          <Switch>
            <Route path='/' exact>
              <HomePage />
            </Route>
            <Route path='/shop'>
              <ShopPage />
            </Route>
            <Route path='/signin'>
              <SigninAndSignupPage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
