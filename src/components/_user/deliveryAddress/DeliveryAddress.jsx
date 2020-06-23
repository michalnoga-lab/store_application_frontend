import React, {Component} from "react";
import * as URLs from '../../URLs'
import Table from "react-bootstrap/Table";

class DeliveryAddress extends Component {

    constructor(props) {
        super(props);

        this.state = {
            deliveryAddresses: []
        }
    }

    componentDidMount() {
        const url = URLs.backend + 'api/deliveryAddress/all';
        const headers = new Headers();
        headers.set('Content-Type', 'application/json;charset=UTF-8');
        headers.set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));

        fetch(url, {
            method: 'GET',
            headers: headers
        }).then(response => response.json())
            .then(deliveryAddress => this.setState({deliveryAddresses: deliveryAddress}));
    }

    render() {
        return (
            <div className='table-page'>
                <Table bordered hover>
                    <thead>
                    <tr>
                        <th>Adres</th>
                        <th>Telefon</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.deliveryAddresses.map(el => (
                        <tr key={el.id}>
                            <td>{el.street}</td>
                            <td>{el.phone}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export {DeliveryAddress}