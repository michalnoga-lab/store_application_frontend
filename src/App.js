import React, {Component} from 'react';
import {Router} from '@reach/router'

import './App.css';
import logo from './logo.svg'; //todo necessary ???

import {Contact} from './components/main/contact/Contact.jsx'
import {Home} from './components/main/home/Home.jsx'
import {Login} from "./components/main/login/Login";

import {Navigation} from './components/main/navigation/Navigation'


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoginActive: false,
            navLinks: [
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
            ],
        }
    }

    render() {
        const {isLoginActive} = this.state;
        const {navLinks} = this.state;

        return (
            <div className="App">
                <div className="login">

                    <Navigation
                        navLinks={navLinks}
                        logo={logo}
                        background="#fff"
                        hoverBackground="#ddd"
                        linkColor="#777"
                    />


                    <Router>
                        <Home path="/"/>
                        {isLoginActive && <Login path='/login' containerRef={(ref) => this.current = ref}/>}
                        {!isLoginActive && <Contact path='/contact'/>}
                        {/*<Login path='/login'/>*/}
                        <Contact path="/contact"/>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;