import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router";

const Sidebar = (props) => {

    const location = useLocation();

    return location.pathname != '/admin/login' ? (
        <aside className="main-sidebar">
            <section className="sidebar">
                <div className="user-panel">
                    <div className="pull-left image">
                        <img src={process.env.MIX_APP_URL + 'assets/admin/dist/img/avatar04.png'} className="img-circle" alt="User Image" />
                    </div>
                    <div className="pull-left info">
                        <p>{localStorage.getItem("user.name")}</p>
                    </div>
                </div>
                <ul className="sidebar-menu" data-widget="tree">
                    <li className="header">MAIN NAVIGATION</li>
                    <li className={location.pathname == '/admin' ? 'active' : ''}>
                        <Link to='/admin'>
                            <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className={location.pathname == '/admin/posts' ? 'active' : ''}>
                        <Link to='/admin/posts'>
                            <i className="fa fa-th"></i> <span>Posts</span>
                        </Link>
                    </li>
                    <li className={location.pathname == '/admin/categories' ? 'active' : ''}>
                        <Link to='/admin/categories'>
                            <i className="fa fa-list"></i> <span>Categories</span>
                        </Link>
                    </li>
                    <li className={location.pathname == '/admin/tags' ? 'active' : ''}>
                        <Link to='/admin/tags'>
                            <i className="fa fa-tags"></i> <span>Tags</span>
                        </Link>
                    </li>
                    <li className={location.pathname == '/admin/comments' ? 'active' : ''}>
                        <Link to='/admin/comments'>
                            <i className="fa fa-comments-o"></i> <span>Comments</span>
                        </Link>
                    </li>
                    <li className={location.pathname == '/admin/users' ? 'active' : ''}>
                        <Link to='/admin/users'>
                            <i className="fa fa-users"></i> <span>Users</span>
                        </Link>
                    </li>
                </ul>
            </section>
        </aside>
    ) : null;
};

//export default withRouter(Sidebar);
export default Sidebar;