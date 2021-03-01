import React, { Component } from 'react'
import { Link, Route, Switch } from "react-router-dom";

import Home from '../pages/Home';
import BlogDetails from '../pages/BlogDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import About from '../pages/About';
import ContactUs from '../pages/ContactUs';
import Error404 from '../pages/Error404';
import AuthService from '../../services/AuthService';
import Userinfo from '../../classes/Userinfo';
import Settings from '../pages/Settings';
import Profile from '../pages/Profile';
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