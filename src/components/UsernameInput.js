import React, {Component} from 'react';

class UsernameInput extends Component{
    constructor(props){
        super(props);

        this.state = {
            username: "",
            validUsername: null
        }
    }

    changeInput(e){
        this.setState({username: e.target.value},
            () => {
                if(this.state.username.length >= 3)
                    this.setState({validUsername: true});
                else
                    this.setState({validUsername: false});
            }
        );
    }

    render(){
        return(
            <div>
                <label htmlFor="Username"> Username </label>
                <input
                    id="Username"
                    type="text"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={(e) => this.changeInput(e)}
                    className={ "form-control " + ( this.state.validUsername != null ?
                                                  ( this.state.validUsername ? "is-valid" : "is-invalid") : "") }
                />
                {
                    this.state.validUsername ? "" : 
                        <div className="invalid-feedback">
                            Please provide a username.
                        </div>
                }
            </div>
        )
    }
}

export default UsernameInput;