import React, { Component } from 'react';
import './SignIn.scss';

import { FormInputItem, CustomButton } from '../';
import { auth, signInWithGoogle } from '../../firebase';
import { withRouter } from 'react-router-dom';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    // then try to authenticate existing user, setState and clear the form
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: '',
      });
      // then redirect user on homepage after sending login data
      this.props.history.push('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInputItem
            value={email}
            handleChange={this.handleChange}
            type='email'
            name='email'
            label={'Email'}
            required
          />
          <FormInputItem
            value={password}
            handleChange={this.handleChange}
            type='password'
            name='password'
            label={'Password'}
            required
          />
          <div className='button-group'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton
              type='submit'
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Google Sign In
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignIn);
