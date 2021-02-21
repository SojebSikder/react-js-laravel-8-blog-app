import React from 'react'
import Header from './partials/Header';
import Sidebar from './partials/Sidebar';
import Footer from './partials/Footer';

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
