import React from 'react';
import SignIn from '../Components/sign-in/sign-in';
import SignUp from '../Components/sign-up/sign-up';
import { SignInUpContainer } from './SignInUp.styles';
const SignInUp = () => (
    <SignInUpContainer>
        <SignIn />
        <SignUp />
    </SignInUpContainer>
)

export default SignInUp;