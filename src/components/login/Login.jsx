import React, {Component, useState, useRef, useEffect} from 'react'
import {useHistory} from "react-router-dom";
import Form from "react-bootstrap/Form";
import Context from "../context/context";

import * as URLs from "../URLs"
import Button from "react-bootstrap/Button";

const Login = () => {

    let [isAuthenticated, setIsAuthenticated] = useState(false)
    let [login, setLogin] = useState('')
    let [password, setPassword] = useState('')
    let history = useHistory()
    let context = Context

    const updateLogin = event => {
        setLogin(event.target.value)
    }

    const updatePassword = event => {
        setPassword(event.target.value)
    };

    const handleLogin = async (login, password) => {
        const url = URLs.backend + 'login';
        const headers = new Headers();
        headers.set('Content-Type', 'application/json;charset=UTF-8');

        const response = await fetch(url,
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({login: login, password: password})
            });
        const body = await response.json();
        sessionStorage.setItem('token', body.token)
        sessionStorage.setItem('role', body.role.split('_')[1])
        sessionStorage.setItem('userMenuHidden', 'false')
        context

        if (!localStorage.getItem('cart')) {
            localStorage.setItem('cart', JSON.stringify([]));
        }
        setIsAuthenticated(true)
        history.push('/loggedIn')
    }

    return (
        <div className="input-page">

            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="EMAIL" onChange={updateLogin}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="HASŁO" onChange={updatePassword}/>
                    </Form.Group>
                    <Button onClick={handleLogin(login, password)} variant="outline-secondary btn-block"
                            type="button"> ZALOGUJ </Button>
                </Form>
            </div>
        </div>
    )
}

export {Login}