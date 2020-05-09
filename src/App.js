import React from 'react';
import {Router} from '@reach/router'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Blog from './pages/Blog.jsx'
import Home from './pages/Home.jsx'
import ResponsiveNavigation from './components/ResponsiveNavigation'
import logo from './logo.svg';
import './App.css';
import Login from "./pages/Login";

function App() {
    const navLinks = [
        {
            text: 'START',
            path: '/',
            icon: 'fa fa-home'
        },
        {
            text: 'LOGOWANIE',
            path: '/login',
            icon: 'fa fa-sign-in'
        },
        {
            text: 'KONTAKT',
            path: '/contact',
            icon: 'fa fa-envelope'
        }
    ];


    return (
        <div className="App">
            <ResponsiveNavigation
                navLinks={navLinks}
                logo={logo}
                background="#fff"
                hoverBackground="#ddd"
                linkColor="#777"
            />
            <Router>
                <Home path="/"/>
                <Login path='/login'/>
                <Contact path="/contact"/>


            </Router>
        </div>
    );
}

export default App;
