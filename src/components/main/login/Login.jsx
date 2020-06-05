import React, {Component} from 'react'
import Form from "react-bootstrap/Form";
import User from "./model/User";
import {backend} from "../../URLs";
import Button from "react-bootstrap/Button";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: '',
        }
    }

    updateLogin = e => {
        this.setState({
            login: e.target.value
        });

        console.log(this.state.login)
    };

    updatePassword = (e) => {
        this.setState({
            password: e.target.value
        });
    };

    async loginClick(login, password) {

        const url = backend + 'login';
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
    }

    render() {

        return (
            <div className="login-page">
                <section className="container">
                    <div>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="EMAIL" onChange={this.updateLogin}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="HASŁO" onChange={this.updatePassword}/>
                            </Form.Group>
                            {/*<Form.Group controlId="formBasicCheckbox">*/}
                            {/*    <Form.Check type="checkbox" label="Check me out"/>*/}
                            {/*</Form.Group>*/}
                            <Button onClick={() => this.loginClick(this.state.login, this.state.password)}
                                    variant="outline-secondary" type="button">
                                ZALOGUJ
                            </Button>
                        </Form>
                    </div>
                </section>
            </div>

        )
    }

}

// Form.Control.propTypes = {
//     text(props, propName, component) {
//         if (!(propName in props)) {
//             return new Error(`POLE NIE MOŻE BYĆ PUSTE`);
//         }
//     }
// }; todo enable

export {Login}