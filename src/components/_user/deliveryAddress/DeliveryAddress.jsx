import React, {Component} from "react";
import Table from "react-bootstrap/Table";
import * as URLs from '../../URLs'

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
            .then(deliveryAddresses => this.setState({deliveryAddresses: deliveryAddresses}));
    }

    render() {
        const deliveryAddresses = this.state.deliveryAddresses;
        let rowNumber = 0;

        if (Object.entries(deliveryAddresses).length === 0) {
            return (
                <EmptyList/>
            )
        } else {
            return (
                <div className='table-page'>
                    <Table bordered hover>
                        <thead>
                        <tr>
                            <td>Lp</td>
                            <th>Adres</th>
                            <th>Telefon</th>
                        </tr>
                        </thead>
                        <tbody>
                        {deliveryAddresses.map(deliveryAddress => <AddressItem key={deliveryAddress.id}
                                                                               address={deliveryAddress}
                                                                               rowNumber={rowNumber += 1}/>)}
                        </tbody>
                    </Table>
                </div>
            )
        }
    }
}

const EmptyList = () => (
    <div className='main-page'>
        <section className="container">
            <h5 className="top-page-text">MOJE ADRESY</h5>
            <div className="top-page-text-details">
                <p className="top-page-text-details-at">@ status</p>
                <p className="top-page-text-details-text">nie masz jeszcze zapisanych żadnych adresów</p>
            </div>
        </section>
    </div>
)

const AddressItem = props =>
    <tr>
        <td>{props.rowNumber}</td>
        <td>{props.address.street}</td>
        <td>{props.address.phone}</td>
    </tr>

export {DeliveryAddress}