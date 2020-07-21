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

        fetch(url, {
            method: 'GET',
            headers: headers
        })
            .then(response => response.json())
            .then(products => this.setState({products: products}));
    }

    render() {
        const products = this.state.products;
        let rowNumber = 0;

        if (Object.entries(products).length === 0) {
            return (
                <EmptyList/>
            )
        } else {
            return (
                <div className='table-page'>
                    <Table bordered hover>
                        <thead>
                        <tr>
                            <th>Lp</th>
                            <th>Nazwa</th>
                            <th>Cena</th>
                        </tr>
                        </thead>
                        <tbody>
                        {products.map(product => <ProductItem key={product.id} rowNumber={rowNumber += 1}
                                                              product={product}/>)}
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
            <h5 className="top-page-text">MOJE PRODUKTY</h5>
            <div className="top-page-text-details">
                <p className="top-page-text-details-at">@ status</p>
                <p className="top-page-text-details-text">nie masz jeszcze żadnych produktów -
                    zostaną one wkrótce dodane przez administratora systemu</p>
            </div>
        </section>
    </div>

const ProductItem = props =>
    <tr>
        <td>{props.rowNumber}</td>
        <td>{props.product.name}</td>
        <td>{props.product.nettPrice} PLN</td>
        {/*todo formatowanie z zerami po przecinku*/}
    </tr>

export {Product}