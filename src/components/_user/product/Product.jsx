import React, {Component} from "react";
import * as URLs from "../../URLs"
import Table from "react-bootstrap/Table";

class Product extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        const url = URLs.backend + 'api/products/all';
        const headers = new Headers();
        headers.set('Content-Type', 'application/json;charset=UTF-8');
        headers.set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));

        console.log('component mount token') // todo
        console.log(sessionStorage.getItem('token'))

        fetch(url, {
            method: 'GET',
            headers: headers
        })
            .then(response => response.json())
            .then(products => this.setState({products: products}));
    }

    render() {
        if (this.state.products.length === 0) {
            return (
                <div className='main-page'>
                    <section className="container">
                        <h5 className="top-page-text">MOJE PRODUKTY</h5>
                        <div className="top-page-text-details">
                            <p className="top-page-text-details-at">@ status</p>
                            <p className="top-page-text-details-text">nie masz jeszcze żadnych produktów -
                                zostaną one wkrótce dodane przez administratora systemu</p>
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
                            <th>Numer</th>
                            <th>Nazwa</th>
                            <th>Cena</th>
                            <th>Akcja</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.products.map(el => (
                            <tr key={el.id}>
                                <td>{el.numberInAuction}</td>
                                <td>{el.name}</td>
                                <td>{el.nettPrice} PLN</td>
                                <td>DO KOSZYKA</td>
                                {/*todo formatowanie z zerami po przecinku*/}
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            )
        }
    }
}

export {Product}