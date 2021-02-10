import React, { useState, useEffect } from 'react'
import AuthService from '../services/AuthService';
import AlertMsg from './AlertMsg';



export default function Register() {
    
    // User information
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // Error handeling variable
    const [alert_message, setAlert_message] = useState('');



    // Get value from input and set state
    const onChangeUsername=(e)=>
    {
        setUsername(e.target.value);
    }
    const onChangeEmail=(e)=>
    {
        setEmail(e.target.value);
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
            email: email,
            password: password
        }
        
        AuthService.register(user, (res)=>{
            setAlert_message('success');
        });
    }


    return (
        <div>
            <div className="container">
                <br />

                {alert_message=="success"?<AlertMsg type="success" msg="Account created successfully!" />:null}
                {alert_message=="error"?<AlertMsg type="warning" msg="Something went wrong" />:null}

                <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" onChange={onChangeUsername} className="form-control" id="username" placeholder="Username" autoComplete="off" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" onChange={onChangeEmail} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" autoComplete="off" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" onChange={onChangePassword} className="form-control" id="password" placeholder="Password" autoComplete="off" />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
                </form>
            </div>
        </div>
    )
}


