import React, {Component} from "react";
import * as URLs from "../../URLs"

class Products extends Component {

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
            .then(response => this.setState({products: response}))
            .catch(err => console.log('errors: ' + err))
    }

    render() {
        const {products} = this.state.products;

        console.log('products response') //todo
        console.log(products);

        return (
            <div className='main-page'>
                <ul>
                    {this.state.products.map(el => (
                        <li>
                            {el.toString()}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export {Products}