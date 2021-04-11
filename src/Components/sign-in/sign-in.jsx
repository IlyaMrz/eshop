import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input';
import { SignInContainer, SignInTitle, 
    ButtonsBarContainer } from './sign-in.styles';
import CustomButton from '../custom-button/custom-button';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'; 


// class SignIn extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         email: '',
    //         password: ''
    //     }
    // }

const SignIn  = ({emailSignInStart1, gooleSignInStart1}) => {
    const [ userInfo, setUserInfo ] = useState({email:'', password:''});

    const { email, password} = userInfo;
    const handleSubmit = async event =>{
        event.preventDefault();
        // const { emailSignInStart1 } = this.props;
        // const { email, password} = this.state;
        emailSignInStart1(email, password);
        // try {
        //     await auth.signInWithEmailAndPassword( email, password)
        //     this.setState({email:'',password:''})
        // } catch (error) {
        //     console.error(error);
        // }
    }

    const handleChange = event => {
        const {value, name}= event.target;
        // this.setState({[name]:value})
        setUserInfo({...userInfo, [name]:value})
    }
    // render() {
    //     const { gooleSignInStart1 } = this.props;
        return(
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput 
                    label="email" 
                    handleChange={handleChange} 
                    name='email' 
                    type='email' 
                    value={email} 
                    required
                    />
                    <FormInput 
                    label='password' 
                    handleChange={handleChange} 
                    name='password' 
                    type='password' 
                    value={password} 
                    required
                    />
                    <ButtonsBarContainer >
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton type="button" onClick={gooleSignInStart1} isGoogleSignIn >Sign In with Google</CustomButton>
                    </ButtonsBarContainer >
                </form>
            </SignInContainer>
        )
    // }
}

const mapDispatchToProps = dispatch => ({
    gooleSignInStart1: () => dispatch(googleSignInStart()),
    emailSignInStart1: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);