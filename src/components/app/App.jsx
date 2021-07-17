import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HomePage, ShopPage, SigninAndSignupPage } from '../../pages/';
import { Header } from '../';
import { auth, createUserProfileDocument } from '../../firebase';

class App extends React.Component {
  state = {
    currentUser: null,
    defaultImg: 'https://via.placeholder.com/100?text=U',
  };

  unSubscribeOnAuth = null;

  componentDidMount() {
    this.unSubscribeOnAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unSubscribeOnAuth();
  }

  render() {
    const { currentUser, defaultImg } = this.state;

    return (
      <div className='app'>
        <Router>
          <Header currentUser={currentUser} defaultImg={defaultImg} />

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
