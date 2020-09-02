import React, {Component} from "react";
import * as URLs from '../../URLs';
import {Table} from "react-bootstrap";

class AllCarts extends Component {

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
        })
            .then(response => response.json())
            .then(carts => this.setState({carts: carts}))
            .catch(err => console.log(err))

        console.log(this.state.carts)
    }

    render() {
        const carts = this.state.carts;
        let rowNumber = 0;

        if (this.state.carts.length === 0) {
            return (
                <EmptyList/>
            )
        } else {
            return (
                <div className='table-page'>
                    <div className='overflow-mobile'>
                        <Table bordered hover>
                            <thead>
                            <TableHeadItem/>
                            </thead>
                            <tbody>
                            {carts.map(cart => <CartItem key={cart.id} cart={cart} rowNumer={rowNumber += 1}/>)}
                            </tbody>
                        </Table>
                    </div>
                </div>
            )
        }
    }
}

const EmptyList = () => (
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

const TableHeadItem = () =>
    <tr>
        <td>Lp</td>
        <td>Dostawa</td>
        <td>Wartość brutto</td>
        <td>Data zamówienia</td>
    </tr>

const CartItem = props =>
    <tr>
        <td>{props.rowNumer}</td>
        <td>{props.cart.deliveryAddressDTO == null ? 'nie ustawiona' : props.cart.deliveryAddressDTO.street}</td>
        <td> {props.cart.totalGrossValue} PLN</td>
        <td>{props.cart.purchaseTime == null ? 'koszyk otwarty' :
            props.cart.purchaseTime.toString().replace('T', " ")}</td>
    </tr>

export {AllCarts}