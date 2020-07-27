import React, {Component} from "react";
import Table from "react-bootstrap/Table";

class AddProductToCart extends Component {

    constructor(props) {
        super(props);
    }

    handleSubmit = event => {
        console.log('submit');
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
                <tbody>


                {/*<tr>*/}
                {/*    <form onSubmit={this.handleSubmit}>*/}

                {/*        <div>*/}
                {/*            <input type='text' className='btn-block' placeholder='PODAJ ILOŚĆ'/>*/}

                {/*            <button type='submit' className='btn btn-success'>DO KOSZYKA</button>*/}
                {/*        </div>*/}


                {/*    </form>*/}

                {/*</tr>*/}

                </tbody>


            </Table>
        </div>)
    }
}

// todo dalej cała reszta w tablelce

export {AddProductToCart}