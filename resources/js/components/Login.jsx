import { Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import Userinfo from '../classes/Userinfo';
import AuthService from '../services/AuthService';
import AlertMsg from './AlertMsg';




export default function Login() {

    // User information
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // Error handling variable
    const [alert_message, setAlert_message] = useState('');



    // Get value from input and set state
    const onChangeUsername=(e)=>
    {
        setUsername(e.target.value);
    }
    const onChangePassword=(e)=>
    {
        setPassword(e.target.value);
    }
    // create user account
    const onSubmit=(e)=>
    {
        e.preventDefault();
        const user ={
            name: username,
            password: password
        }
        
        AuthService.login(user, (res)=>{
            if(res.data.status == 0){
                setAlert_message('error');
            }else if(res.data.status == 1){
                setAlert_message('success');
            }
        });
        
    }


    return (
        <div>
            <div className="container">
                <br />

                {alert_message=="success"?<AlertMsg type="success" msg="Sign In successfully!" />:null}
                {alert_message=="error"?<AlertMsg type="warning" msg="Something went wrong" />:null}

                <form onSubmit={onSubmit}>

                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" onChange={onChangeUsername} className="form-control" id="username" placeholder="Username" autoComplete="off" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" onChange={onChangePassword} className="form-control" id="password" placeholder="Password" autoComplete="off" />
                </div>
                <button type="submit" className="btn btn-primary">Sign In</button>
                </form>
            </div>
        </div>
    )
}


