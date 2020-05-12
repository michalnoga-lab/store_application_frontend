import React, {Component} from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Login extends Component {

    render() {
        return (
            <div className="login-page">
                <div className="col-8">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="PODAJ EMAIL"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="PODAJ HASŁO"/>
                        </Form.Group>
                        {/*<Form.Group controlId="formBasicCheckbox">* todo ???/}
                {/*    <Form.Check type="checkbox" label="Check me out"/>*/}
                        {/*</Form.Group>*/}
                        <Button variant="primary" type="submit">
                            ZALOGUJ
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Login