import React, {Component} from 'react';
// import {Router} from '@reach/router'

import './App.css';
import {Navigation} from "./components/navigation/Navigation";
import {Home} from "./components/home/Home";
import {Contact} from "./components/contact/Contact";
import {Logout} from "./components/logout/Logout";
import {Login} from "./components/login/Login";
import {Product} from "./components/_user/product/Product";
import {DeliveryAddress} from "./components/_user/deliveryAddress/DeliveryAddress";
import {AllCarts} from "./components/_user/cart/AllCarts";
import {ActiveCart} from "./components/_user/cart/ActiveCart";
import {AddDeliveryAddress} from "./components/_user/deliveryAddress/AddDeliveryAddress";
import {AddProductToCart} from "./components/_user/product/AddProductToCart";
import {Route, BrowserRouter as Router} from "react-router-dom";
import {Switch} from "react-router";
import Context from './components/context/context'


class App extends Component {
    static contextType = Context

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
                {text: "PRODUKT DELLL !!!", path: '/products/one'}, //todo
                {text: 'MOJE ZAKUPY', path: '/carts/all', icon: 'fa fa-shopping-cart'},
                {text: 'MOJE ADRESY', path: '/deliveryAddress/all', icon: 'fa fa-truck'},
                {text: 'DODAJ ADRES', path: '/deliveryAddress/add', icon: 'fa fa-plus-square'},
                {text: "MÓJ KOKSZYK", path: '/carts/one', icon: 'fa fa-cart-arrow-down'},
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
                {text: 'KONTAKT', path: '/contact', icon: 'fa fa-envelope'},
                {text: 'WYLOGUJ', path: '/logout', icon: 'fa fa-sign-out'}
            ],
            super: [{text: 'START', path: '/', icon: 'fa fa-home'},
                {text: 'DODAJ FIRMĘ', path: '/admin/companies/add', icon: 'fa fa-plus-square'},
                {text: 'DODAJ UŻYTKOWNIKA', path: '/admin/users/add', icon: 'fa fa-address-card'},
                {text: 'WSZYSTKIE FIRMY', path: '/admin/companies/all', icon: 'fa fa-building'},
                {text: 'WSZYSCY UŻYTKOWNICY', path: '/admin/users/all', icon: 'fa fa-users'},
                {text: 'WSZYSTKIE PRODUKTY', path: '/admin/product/all', icon: 'fa fa-tasks'},
                {text: 'DODAJ ADMINISTRATORA', path: '/super/admins/add', icon: '/fa fa-plus-square'},
                {text: 'KONTAKT', path: '/contact', icon: 'fa fa-envelope'},
                {text: 'WYLOGUJ', path: '/logout', icon: 'fa fa-sign-out'}],
            root: []
            // todo root menu
        }
    }

    componentDidMount() {
        console.log(this.context)
    }

    render() {
        console.log(this.context)
        if (this.context.userLogged && this.context.userRole === 'ROLE_USER')
            return (
                <div className='nav-bar-items'>
                    <Router>
                        <Navigation
                            navLinks={this.state.user}
                            background='#fff'
                            hoverBackground='#ddd'
                            linkColor='#777'
                        />
                        <main style={{marginTop: "60px"}}>
                            <Switch>
                                <Route exact path='/' component={Home}/>
                                <Route path='/products/all' component={Product}/>
                                <Route path='/carts/all' component={AllCarts}/>
                                <Route path='/products/one' component={AddProductToCart}/>
                                <Route path='/deliveryAddress/all' component={DeliveryAddress}/>
                                <Route path='/deliveryAddress/add' component={AddDeliveryAddress}/>
                                <Route path='/carts/one' component={ActiveCart}/>
                                <Route path='/contact' component={Contact}/>
                                <Route path='/logout' component={Logout}/>
                            </Switch>
                        </main>
                    </Router>
                </div>
            )
        // else if (sessionStorage.getItem('role') === 'ROLE_ADMIN') {
        else if (this.context.userLogged && this.context.userRole === 'ROLE_ADMIN') {
            return (

                <div className='nav-bar-items'>
                    <Navigation
                        navLinks={this.state.admin}
                        background='#fff'
                        hoverBackground='#ddd'
                        linkColor='#777'
                    />
                  {/*  <Router>
                        <Home path='/'/>
                        <Contact path='/contact'/>
                        <Logout path='/logout'/>
                    </Router>*/}
                </div>
            )
        } else if (sessionStorage.getItem('role') === 'ROLE_SUPER') {
            // todo super menu
        } else {
            return (
                <div className='nav-bar-items'>
                    <Router>
                        <Navigation
                            navLinks={this.state.unauthorized}
                            background="#fff"
                            hoverBackground="#ddd"
                            linkColor="#777"
                        />
                        <main style={{marginTop: "60px"}}>
                            <Switch>
                                <Route exact path={'/'} component={Home}/>
                                <Route path={'/login'} component={Login}/>
                                <Route path={'/contact'} component={Contact}/>
                            </Switch>
                        </main>
                    </Router>
                </div>
            )
        }
    }
}

export {App};

// todo przekierowanie po logowaniu
// todo przekierowanie po wylogowaniu
// todo przekierowanie po dodaj adres
// todo naciśnięcie produktu z przekazaniem ID produktu
// todo naciśnięcie pozycji w koszyku z przekazaniem ID produktu


// todo ------------------------------------------------------------------------------------------

// todo usuń produkt z koszyka
// todo wyczyść koszyk

// todo do kontenerów i na produkcję
// todo data do kiedy ważne są produkty przetargowe, po tym blokujemy logowanie/czyścimy local storage
// todo localstorage: currentcart, allProducts,product to buy id, moje adresy

// todo wyświetlanie błedów jeżeli backend nie działa
// todo przykładowo: Uncaught (in promise) TypeError: NetworkError when attempting to fetch resource.

// todo wersja mobilna - na samym końcu