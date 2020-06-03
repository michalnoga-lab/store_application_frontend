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
        console.log('inside login click'); //todo

        // const response = await getTokenBasedOnUserCredentials({
        //     "login":"root@gmail.com",
        //     "password":"useruser"
        // })

        console.log('inside get credentials');

        //const url = backend + 'login';

        const url = 'http://localhost:8080/login';

        const headers = new Headers();
        headers.set('Content-Type', 'application/json;charset=UTF-8');
        //headers.set('Role', 'application/json;charset=UTF-8'); //todo


        const response = await fetch(url,
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(new User('root@gmail.com', 'useruser'))
            });


        // const response2 = await fetch(url, {
        //     method: 'POST', headers: headers,
        //
        //     body: '{"login":"root@gmail.com","password":"useruser"}'
        // }).then((response) => {
        //     const reader = response.body.getReader();
        //     const stream = new ReadableStream({
        //         start(controller) {
        //             // The following function handles each data chunk
        //             function push() {
        //                 // "done" is a Boolean and value a "Uint8Array"
        //                 reader.read().then(({ done, value }) => {
        //                     // Is there no more data to read?
        //                     if (done) {
        //                         // Tell the browser that we have finished sending data
        //                         controller.close();
        //                         return;
        //                     }
        //
        //                     // Get the data and send it to the browser via the controller
        //                     console.log("&&&&&&&&&&&&&&&&777777");
        //                     console.log(value);
        //                     controller.enqueue(value);
        //                     push();
        //                 });
        //             }
        //
        //             push();
        //         }
        //     });


        console.log('************************');
        console.log(await response);


        // const receivedHeaders = response.headers.entries();
        // console.log(`received: ${receivedHeaders}`);
        // console.log(receivedHeaders.next());
        // console.log(receivedHeaders.next());
        // console.log(receivedHeaders.next());
        // console.log(receivedHeaders.next());
        // console.log(receivedHeaders.next());
        // console.log(await response);
        // console.log(await response.body.getReader().read().);
        // console.log(await response);

        //console.log(await response.headers.get('Role'));
        //console.log(await response.headers.get('Bearer'));


        // fetch(url,
        //     {
        //         method: 'POST',
        //         headers: headers,
        //         body: {login: "root@gmail.com", password: "useruser"}
        //     }
        // ).then(result => console.log(result))
        //     .then(result => console.log(result))


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
                            <Button onClick={this.loginClick} variant="outline-secondary" type="button">
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

const getTokenBasedOnUserCredentials = async (credentials) => {

    console.log('inside get credentials');

    //const url = backend + 'login';

    const url = 'http://localhost:8080/login';
    const headers = new Headers();
    headers.set('Content-Type', 'application/json;charset=UTF-8');
    //'Authorization': `Token token=${user.token}`


    const response = await fetch(url,
        {
            method: 'POST',
            headers: headers,
            //body: JSON.stringify(new User(this.state.login, this.state.password))
            body: credentials
        });


    console.log('************************');
    console.log(response);

    // sessionStorage.setItem('token', await response.json());
    //
    //
    // console.log(await sessionStorage.getItem('token')); //todo
};

export {Login}