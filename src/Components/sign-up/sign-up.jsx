import React, { useState } from 'react';
// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input';
import { SignUpContainer, SignUpTitle } from './sign-up.styles';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions'

// class SignUp extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             displayName: '',
//             email: '',
//             password: '',
//             confirmPassword: ''
//         }
//     }
const SignUp = ({signUpStart1}) => {
    const [userData, setUserData] = useState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    });


    const { displayName, email, password, confirmPassword } = userData;
    const handleSubmit = async event => {
        event.preventDefault();
        // const { signUpStart1 } = this.props;
        // const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("passwords don't match")
            return;
        } else {
            signUpStart1({displayName, email, password, confirmPassword})
        }
        
        // try {
        //     const { user } = await auth.createUserWithEmailAndPassword(email, password);
        //     await createUserProfileDocument(user, { displayName });
        //     this.setState({
        //         displayName: '',
        //         email: '',
        //         password: '',
        //         confirmPassword: ''
        //     });
        // } catch (error) {
        //     console.error(error);
        // }
    }

    const handleChange = event => {
        const { name, value } = event.target;
        // this.setState({[name]: value});
        setUserData({...userData, [name]: value});
    }

    // render() {
    //     const {displayName, email, password, confirmPassword} = this.state;
        return (
            <SignUpContainer>
                <SignUpTitle>I do not have and account</SignUpTitle>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                    />
                    <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                    />
                    <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                    />
                    <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </SignUpContainer>
        )
    // }
}

const mapDispatchToProps = dispatch => ({
    signUpStart1: (userData) =>dispatch(signUpStart(userData))
})

export default connect(null, mapDispatchToProps)(SignUp);