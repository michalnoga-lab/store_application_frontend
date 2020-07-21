import React, {Component} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import * as URLs from '../../URLs'
import Table from "react-bootstrap/Table";

class ProductSearch extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchQuery: '',
            foundedProducts: []
        }
    }

    updateSearchQuery = e => {
        this.setState({searchQuery: e.target.value})
    }

    async searchForProduct() {

        const url = URLs.backend + 'api/search/products';
        const headers = new Headers();
        headers.set('Content-Type', 'application/json;charset=UTF-8');
        headers.set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));

        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({userInput: this.state.searchQuery})
        });

        const body = await response.json();
        this.setState({foundedProducts: await body});
    }

    clearSearchQuery() {
        this.setState({foundedProducts: []})
    }

    render() {
        let rowNumber = 0;

        if (this.state.foundedProducts.length === 0) {
            return (
                <div className="input-page">
                    <Form>
                        <Form.Group controlId="searchForm">
                            <Form.Control type="text" placeholder='NAZWA PRODUKTU'
                                          onChange={this.updateSearchQuery}/>
                        </Form.Group>
                    </Form>
                    <Button onClick={() => this.searchForProduct(this.state.searchQuery)}
                            variant="outline-secondary btn-block" type="button">WYSZUKAJ</Button>
                </div>
            )
        } else {
            return (
                <div className="table-page">
                    <Table bordered hover>
                        <thead>
                        <tr>
                            <th>Lp</th>
                            <th>Nazwa</th>
                            <th>Cena</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.foundedProducts.map(el => (
                            <tr key={el.id}>
                                <td>{rowNumber+=1}</td>
                                <td>{el.name}</td>
                                <td>{el.nettPrice} PLN</td>
                                {/*todo formatowanie z zerami po przecinku*/}
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                    <Button onClick={() => this.clearSearchQuery()} variant="outline-secondary btn-block" type="button">WYSZUKAJ
                        PONOWNIE</Button>
                </div>
            )
        }
    }
}

export {ProductSearch}