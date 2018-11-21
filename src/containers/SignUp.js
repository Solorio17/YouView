import React, { Component } from 'react';
import EmailInput from '../components/EmailInput';

class SignUp extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            username: '',
            password: ''
        }
    }

    render(){
        return(
            <div>
                <form>
                    <EmailInput emailValue={email => {  this.setState({email})}} />
                    
                    <button> Submit </button>
                </form>
            </div>
        )
    }
}

export default SignUp;