import React, {Component} from "react";
import {Router} from "@reach/router";

import logo from "../../../logo.svg";

import {Navigation} from "./Navigation";
import {Home} from "../home/Home";
import {Login} from "../login/Login";
import {Contact} from "../contact/Contact";

class NavBarItems extends Component {

    constructor(props) {
        super(props);

        this.state = {
            //role: sessionStorage.getItem('role'),
            role:'user',
            unauthorized: [
                {text: 'START', path: '/', icon: 'fa fa-home'},
                {text: 'LOGOWANIE', path: '/login', icon: 'fa fa-sign-in'},
                {text: 'KONTAKT', path: '/contact', icon: 'fa fa-envelope'}
            ],
            user: [
                {text: 'START', path: "/", icon: 'fa fa-home'},
            ],
            admin: [],
            super: [],
            root: []
        }
    }

    render() {

        if (this.state.role === null || this.state.role === undefined) {
            return (
                <div className='NavBarItems'>
                    <Navigation
                        navLinks={this.state.unauthorized}
                        logo={logo}
                        background="#fff"
                        hoverBackground="#ddd"
                        linkColor="#777"
                    />
                    <Router>
                        <Home path='/'/>
                        <Login path='/login'/>
                        <Contact path='/contact'/>
                    </Router>
                </div>)
        } else if (this.state.role === 'user') {
            return (
                <div className='NavBarItems'>
                    <Navigation
                        navLinks={this.state.user}
                        logo={logo}
                        background='#fff'
                        hoverBackground='#ddd'
                        linkColor='#777'
                    />
                    <Router>
                        <Home path='/'/>
                        <Contact path='/contact'/>
                    </Router>
                </div>
            )
        }
    }
}

export {NavBarItems}