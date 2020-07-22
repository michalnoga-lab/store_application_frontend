import React, {Component} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as URLs from '../../URLs'
import Address from "./model/Address";

class AddDeliveryAddress extends Component {

    constructor(props) {
        super(props);

        this.state = {
            street: '',
            phone: ''
        }
    }

    updateStreet = e => {
        this.setState({street: e.target.value})
    }

    updatePhone = e => {
        this.setState({phone: e.target.value})
    }

    async addAddress(address, phone) {

        const url = URLs.backend + 'api/deliveryAddress/add';
        const headers = new Headers();
        headers.set('Content-Type', 'application/json;charset=UTF-8');
        headers.set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));

        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(new Address(this.state.street, this.state.phone))
        });

        const body = await response.json();
    }

    render() {
        return (
            <div className='input-page'>
                <Form>
                    <Form.Group controlId="formStreet">
                        <Form.Control type="text" placeholder="ULICA" onChange={this.updateStreet}/>
                    </Form.Group>
                    <Form.Group controlId="formPhone">
                        <Form.Control type="text" placeholder="TELEFON" onChange={this.updatePhone}/>
                    </Form.Group>
                    <Button onClick={() => this.addAddress(this.state.street, this.state.phone)}
                            variant="outline-secondary btn-block" type="button"> DODAJ </Button>
                </Form>
            </div>
        )
    }
}

//todo redirect -> do wszystkie adresy

export {AddDeliveryAddress}