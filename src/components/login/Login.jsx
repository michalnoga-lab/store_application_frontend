import React, {Component} from 'react'
import Form from "react-bootstrap/Form";
import User from "./model/User";
import * as URLs from "../URLs"
import Button from "react-bootstrap/Button";

class Login extends Component {

    constructor(props) {
        super(props);
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
                body: JSON.stringify(new User(login, password))
            });
        const body = await response.json();
        sessionStorage.setItem('token', await body.token)
        sessionStorage.setItem('role', await body.role)

        console.log('++++++++++++++++++++++++++++==') //todo remove in production
        console.log(await sessionStorage.getItem('token'))
        console.log(await sessionStorage.getItem('role'))
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