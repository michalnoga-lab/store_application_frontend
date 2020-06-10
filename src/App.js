import React, {Component} from 'react';
import {Router} from '@reach/router'

import './App.css';

import *  as  MenuTypes from "./components/main/navigation/NavBar";

import {Contact} from './components/main/contact/Contact.jsx'
import {Home} from './components/main/home/Home.jsx'
import {Login} from "./components/main/login/Login";
import {NavBarItems} from "./components/main/navigation/NavBar";


class App extends Component {

    constructor(props) {
        super(props);

        // this.state = {
        //     navLinks: MenuTypes.unauthorized,
        //     ble: 'ble'
        // }


        // this.state = { todo remove
        //     isLoginActive: false,
        //     navLinks: [
        //         {
        //             text: 'START',
        //             path: '/',
        //             icon: 'fa fa-home'
        //         },
        //         {
        //             text: 'LOGOWANIE',
        //             path: '/login',
        //             icon: 'fa fa-sign-in'
        //         },
        //         {
        //             text: 'KONTAKT',
        //             path: '/contact',
        //             icon: 'fa fa-envelope'
        //         }
        //     ],
        // }
    }

    // displayMenu = () => {
    //     console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
    //     sessionStorage.setItem('role', 'ROLE_ROOT');
    //     console.log(sessionStorage.getItem('role'))
    //
    //     // if (sessionStorage.getItem('role') !== null || sessionStorage.getItem('role') !== undefined) {
    //     //     if (sessionStorage.getItem('role') === "ROLE_ROOT") {
    //     //         this.setState({navLinks: MenuTypes.root})
    //     //     }
    //     // }
    // }

    render() {

        return (
            <div className="App">
                <NavBarItems/>
            </div>
        );
    }
}

export default App;