import React, {Component} from 'react'
import Form from "react-bootstrap/Form";
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
        })

        console.log(this.state.login)
    };

    updatePassword = (e) => {
        this.setState({
            password: e.target.value
        })

        console.log(this.state.password)

    };

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
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out"/>
                            </Form.Group>
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

Form.Control.propTypes = {
    text(props, propName, component) {
        if (!(propName in props)) {
            return new Error(`POLE NIE MOŻE BYĆ PUSTE`);
        }
    }
};

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