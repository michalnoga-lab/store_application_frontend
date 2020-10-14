import React, {useState, useEffect, useRef} from "react";
import {useHistory} from "react-router-dom";
import * as URLs from '../../URLs'
import Table from "react-bootstrap/Table";

const Product = () => { // TODO filtrowanie produktów po nazwie

    let [products, setProducts] = useState([])
    let [change, setChange] = useState(true)
    let history = useHistory()

    useEffect(() => {
        async function getData() {
            await getAllProducts()
        }

        getData().catch(err => console.log(err))
        setChange(false)
    }, [change])

    const getAllProducts = async () => {
        const url = URLs.backend + 'api/products/all';
        const headers = new Headers();
        headers.set('Content-Type', 'application/json;charset=UTF-8');
        headers.set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));

        const response = fetch(url, {
            method: 'GET',
            headers: headers
        })

        const body = await (await response).json()
        setProducts(await body)
    }

    const handleProductClick = event => {
        let target = event.target
        sessionStorage.setItem('productId', target.parentElement.getAttribute('id'))
        history.push('/products/one')
    }

    return (<div className="table-page">
            <div className='overflow-mobile'>
                <Table bordered hover>
                    <thead>
                    <tr>
                        <td>Lp</td>
                        <td>Nazwa</td>
                        <td>Cena</td>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((product, i) =>
                        <tr key={product.id} id={product.id} onClick={handleProductClick}>
                            <td>{i + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.nettPrice} PLN</td>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export {Product}