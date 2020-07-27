import React, {Component} from "react";
import Table from "react-bootstrap/Table";

class AddProductToCart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isQuantityValid: true,
            quantityErrorMessage: ''
        }
    }

    handleChange = event => {
        let target = event.target;
        let value = target.value;
        let name = target.name;

        const regex = /^[0-9]{0,5}$/g;

        if (regex.test(value)) {
            this.setState({isQuantityValid: true, quantityErrorMessage: ''})
        } else {
            this.setState({isQuantityValid: false, quantityErrorMessage: 'Dozwolone są tylko cyfry'})
        }

        this.setState({[name]: value});
    }

    clearFields = () => {
        this.setState({isQuantityValid: true, quantityErrorMessage: ''})
    }

    handleSubmit = event => {

        console.log(`SUBMIT ${this.state.isQuantityValid}`); //todo

        this.clearFields();
        event.preventDefault();
    }

    render() {
        const allProducts = JSON.parse(localStorage.getItem('allProducts'));
        const productToBuy = {};

        for (let product of allProducts) {
            if (product.id == localStorage.getItem('productId')) {
                Object.assign(productToBuy, product);
            }
        }

        console.log(productToBuy); //todo

        return (<div className='table-page'>
            <Table bordered hover>
                <thead>
                <tr>
                    <td>Nazwa</td>
                    <td>Cena</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{productToBuy.name}</td>
                    <td>{productToBuy.nettPrice} PLN</td>
                </tr>
                </tbody>
            </Table>

            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type='text' className='btn-block' placeholder='PODAJ ILOŚĆ'
                               onChange={this.handleChange}/>
                        <div className='alert alert-danger' hidden={this.state.isQuantityValid}>
                            {this.state.quantityErrorMessage}
                        </div>
                        <div>
                            <button type='submit' className='btn btn-block btn-outline-dark'>DO KOSZYKA</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>)
    }
}

// todo dalej cała reszta w tablelce

export {AddProductToCart}