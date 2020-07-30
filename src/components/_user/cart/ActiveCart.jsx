import React, {Component} from "react";
import * as URLs from '../../URLs';
import {Table} from "react-bootstrap";

class ActiveCart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            productsInCart: []
        }
    }

    componentDidMount() {  // todo pobieranie z LS + update wszystkich koszyków z DB po wysłaniu
        // const url = URLs.backend + 'api/carts/active';
        // const headers = new Headers();
        // headers.set('Content-Type', 'application/json;charset=UTF-8');
        // headers.set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
        //
        // fetch(url, {
        //     method: 'GET',
        //     headers: headers
        // })
        //     .then(response => response.json())
        //     .then(cart => this.setState({productsInActiveCart: cart}));

        this.setState({productsInCart: JSON.parse(localStorage.getItem('cart'))});
    }

    handleRemove = () => {
        console.log('removed!'); //todo remove
    }

    handleAddress = () => {

    }

    handleSubmit = () => {

    }

    render() {
        const productsInActiveCart = this.state.productsInCart;
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

                        {/*todo handle remove*/}

                        <tbody>
                        {productsInActiveCart.map(product => <CartItem key={product.id}
                                                                       product={product}
                                                                       rowNumber={rowNumber += 1}/>)}
                        </tbody>

                        {/* todo adres dostawy*/}
                        {/* todo wyślij zamówienie*/}

                    </Table>
                </div>
            )
        }
    }
}

const EmptyList = () =>
    <div className='main-page'>
        <section className="container">
            <h5 className="top-page-text">MÓJ KOSZYK</h5>
            <div className="top-page-text-details">
                <p className="top-page-text-details-at">@ status</p>
                <p className="top-page-text-details-text">nie masz produktów w koszyku</p>
            </div>
        </section>
    </div>

const TableHeadItem = () =>
    <tr>
        <td>Lp</td>
        <td>Nazwa</td>
        <td>Cena</td>
        <td>Ilość</td>
        <td>Wartość</td>
        <td>Akcja</td>
    </tr>

const CartItem = props =>
    <tr>
        <td>{props.rowNumber}</td>
        <td>{props.product.name}</td>
        <td>{props.product.nettPrice}</td>
        <td>{props.product.quantity}</td>
        <td>{props.product.nettPrice * props.product.quantity} PLN</td>
    </tr>

export {ActiveCart}