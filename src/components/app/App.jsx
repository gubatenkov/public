import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/actions/';
import { HomePage, ShopPage, SigninAndSignupPage } from '../../pages/';
import { Header } from '../';
import { auth, createUserProfileDocument } from '../../firebase';

class App extends React.Component {
  unSubscribeOnAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unSubscribeOnAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unSubscribeOnAuth();
  }

  render() {
    return (
      <div className='app'>
        <Router>
          <Header />

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

const dispatchToProp = {
  setCurrentUser,
};

export default connect(null, dispatchToProp)(App);
