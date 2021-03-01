import React from 'react'
import { Route, Switch } from 'react-router'

// Pages
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import About from './components/pages/About'
import ContactUs from './components/pages/ContactUs'
import BlogDetails from './components/pages/BlogDetails'
import Profile from './components/pages/Profile'
import Settings from './components/pages/Settings'
import Error404 from './components/pages/Error404'



export default function Routes() {
    return (
        <div>
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
    )
}
