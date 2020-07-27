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

    // todo zapisywanie produktów w LS i sprawdzanie co określony czas ??? przycisk REFRESH ???
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
            .then(products => this.setState({products: products}))
            .then(() => localStorage.setItem('allProducts', JSON.stringify(this.state.products)))
            .then(() => console.log('fetch')) //todo
            .then(() => console.log(localStorage.getItem('allProducts'))); //todo
    }

    render() {
        const allProducts = this.state.products;
        let rowNumber = 0;
        let products = allProducts;

        if (this.state.filterProducts) {
            products = allProducts.filter(product => product.name.toString().toLowerCase().includes(this.state.filterProducts.toLowerCase()));
        }

        return (<div className="table-page">
                <Table bordered hover>
                    <thead>
                    <tr>
                        <td>Lp</td>
                        <td><input type='text' onChange={this.filterProducts} className='btn-block'
                                   placeholder='WYSZUKAJ PO NAZWIE'/></td>
                        <td>Cena</td>
                    </tr>
                    </thead>
                    <tbody id='productItemRow'>
                    {products.map(product => <ProductItem key={product.id} rowNumber={rowNumber += 1}
                                                          product={product}/>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}

const ProductItem = props =>
    <tr onClick={() => selectProductRow(props.product.id)}>
        <td>{props.rowNumber}</td>
        <td>{props.product.name}</td>
        <td>{props.product.nettPrice} PLN</td>
    </tr>

const selectProductRow = (productId) => {
    localStorage.setItem('productId', productId); //todo redirect => add product to cart
}

export {Product}

// todo - remove product search