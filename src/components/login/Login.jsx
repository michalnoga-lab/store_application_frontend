import React, {Component} from 'react'
import Form from "react-bootstrap/Form";

import * as URLs from "../URLs"
import Button from "react-bootstrap/Button";
import Context from '../context/context'

class Login extends Component {
    static contextType = Context

    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        }
    }

    updateLogin = e => {
        this.setState({
            login: e.target.value
        });
    };

    updatePassword = (e) => {
        this.setState({
            password: e.target.value
        });
    };

    async loginClick(login, password) {

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
        sessionStorage.setItem('role', body.role)

        if (!localStorage.getItem('cart')) {
            localStorage.setItem('cart', JSON.stringify([]));
        }
        this.context.setUserLogged()
        this.context.setUserRole(body.role)

        this.props.history.push("/") // todo poprawić - wszystko do promise
    }

    render() {
        return (
            <div className="input-page">

                <div>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="EMAIL" onChange={this.updateLogin}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="HASŁO" onChange={this.updatePassword}/>
                        </Form.Group>
                        <Button onClick={() => this.loginClick(this.state.login, this.state.password)}
                                variant="outline-secondary btn-block" type="button">
                            ZALOGUJ
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export {Login}