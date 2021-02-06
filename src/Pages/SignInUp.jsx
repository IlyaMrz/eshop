import React from 'react';
import SignIn from '../Components/sign-in/sign-in';
import SignUp from '../Components/sign-up/sign-up';
import './SignInUp.scss';

const SignInUp = () => (
    <div className='signinup'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInUp