import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/actions/';
import {
  HomePage,
  ShopPage,
  SigninAndSignupPage,
  Checkout,
  Contact,
} from '../../pages/';
import { Header } from '../';
import { auth, createUserProfileDocument } from '../../firebase';
import { selectCurrentUser } from '../../redux/selectors/userSelector';
import { createStructuredSelector } from 'reselect';

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
    const { currentUser } = this.props;

    return (
      <div className='app'>
        <Router>
          <Header />

          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/contact' component={Contact} />
            <Route path='/checkout' component={Checkout} />
            <Route
              exact
              path='/signin'
              render={() =>
                currentUser ? <Redirect to='/' /> : <SigninAndSignupPage />
              }
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

const stateToProp = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const dispatchToProp = {
  setCurrentUser,
};

export default connect(stateToProp, dispatchToProp)(App);
