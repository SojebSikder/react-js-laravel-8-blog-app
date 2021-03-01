import React from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import Auth from '../../apis/Auth';

function Header(props) {

    const location = useLocation();


    const handleLogout = (e) => {
        e.preventDefault();

        Auth.logout((response) => {
            props.history.push("/login");
        }, (err) => {
            alert(err.response.data.message);
        });
    }

    useEffect(() => {

        const checkauth = setInterval(() => {
            Auth.checkAuth((response) => { }, (err) => {
                clearInterval(checkauth);

                localStorage.clear();

                props.history.push("/admin/login");
            });
        }, 2000);
    }, [])



    return location.pathname != '/admin/login' ? (

        <header className="main-header">
            <a href="#" className="logo">
                <span className="logo-mini"><b>B</b>RL</span>
                <span className="logo-lg"><b>Blog</b>RL</span>
            </a>
            <nav className="navbar navbar-static-top">
                <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span className="sr-only">Toggle navigation</span>
                </a>

                <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">

                        <li className="dropdown user user-menu">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <img src={process.env.MIX_APP_URL + 'assets/admin/dist/img/avatar04.png'}
                                    className="user-image" alt="User Image" />
                                <span className="hidden-xs">{localStorage.getItem("user.name")}</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="user-header">
                                    <img src={process.env.MIX_APP_URL + 'assets/admin/dist/img/avatar04.png'}
                                        className="img-circle" alt="User Image" />

                                    <p>
                                        {localStorage.getItem("user.name")}
                                        <small>Member since {localStorage.getItem("user.created_at")}</small>
                                    </p>
                                </li>
                                <li className="user-footer">
                                    <div className="pull-left">
                                        <Link to='/profile' className="btn btn-default btn-flat">Profile</Link>
                                    </div>
                                    <div className="pull-right">
                                        <a href="#" onClick={handleLogout}
                                            className="btn btn-default btn-flat">Sign out</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    ) : null
}

export default Header