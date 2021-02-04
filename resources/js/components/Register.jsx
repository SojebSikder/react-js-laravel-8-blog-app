import React, { Component } from 'react'
import AuthService from '../classes/AuthService';
import Config from '../classes/Config';
import AlertMsg from './AlertMsg';

export default class Register extends Component {
    constructor(){
        super();
        // Method binding
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        // Set State
        this.state = {
            // User information
            username:'',
            email:'',
            password:'',
            // Error handeling variable
            alert_message: '',
        }
    }


    // Get value from input and set state
    onChangeUsername(e)
    {
        this.setState({username:e.target.value});
    }
    onChangeEmail(e)
    {
        this.setState({email:e.target.value});
    }
    onChangePassword(e)
    {
        this.setState({password:e.target.value});
    }
    // create user account
    onSubmit(e)
    {
        e.preventDefault();
        const user ={
            name: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        
        AuthService.register(user, (res)=>{
            this.setState({alert_message:'success'});
        });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <br />

                    {this.state.alert_message=="success"?<AlertMsg type="success" msg="Account created successfully!" />:null}
                    {this.state.alert_message=="error"?<AlertMsg type="warning" msg="Something went wrong" />:null}

                    <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" onChange={this.onChangeUsername} className="form-control" id="username" placeholder="Username" autoComplete="off" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" onChange={this.onChangeEmail} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" autoComplete="off" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" onChange={this.onChangePassword} className="form-control" id="password" placeholder="Password" autoComplete="off" />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                    </form>
                </div>
            </div>
        )
    }
}
