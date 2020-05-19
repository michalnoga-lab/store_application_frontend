import React from 'react';
import {Router} from '@reach/router'
import Contact from './components/main/contact/Contact.jsx'
import Home from './components/main/home/Home.jsx'
import Navigation from './components/main/navigation/Navigation'
import logo from './logo.svg';
import './App.css';
import Login from "./components/main/login/Login";

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
            <Navigation
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
