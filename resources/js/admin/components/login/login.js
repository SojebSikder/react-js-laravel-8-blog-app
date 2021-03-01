import React, { useEffect, useState } from 'react';
import { withRouter } from "react-router";
import Auth from '../../apis/Auth';
function Login(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error_message, setError_message] = useState(null);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        document.body.classList.remove("skin-green");
        document.body.classList.add("login-page");
    }, []);


    const handleEmail = (e) => {
        
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {

        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();


        setError_message(null);
        setErrors(null);

        if (email == "" || password == "") {

            setError_message("Please enter login credentials");
            return false;
        }
        Auth.login({ email: email, password: password }, (response) => {

            if (response.data.user.is_admin == 1) {
                for (var i in response.data.user) {
                    localStorage.setItem("user." + i, response.data.user[i]);
                    setTimeout(() => {
                        props.history.push("/");
                    }, 500);
                }
            } else {
                localStorage.clear();
                
                setError_message("Unauthorized");
            }
            
        }, (err) => {

            setError_message(err.response.data.message);
            setErrors(err.response.data.errors);
        });
    }
    return (
        <div className="container">
            <div className="login-box">
                <div className="login-logo">
                    <b>Blog</b>RL
                    </div>
                <div className="login-box-body">
                    <p className="login-box-msg">Sign in to start your session</p>
                    {
                        error_message ? (<div className="alert alert-danger">{error_message}</div>) : null
                    }
                    <form action="#" method="post" onSubmit={handleSubmit}>
                        <div className={`form-group has-feedback ${errors && errors.email ? 'has-error' : ''}`}>
                            <input type="email" name="email" className="form-control" placeholder="Email" onChange={handleEmail} value={email} />
                            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                            {
                                errors && errors.email ? (<div className="help-block">{errors.email[0]}</div>) : null
                            }
                        </div>
                        <div className={`form-group has-feedback ${errors && errors.password ? 'has-error' : ''}`}>
                            <input type="password" name="password" className="form-control" placeholder="Password" onChange={handlePassword} value={password} />
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                            {
                                errors && errors.password ? (<div className="help-block">{errors.password[0]}</div>) : null
                            }
                        </div>
                        <div className="row">
                            <div className="col-xs-4">
                                <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default withRouter(Login);