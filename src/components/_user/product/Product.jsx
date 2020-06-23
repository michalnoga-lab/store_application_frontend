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

export {Product}