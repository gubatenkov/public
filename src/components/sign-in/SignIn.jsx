import React, { Component } from 'react';
import './SignIn.scss';

import { FormInputItem, CustomButton } from '../';
import { signInWithGoogle } from '../../firebase';

export default class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      email: '',
      password: '',
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
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
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
