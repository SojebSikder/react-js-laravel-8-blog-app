import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Header from './components/partials/Header';
import Sidebar from './components/partials/Sidebar';
import Footer from './components/partials/Footer';
import Routes from './Routes';

export default function Index() {
    return (
        <div className="wrapper">
            <Header />
            <Sidebar />
            <div className="content-wrapper">
                Admin page
            </div>
            <Footer />
        </div>
    )
}
