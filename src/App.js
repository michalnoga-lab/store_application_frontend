import React, {Component} from 'react';
import {Router} from '@reach/router'

import './App.css';
import {Navigation} from "./components/navigation/Navigation";
import {Home} from "./components/home/Home";
import {Contact} from "./components/contact/Contact";
import {Logout} from "./components/logout/Logout";
import {Login} from "./components/login/Login";
import {Product} from "./components/_user/product/Product";
import {DeliveryAddress} from "./components/_user/deliveryAddress/DeliveryAddress";
import {Cart} from "./components/_user/cart/Cart";


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            unauthorized: [
                {text: 'START', path: '/', icon: 'fa fa-home'},
                {text: 'LOGOWANIE', path: '/login', icon: 'fa fa-sign-in'},
                {text: 'KONTAKT', path: '/contact', icon: 'fa fa-envelope'}
            ],
            user: [
                {text: 'START', path: "/", icon: 'fa fa-home'},
                {text: 'MOJE PRODUKTY', path: '/products/all', icon: 'fa fa-tasks'},
                {text: 'MOJE KOSZYKI', path: '/carts/all', icon: 'fa fa-cart-arrow-down'},
                {text: 'MOJE ADRESY', path: '/deliveryAddress/all', icon: 'fa fa-truck'},
                {text: 'DODAJ ADRES', path: '/deliveryAddress/add', icon: 'fa fa-plus-square'},
                {text: 'WYSZUKA PRODUKT', path: '/search/product', icon: 'fa fa-search-plus'},
                {text: "MÓJ KOKSZYK", path: '/carts/one', icon: 'fa fa-shopping-cart'},
                {text: 'KONTAKT', path: '/contact', icon: 'fa fa-envelope'},
                {text: 'WYLOGUJ', path: '/logout', icon: 'fa fa-sign-out'}
            ],
            admin: [
                {text: 'START', path: '/', icon: 'fa fa-home'},
                {text: 'DODAJ FIRMĘ', path: '/admin/companies/add', icon: 'fa fa-plus-square'},
                {text: 'DODAJ UŻYTKOWNIKA', path: '/admin/users/add', icon: 'fa fa-address-card'},
                {text: 'WSZYSTKIE FIRMY', path: '/admin/companies/all', icon: 'fa fa-building'},
                {text: 'WSZYSCY UŻYTKOWNICY', path: '/admin/users/all', icon: 'fa fa-users'},
                {text: 'WSZYSTKIE PRODUKTY', path: '/admin/product/all', icon: 'fa fa-tasks'},
                {text: 'WCZYTAJ PRODUKTY', path: '/admin/product/add', icon: 'fa fa-plus-square'},
                {text: 'KONTAKT', path: '/contact', icon: 'fa fa-envelope'},
                {text: 'WYLOGUJ', path: '/logout', icon: 'fa fa-sign-out'}
            ],
            super: [{text: 'START', path: '/', icon: 'fa fa-home'},
                {text: 'DODAJ FIRMĘ', path: '/admin/companies/add', icon: 'fa fa-plus-square'},
                {text: 'DODAJ UŻYTKOWNIKA', path: '/admin/users/add', icon: 'fa fa-address-card'},
                {text: 'WSZYSTKIE FIRMY', path: '/admin/companies/all', icon: 'fa fa-building'},
                {text: 'WSZYSCY UŻYTKOWNICY', path: '/admin/users/all', icon: 'fa fa-users'},
                {text: 'WSZYSTKIE PRODUKTY', path: '/admin/product/all', icon: 'fa fa-tasks'},
                {text: 'WCZYTAJ PRODUKTY', path: '/admin/product/add', icon: 'fa fa-plus-square'},
                {text: 'DODAJ ADMINISTRATORA', path: '/super/admins/add', icon: '/fa fa-plus-square'},
                {text: 'KONTAKT', path: '/contact', icon: 'fa fa-envelope'},
                {text: 'WYLOGUJ', path: '/logout', icon: 'fa fa-sign-out'}],
            root: []
            // todo root menu
        }
    }

    render() {
        if (sessionStorage.getItem('role') === 'ROLE_USER')
            return (
                <div className='nav-bar-items'>
                    <Navigation
                        navLinks={this.state.user}
                        background='#fff'
                        hoverBackground='#ddd'
                        linkColor='#777'
                    />
                    <Router>
                        <Home path='/'/>
                        <Product path='/products/all'/>
                        <Cart path='/carts/all'/>
                        <DeliveryAddress path='/deliveryAddress/all'/>
                        <Contact path='/contact'/>
                        <Logout path='/logout'/>


                        <Login path='/login'/>
                    </Router>
                </div>
            )
        else if (sessionStorage.getItem('role') === 'ROLE_ADMIN') {
            return (

                <div className='nav-bar-items'>
                    <Navigation
                        navLinks={this.state.admin}
                        background='#fff'
                        hoverBackground='#ddd'
                        linkColor='#777'
                    />
                    <Router>
                        <Home path='/'/>


                        <Contact path='/contact'/>
                        <Logout path='/logout'/>
                    </Router>
                </div>
            )
        } else if (sessionStorage.getItem('role') === 'ROLE_SUPER') {
            // todo super menu
        } else {
            return (
                <div className='nav-bar-items'>
                    <Navigation
                        navLinks={this.state.unauthorized}
                        background="#fff"
                        hoverBackground="#ddd"
                        linkColor="#777"
                    />
                    <Router>
                        <Home path='/'/>
                        <Login path='/login'/>
                        <Contact path='/contact'/>
                    </Router>
                </div>
            )
        }
    }
}

export {App};