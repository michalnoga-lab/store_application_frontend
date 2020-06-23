import React, {Component} from "react";
import * as URLs from '../../URLs'
import {Table} from "react-bootstrap";

class Cart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            carts: []
        }
    }

    componentDidMount() {
        const url = URLs.backend + 'api/carts/all';
        const headers = new Headers();
        headers.set('Content-Type', 'application/json;charset=UTF-8');
        headers.set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));

        fetch(url, {
            method: 'GET',
            headers: headers
        }).then(response => response.json())
            .then(carts => this.setState({carts: carts}));
    }

    render() {
        if (this.state.carts.length === 0) {
            return (
                <div className='main-page'>
                    <section className="container">
                        <h5 className="top-page-text">MOJE KOSZYKI</h5>
                        <div className="top-page-text-details">
                            <p className="top-page-text-details-at">@ status</p>
                            <p className="top-page-text-details-text">nie masz jeszcze żadnych koszyków</p>
                        </div>
                    </section>
                </div>
            )
        } else {
            return (
                <div className='table-page'>
                    <Table bordered hover>
                        <thead>
                        <tr>
                            <td>Lp</td>
                            <td>Dostawa</td>
                            <td>Wartość</td>
                            <td>Data zamówienia</td>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.carts.map(el => (
                            <tr key={el.id}>
                                <td>##</td>
                                <td>{el.deliveryAddressDTO.street}</td>
                                <td> wartość netto / brutto</td>
                                <td>{el.purchaseTime}</td>
                                {/*todo formatowanie czasu */}
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            )
        }
    }
}

export {Cart}