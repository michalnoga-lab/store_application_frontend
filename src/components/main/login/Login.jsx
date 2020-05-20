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
            password: ''
        }
    }

    updateLogin = (e) => {
        this.setState({
            login: e.target.value
        });

        console.log(this.state.login)
    };

    updatePassword = (e) => {
        this.setState({
            password: e.target.value
        });

        console.log(this.state.password) // todo

    };

    async loginClick() {
        console.log('insid login click'); //todo

        const url = backend + 'login';
        const headers = new Headers();
        headers.set('Content-Type', 'application/json;charset=UTF-8');

        const response = await fetch(url,
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(new User(this.state.login, this.state.password))
            });

        sessionStorage.setItem('token', await response.json());


        console.log(sessionStorage.getItem('token')); //todo
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
                            <Button onClick={this.loginClick} variant="outline-secondary" type="submit">
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

/*
* <div className="login-page">
                <section className="container">
                    <div>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="EMAIL"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="HASŁO"/>
                            </Form.Group>
                            {/*<Form.Group controlId="formBasicCheckbox">* todo ???/}
                    <Form.Check type="checkbox" label="Check me out"/>
</Form.Group>
<Button variant="primary" type="submit">
    ZALOGUJ
</Button>
</Form>
</div>
</section>
</div>
*
* */