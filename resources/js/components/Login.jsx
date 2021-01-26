import React, { Component } from 'react'
import Config from '../classes/Config';
import AlertMsg from './AlertMsg';

export default class Login extends Component {
    constructor(){
        super();
        // Method binding
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        // Set State
        this.state = {
            // User information
            username:'',
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
    onChangePassword(e)
    {
        this.setState({password:e.target.value});
    }
    // create user account
    onSubmit(e)
    {
        e.preventDefault();
        const user ={
            username: this.state.username,
            password: this.state.password
        }
        axios.post(Config.getUrl()+"/user/login", user)
        .then(res=>{
            if(res.data.status == 0)
            {
                this.setState({alert_message:'error'});
            }else if(res.data.status == 1){
                this.setState({alert_message:'success'});
            }
            
        }).catch(error=>{
            this.setState({alert_message:'error'});
        });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <br />

                    {this.state.alert_message=="success"?<AlertMsg type="success" msg="Sign In successfully!" />:null}
                    {this.state.alert_message=="error"?<AlertMsg type="warning" msg="Something went wrong" />:null}

                    <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" onChange={this.onChangeUsername} className="form-control" id="username" placeholder="Username" autoComplete="off" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" onChange={this.onChangePassword} className="form-control" id="password" placeholder="Password" autoComplete="off" />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign In</button>
                    </form>
                </div>
            </div>
        )
    }
}
