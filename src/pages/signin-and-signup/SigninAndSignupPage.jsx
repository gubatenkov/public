import React from 'react';
import './SigninAndSignupPage.scss';

import { SignIn } from '../../components';

const SigninAndSignupPage = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <div className='container'>
        <SignIn />
      </div>
    </div>
  );
};

export default SigninAndSignupPage;
