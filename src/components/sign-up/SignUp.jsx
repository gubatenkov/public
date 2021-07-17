import React, { Component } from 'react';
import './SignUp.scss';

import { FormInputItem, CustomButton } from '../';
import { auth, createUserProfileDocument } from '../../firebase';
import { withRouter } from 'react-router';

class SignUp extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    // validate if passwords match
    if (password !== confirmPassword) {
      alert(`Passwords don't match!`);
      return;
    }
    // then try to create a new firebase user, setState and clear the form
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
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
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with email and password</span>

        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInputItem
            type='text'
            value={displayName}
            name='displayName'
            label='Display name'
            onChange={this.handleChange}
            required
          />

          <FormInputItem
            type='email'
            value={email}
            name='email'
            label='Email'
            onChange={this.handleChange}
            required
          />
          <FormInputItem
            type='password'
            value={password}
            name='password'
            label='Password'
            onChange={this.handleChange}
            required
          />
          <FormInputItem
            type='password'
            value={confirmPassword}
            name='confirmPassword'
            label='Confirm password'
            onChange={this.handleChange}
            required
          />

          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUp);
