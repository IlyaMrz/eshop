import React from 'react';
import FormInput from '../form-input/form-input';
import { SignInContainer, SignInTitle, 
    ButtonsBarContainer } from './sign-in.styles';
import CustomButton from '../custom-button/custom-button';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const { email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword( email, password)
            this.setState({email:'',password:''})
        } catch (error) {
            console.error(error);
        }
    }

    handleChange = event => {
        const {value, name}= event.target;
        this.setState({[name]:value})
    }
    render() {
        return(
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    label="email" 
                    handleChange={this.handleChange} 
                    name='email' 
                    type='email' 
                    value={this.state.email} 
                    required
                    />
                    <FormInput 
                    label='password' 
                    handleChange={this.handleChange} 
                    name='password' 
                    type='password' 
                    value={this.state.password} 
                    required
                    />
                    <ButtonsBarContainer >
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In with Google</CustomButton>
                    </ButtonsBarContainer >
                </form>
            </SignInContainer>
        )
    }
}

export default SignIn;