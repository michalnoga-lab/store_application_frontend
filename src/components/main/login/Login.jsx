import React, {Component} from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Login extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="login-page" ref={this.props.containerRef}>
                <div className="header">Login</div>
                <div className="content">
                    <div className="image">
                        {/*<img src={}/> */}
                    </div>
                    <div className="login-form">
                        <div className="form-group">
                            <label htmlFor="login">Login</label>
                            <input type="text" name="login" placeholder="Login"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Hasło</label>
                            <input type="password" name="password" placeholder="Hasło"/>
                        </div>
                    </div>
                </div>
                <div className="login-footer">
                    <button type="submit" className="btn btn-block btn-outline-dark">LOGOWANIE</button>
                </div>
            </div>
        )
    }

}

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