import React, {Component} from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Login extends Component {

    render() {
        return (
            <div className="login-page">
                <section className="container">
                    <div className="">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="EMAIL"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="HASŁO"/>
                            </Form.Group>
                            {/*<Form.Group controlId="formBasicCheckbox">* todo ???/}
                {/*    <Form.Check type="checkbox" label="Check me out"/>*/}
                            {/*</Form.Group>*/}
                            <Button variant="primary" type="submit">
                                ZALOGUJ
                            </Button>
                        </Form>
                    </div>
                </section>
            </div>
        )
    }
}

export default Login