import React, { Component } from 'react'
import { Link, Route, Switch } from "react-router-dom";

import Home from './Home';
import BlogDetails from './BlogDetails';
import Login from './Login';
import Register from './Register';
import About from './About';
import ContactUs from './ContactUs';
import Error404 from './Error404';
import AuthService from '../services/AuthService';
import Userinfo from '../classes/Userinfo';
import Settings from './Settings';
import Profile from './Profile';
import Navbar from './Navbar';

export default function Header() {

    return (
        <div>
            <Navbar />
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <Link to="/" className="navbar-brand">Blog</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                { AuthService.isLogged() == true ? (Userinfo.getName()) : ("Account") }

                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            { AuthService.isLogged() == true ? (<li><Link to="/profile" className="dropdown-item">Profile</Link></li>) :(null) }
                            { AuthService.isLogged() == true ? (<li><Link to="/settings" className="dropdown-item">Settings</Link></li>) : (null) }

                            { AuthService.isLogged() == true ? (null) : (<li><Link to="/login" className="dropdown-item">Login</Link></li>) }
                            { AuthService.isLogged() == true ? (null) : (<li><Link to="/register" className="dropdown-item">Register</Link></li>) }
                            </ul>
                        </li> 


                        <li className="nav-item">
                            <Link to="/about" className="nav-link" >About us</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/contactus" className="nav-link">Contact us</Link>
                        </li>

                    </ul>

                    </div>
                </div>
            </nav>

            

            
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contactus' component={ContactUs} />
                    <Route exact path='/blog/:id' component={BlogDetails} />

                    <Route exact path='/profile' component={Profile} />
                    <Route exact path='/settings' component={Settings} />

                    <Route exact path="/*" component={Error404} />
                </Switch>

        </div>
    );
}
