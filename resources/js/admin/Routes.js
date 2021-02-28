import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom';
import Login from "./components/login/Login";
import AuthenticatedRoute from './AuthenticatedRoute';
import Dashboard from "./components/pages/Dashboard";
import ListPosts from "./components/pages/posts/Index";
import AddPosts from "./components/pages/posts/Add";
import EditPosts from "./components/pages/posts/Edit";
import ListCategories from "./components/pages/categories/Index";
import AddCategories from "./components/pages/categories/Add";
import EditCategories from "./components/pages/categories/Edit";
import ListTags from "./components/pages/tags/Index";
import AddTags from "./components/pages/tags/Add";
import EditTags from "./components/pages/tags/Edit";
import ListComments from "./components/pages/comments/Index";
import ListUsers from "./components/pages/users/Index";
import AddUsers from "./components/pages/users/Add";
import EditUsers from "./components/pages/users/Edit";
import Profile from "./components/pages/profile/Profile";

function Routes() {

    return (
        <Switch>
            <Route exact path='/admin/login' component={Login} />
            <AuthenticatedRoute exact path='/admin/' component={Dashboard} />
            <AuthenticatedRoute exact path='/admin/posts' component={ListPosts} />
            <AuthenticatedRoute path='/admin/posts/add' component={AddPosts} />
            <AuthenticatedRoute path='/admin/posts/edit/:id' component={EditPosts} />
            <AuthenticatedRoute exact path='/admin/tags' component={ListTags} />
            <AuthenticatedRoute path='/admin/tags/add' component={AddTags} />
            <AuthenticatedRoute path='/admin/tags/edit/:id' component={EditTags} />
            <AuthenticatedRoute exact path='/admin/categories' component={ListCategories} />
            <AuthenticatedRoute path='/admin/categories/add' component={AddCategories} />
            <AuthenticatedRoute path='/admin/categories/edit/:id' component={EditCategories} />
            <AuthenticatedRoute exact path='/admin/comments' component={ListComments} />
            <AuthenticatedRoute exact path='/admin/users' component={ListUsers} />
            <AuthenticatedRoute path='/admin/users/add' component={AddUsers} />
            <AuthenticatedRoute path='/admin/users/edit/:id' component={EditUsers} />
            <AuthenticatedRoute path='/admin/profile' component={Profile} />
        </Switch>
    )

}

export default Routes;