import React, {Component} from "react";
import * as URLs from '../../URLs'

class AddDeliveryAddress extends Component {

    constructor(props) {
        super(props);

        this.state = {
            street: '',
            phone: '',
            isStreetIncorrect: false,
            streetErrorMessage: '',
            isPhoneIncorrect: false,
            phoneErrorMessage: '',
            isAddressAdded: false,
            addressAddedMessage: ''
        }
    }

    handleChange = event => {
        let target = event.target;
        let value = target.value;
        let name = target.name;
        const regex = /^[a-z0-9\s]{0,100}$/g;
        const errorMessage = 'Dozwolone są tylko litery i cyfry';

        if (name === 'street') {
            if (regex.test(value)) {
                this.setState({isStreetIncorrect: false})
            } else {
                this.setState({isStreetIncorrect: true, streetErrorMessage: errorMessage, isAddressAdded: false});
            }
        }
        if (name === 'phone') {
            if (regex.test(value)) {
                this.setState({isPhoneIncorrect: false})
            } else {
                this.setState({isPhoneIncorrect: true, phoneErrorMessage: errorMessage, isAddressAdded: false})
            }
        }
        this.setState({[name]: value});
    }

    showAddressAddedMessage = () => {
        this.setState({
            isAddressAdded: true,
            addressAddedMessage: 'Poprawnie dodano nowy adres'
        })
    }

    clearFields = () => {
        this.setState({
            street: '',
            phone: '',
            isStreetIncorrect: false,
            streetErrorMessage: '',
            isPhoneIncorrect: false,
            phoneErrorMessage: ''
        })
    }

    handleSubmit = event => {
        if (!this.state.isStreetIncorrect && !this.state.isPhoneIncorrect) {

            const url = URLs.backend + 'api/deliveryAddress/add';
            const headers = new Headers();
            headers.set('Content-Type', 'application/json;charset=UTF-8');
            headers.set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));

            fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({street: this.state.street, phone: this.state.phone})
            })
                .then(this.clearFields)
                .then(this.showAddressAddedMessage);
        }
        event.preventDefault();
    }

    render() {
        return (
            <div className='input-page'>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <input
                            className='btn-block form-control'
                            type='text'
                            placeholder='ULICA'
                            name='street'
                            value={this.state.street}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className='alert alert-danger' hidden={!this.state.isStreetIncorrect}>
                        {this.state.streetErrorMessage}
                    </div>
                    <div className='form-group'>
                        <input
                            className='btn-block form-control'
                            type='text'
                            placeholder='TELEFON'
                            name='phone'
                            value={this.state.phone}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className='alert alert-danger' hidden={!this.state.isPhoneIncorrect}>
                        {this.state.phoneErrorMessage}
                    </div>
                    <div className='alert alert-success' hidden={!this.state.isAddressAdded}>
                        {this.state.addressAddedMessage}
                    </div>
                    <div>
                        <button type='submit' className='btn btn-block btn-outline-dark'>DODAJ</button>
                    </div>
                </form>
            </div>
        )
    }
}

export {AddDeliveryAddress}