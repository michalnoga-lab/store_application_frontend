import React, {Component} from "react";
import * as URLs from '../../URLs';
import {Table} from "react-bootstrap";

class ActiveCart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            productsInActiveCart: []
        }
    }

    componentDidMount() {
        const url = URLs.backend + 'api/carts/active';
        const headers = new Headers();
        headers.set('Content-Type', 'application/json;charset=UTF-8');
        headers.set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));

        fetch(url, {
            method: 'GET',
            headers: headers
        })
            .then(response => response.json())
            .then(cart => this.setState({productsInActiveCart: cart}));
    }

    render() {
        const productsInActiveCart = this.state.productsInActiveCart;
        let rowNumber = 0;

        if (Object.entries(productsInActiveCart).length === 0) {
            return (
                <EmptyList/>
            )
        } else {
            return (
                <div className='table-page'>
                    <Table bordered hover>
                        <thead>
                        <TableHeadItem/>
                        </thead>
                        <tbody>
                        {productsInActiveCart.map(product => <CartItem key={product.id} product={product}
                                                                       rowNumber={rowNumber += 1}/>)}
                        </tbody>
                    </Table>
                </div>
            )
        }
    }
}

const EmptyList = () =>
    <div className='main-page'>
        <section className="container">
            <h5 className="top-page-text">MOJE KOSZYKI</h5>
            <div className="top-page-text-details">
                <p className="top-page-text-details-at">@ status</p>
                <p className="top-page-text-details-text">nie masz jeszcze żadnych koszyków</p>
            </div>
        </section>
    </div>

const TableHeadItem = () =>
    <tr>
        <td>Lp</td>
        <td>Dostawa</td>
        <td>Wartość</td>
        <td>Data zamówienia</td>
    </tr>

const CartItem = props =>
    <tr>
        <td>{props.rowNumber}</td>
        <td>{props.product.name}</td>
        <td></td>
        <td></td>
        {/*// todo enable*/}

        {/*<td>{cartToDisplay.deliveryAddressDTO.street} </td>*/}
        {/*<td>{cartToDisplay.totalNetValue} PLN</td>*/}
        {/*<td>{cartToDisplay.purchaseTime}</td>*/}
        {/*/!*todo formatowanie wartości po przecinku + netto/brutto *!/*/}
    </tr>

export {ActiveCart}