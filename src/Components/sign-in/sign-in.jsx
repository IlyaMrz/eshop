import React from 'react';
import FormInput from '../form-input/form-input';
import './sign-in.scss';
import CustomButton from '../custom-button/custom-button';

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event =>{
        event.preventDefault();
        this.setState({email:'',password:''})
    }

    handleChange = event => {
        const {value, name}= event.target;
        this.setState({[name]:value})
    }
    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
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
                    <CustomButton type='submit'>Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;