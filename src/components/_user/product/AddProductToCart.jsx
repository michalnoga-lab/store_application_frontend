import React, {Component} from "react";
import Table from "react-bootstrap/Table";

class AddProductToCart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            productId: localStorage.getItem('productId'),
            allProducts: localStorage.getItem('allProducts')
        }
    }

    render() {
        console.log(`storage: ${localStorage.getItem('allProducts')}`); //todo
        console.log(`state: ${this.state.allProducts}`); //todo

        return (<div className='table-page'>
            <Table bordered hover>
                <thead>
                <tr>
                    <td>Lp</td>
                    <td>Nazwa</td>
                    <td>Cena</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>a</td>
                    <td>{this.state.allProducts}</td>
                    <td>c</td>
                </tr>
                </tbody>
            </Table>
        </div>)
    }
}

export {AddProductToCart}