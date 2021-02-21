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


            <Switch>
                <Route exact path='/' component={Home} />

                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={ContactUs} />
                <Route exact path='/blog/:id' component={BlogDetails} />

                <Route exact path='/profile' component={Profile} />
                <Route exact path='/settings' component={Settings} />

                <Route exact path="/*" component={Error404} />
            </Switch>

        </div>
    );
}
