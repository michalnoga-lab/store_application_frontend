import React, {Component} from "react";
import * as URLs from '../../URLs'
import Table from "react-bootstrap/Table";

class Product extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        }
    }

    filterProducts = e => this.setState({filterProducts: e.target.value});
    filterPrice = e => this.setState({filterPrice: e.target.value});

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
        const allProducts = this.state.products;
        let rowNumber = 0;
        let products = allProducts;

        if (this.state.filterProducts) {
            products = allProducts.filter(product => product.name.toString().toLowerCase().includes(this.state.filterProducts.toLowerCase()));
        }

        if (this.state.filterPrice) {
            products = allProducts.filter(product => product.nettPrice.toString().toLowerCase().includes(this.state.filterPrice.toLowerCase()));
        }

        return (<div className="input-page">
                <div className="table-page">
                    <Table bordered hover>
                        <thead>
                        <tr>
                            <td>Lp</td>
                            <td><input type='text' onChange={this.filterProducts} className='btn-block'
                                       placeholder='WYSZUKAJ PO NAZWIE' readOnly={this.filterPrice.size > 0}/></td>
                            <td>Cena</td>
                        </tr>
                        </thead>
                        <tbody>
                        {products.map(product => <ProductItem key={product.id} rowNumber={rowNumber += 1}
                                                              product={product}/>)}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

const ProductItem = props =>
    <tr>
        <td>{props.rowNumber}</td>
        <td>{props.product.name}</td>
        <td>{props.product.nettPrice} PLN</td>
    </tr>

export {Product}