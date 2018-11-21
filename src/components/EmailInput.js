import React, { Component } from 'react';

const emailRegex = /\S+@\S+\.[a-zA-Z]{2}/;

class EmailInput extends Component{
    constructor(props){
        super(props);
        this.state = { 
            email: '',
            validEmail: null
        }
    }

    changeInput(e){
        this.setState({email: e.target.value},
            () => {
                if(this.state.email.match(emailRegex) )
                    this.setState(
                        {validEmail: true},
                        // () => this.props.emailValue(this.state.email) 
                    );
                else 
                    this.setState(
                        {validEmail: false},
                        // () => this.props.emailValue("") 
                    );
            }    
        );
    };

    render(){
        return(
            <div>
                <label htmlFor="Email"> Email </label>
                <input
                    type="email" 
                    id="Email" 
                    value={this.state.email}
                    placeholder="Email"
                    onChange={this.changeInput}
                    onBlur={this.validEmailHandler}
                    className={ "form-control " + ( this.state.validEmail != null ?
                                                  ( this.state.validEmail ? "is-valid" : "is-invalid") : "") }
                />
                {
                    this.state.validEmail ? "" :
                        <div className="invalid-feedback">
                            Please provide a valid email.
                        </div>
                }
            </div>
        )
    }
}

export default EmailInput;