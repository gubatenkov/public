import React from 'react';
import './SigninAndSignupPage.scss';

import { SignIn, SignUp } from '../../components';

const SigninAndSignupPage = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <div className='container'>
        <div className='sign-in-and-sign-up-inner'>
          <SignIn />
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default SigninAndSignupPage;
