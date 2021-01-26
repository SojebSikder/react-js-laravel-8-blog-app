import React, { Component } from 'react'
import { Link, Route, Switch } from "react-router-dom";

import Home from './Home';
import BlogDetails from './BlogDetails';
import Login from './Login';
import Register from './Register';
import About from './About';
import ContactUs from './ContactUs';

export default class Header extends Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">

                        <a className="navbar-brand" href="/">Blog</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Account
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to="/login" className="dropdown-item">Login</Link></li>
                                    <li><Link to="/register" className="dropdown-item">Register</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link to="/about" className="nav-link" >About us</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/contact-us" className="nav-link">Contact us</Link>
                            </li>

                        </ul>

                        </div>
                    </div>
                </nav>

                
                    <Switch>
                        <Route exect path='/' component={Home} />
                        <Route path='/login' component={Login} />
                        <Route path='/register' component={Register} />
                        <Route path='/about' component={About} />
                        <Route path='/contact-us' component={ContactUs} />
                        <Route path='/blog/:id' component={BlogDetails} />
                    </Switch>

            </div>
        )
    }
}
