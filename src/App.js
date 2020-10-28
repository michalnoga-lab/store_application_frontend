import React, {useState, useEffect, useRef} from "react";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import {Home} from "./components/home/Home";
import {Logout} from "./components/logout/Logout";
import {Product} from "./components/_user/product/Product";
import {AddProduct} from "./components/_user/product/AddProduct";
import {DeliveryAddress} from "./components/_user/deliveryAddress/DeliveryAddress";
import {AddDeliveryAddress} from "./components/_user/deliveryAddress/AddDeliveryAddress";
import {AllCarts} from "./components/_user/cart/AllCarts";
import {ActiveCart} from "./components/_user/cart/ActiveCart";
import {ClosedCart} from "./components/_user/cart/ClosedCart";
import {Contact} from "./components/contact/Contact";
import {Rodo} from "./components/information/Rodo";
import {Cookies} from "./components/information/Cookies";
import {Login} from "./components/login/Login";
import {LoggedIn} from "./components/login/LoggedIn";
import {RouteUser} from "./routes/RouteUser";


const App = () => {

    return (
        <Router>
            <div className='nav-bar-items'>
                <nav className='nav navbar-light bg-light'>
                    <form className='form-inline'>
                        <Link to='/' className="btn btn-outline-secondary btn-lg m-3" type="button">START</Link>

                        <Link to='/user/products/all' className='btn btn-outline-secondary btn-lg m-3'>MOJE
                            PRODUKTY</Link>
                        <Link to='/user/carts/all' className='btn btn-outline-secondary btn-lg m-3' type='button'>MOJE
                            ZAKUPY</Link>
                        <Link to='/user/deliveryAddress/all' className='btn btn-outline-secondary btn-lg m-3'
                              type='button'>MOJE ADRESY + DODAJ</Link>
                        <Link to='/user/carts/one' className='btn btn-outline-secondary btn-lg m-3'>MÓJ KOSZYK</Link>
                        <Link to='contact' className='btn btn-outline-secondary btn-lg m-3'>KONTAKT</Link>

                        <Link to='/login' className='btn btn-outline-success btn-lg m-3' type='button'>LOGOWANIE</Link>
                        <Link to='/logout' className='btn btn-outline-danger btn-lg m-3' type='button'>ZAKOŃCZ</Link>
                    </form>
                </nav>
            </div>
            <Switch>
                <Route exact path='/' component={Home}/>

                <Route path='/login' component={Login}/>
                <Route path='/loggedIn' component={LoggedIn}/>
                <Route path='/logout' component={Logout}/>

                <RouteUser path='/user/products/all' component={Product}/>
                <RouteUser path='/user/products/one' component={AddProduct}/>
                <RouteUser path='/user/deliveryAddress/all' component={DeliveryAddress}/>
                <RouteUser path='/user/deliveryAddress/add' component={AddDeliveryAddress}/>
                <RouteUser path='/user/carts/all' component={AllCarts}/>
                <RouteUser path='/user/carts/one' component={ActiveCart}/>
                <RouteUser path='/user/carts/oneClosed' component={ClosedCart}/>

                <Route path='/contact' component={Contact}/>
                <Route path='/rodo' component={Rodo}/>
                <Route path='/cookies' component={Cookies}/>
            </Switch>
        </Router>
    )
}

export {App}