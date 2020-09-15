import React, {Component} from "react";
import * as URLs from '../../URLs'
import Table from "react-bootstrap/Table";
import Context from "../../context/context";

class Product extends Component {
    static contextType = Context

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            quantity: '',
            currentProductId: '',
            isQuantityValid: false,
            quantityErrorMessage: ''
        }
    }

    filterProducts = e => this.setState({filterProducts: e.target.value})

    showProductQuantity = (quantity, productId) => {
        const allProducts = this.state.products
        allProducts.filter(function (value, index, array) {
            if (value.id === productId) {
            }
        })
    }

    addToCart = () => {
        const url = URLs.backend + 'api/products/buy'
        const headers = new Headers();
        headers.set('Content-Type', 'application/json;charset=UTF-8');
        headers.set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));

        fetch(url,
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({"id": this.state.currentProductId, "quantity": this.state.quantity})
            })
            .then(() => this.setState({isProductAdded: true, addedProductMessage: 'Produkt został dodany do koszyka'}))
    }

    handleChange = event => {
        let target = event.target;
        let value = target.value;
        let name = target.name;
        let id = target.id;

        const regex = /^[0-9]{0,5}$/g;
        const zeroRegex = /^0+$/g;

        if (zeroRegex.test(value)) {
            this.setState({isQuantityValid: false, quantityErrorMessage: 'Wartość musi być większa od zera'})
        } else if (regex.test(value)) {
            this.setState({isQuantityValid: true, quantityErrorMessage: ''})
        } else if (value.length > 5) {
            this.setState({isQuantityValid: false, quantityErrorMessage: 'Przekroczono maksymalną ilość znaków'})
        } else {
            this.setState({isQuantityValid: false, quantityErrorMessage: 'Dozwolone są tylko cyfry'})
        }

        this.showProductQuantity(value, id);
        this.setState({[name]: value})
        this.setState({currentProductId: id, quantity: value})
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
            .then(products => this.setState({products: products}))
            .catch(err => console.log(err));
    }

    render() {
        const allProducts = this.state.products;
        let rowNumber = 0;
        let products = allProducts;

        if (this.state.filterProducts) {
            products = allProducts.filter(product => product.name.toString().toLowerCase().includes(this.state.filterProducts.toLowerCase()));
        }

        return (<div className="table-page">
                <div className='overflow-mobile'>
                    <Table bordered hover>
                        <thead>
                        <tr>
                            <td>Lp</td>
                            <td><input type='text' onChange={this.filterProducts} className='btn-block'
                                       placeholder='WYSZUKAJ PO NAZWIE'/></td>
                            <td>Cena</td>
                            <td></td>
                        </tr>
                        </thead>
                        <tbody>
                        {products.map(product =>
                            <tr key={product.id}>
                                <td>{rowNumber += 1}</td>
                                <td>{product.name}</td>
                                <td>{product.nettPrice} PLN</td>
                                <td>
                                    <form onSubmit={this.addToCart}>
                                        <input
                                            type='number'
                                            name='quantity'
                                            placeholder='PODAJ ILOŚĆ'
                                            id={product.id}
                                            className='form-control'
                                            onChange={this.handleChange}
                                        />
                                        <button type="submit" className='btn btn-outline-secondary btn-block'>DODAJ
                                        </button>
                                    </form>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export {Product}