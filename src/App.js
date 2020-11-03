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
import {RouteAdmin} from "./routes/RouteAdmin";
import {AdminPanel} from "./components/_admin/Panel";
import {AdminProduct} from "./components/_admin/products/AdminProduct";
import {AdminProductAdd} from "./components/_admin/products/AdminAddProduct";


const App = () => {

    return (
        <Router>
            <div className='nav-bar-items'>
                <nav className='nav navbar-light bg-light'>
                    <div className='form-inline col-12'>
                        <div className='col-1'>
                            <Link to='/' className="btn btn-outline-info btn-lg" type="button">START</Link>
                        </div>
                        <div className='col-10'>
                            <Link to='/user/products/all'
                                  className='btn btn-outline-secondary btn-lg m-1'> PRODUKTY</Link>
                            <Link to='/user/carts/all' className='btn btn-outline-secondary btn-lg m-2'
                                  type='button'>ZAKUPY</Link>
                            <Link to='/user/deliveryAddress/all' className='btn btn-outline-secondary btn-lg m-2'
                                  type='button'>ADRESY</Link>
                            <Link to='/user/deliveryAddress/add' className='btn btn-outline-secondary btn-lg m-2'>DODAJ
                                ADRES</Link>
                            <Link to='/user/carts/one' className='btn btn-outline-secondary btn-lg m-2'>KOSZYK</Link>

                            <Link to='/login' className='btn btn-outline-success btn-lg m-2'
                                  type='button'>LOGOWANIE</Link>
                            <Link to='/logout' className='btn btn-outline-danger btn-lg m-2'
                                  type='button'>ZAKOŃCZ</Link>
                        </div>

                        <div className='col-1'>
                            <Link to='/admin/panel' className='btn btn-outline-info btn-lg'
                                  type='button'>ADMINISTRACJA</Link>
                        </div>
                    </div>
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

                <RouteAdmin path='/admin/panel' component={AdminPanel}/>
                <RouteAdmin path='/admin/products/all' component={AdminProduct}/>
                <RouteAdmin path='/admin/products/add' component={AdminProductAdd}/>

                <Route path='/contact' component={Contact}/>
                <Route path='/rodo' component={Rodo}/>
                <Route path='/cookies' component={Cookies}/>
            </Switch>
        </Router>
    )
}

export {App}