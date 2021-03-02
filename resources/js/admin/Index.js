import React from 'react';
import Header from './components/partials/Header';
import Sidebar from './components/partials/Sidebar';
import Footer from './components/partials/Footer';
import Routes from './Routes';

export default function Index() {
    return (
        <div className="wrapper">
            <Header />
            <Routes />
            <Sidebar />
            <div className="content-wrapper">
                Admin page
            </div>
            <Footer />
        </div>
    )
}
