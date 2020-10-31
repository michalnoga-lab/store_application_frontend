import React, {useState, useRef, useEffect} from "react";
import {Table} from "react-bootstrap";
import * as URLs from '../../URLs';

const AdminProduct = () => {

    let [products, setProducts] = useState([])
    let [change, setChange] = useState(true)

    useEffect(() => {
        async function getData() {
            await getProducts()
        }

        getData().catch(err => console.log(err))
        setChange(false)
    }, [change])

    const getProducts = async () => {
        const url = URLs.backend + 'api/admin/products/all'
        const headers = new Headers();
        headers.set('Content-Type', 'application/json;charset=UTF-8')
        headers.set('Authorization', 'Bearer ' + sessionStorage.getItem('token'))

        fetch(url, {
            method: 'GET',
            headers: headers
        })
            .then(response => response.json())
            .then(products => setProducts(products))
            .catch(err => console.log(err))
    }


    return (
        <div className='table-page'>
            <div className='overflow-mobile'>
                <Table bordered hover>
                    <thead>
                    <tr>
                        <td>Lp</td>
                        <td>Nazwa</td>
                        <td>Numer w przetargu</td>
                        <td>Opis</td>
                        <td>Cena netto</td>
                        <td>VAT</td>
                        <td>Firma</td>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((product, i) =>
                        <tr key={product.id}>
                            <td>{i + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.numberInAuction}</td>
                            <td>{product.description}</td>
                            <td>{product.nettPrice} PLN</td>
                            <td>{product.vat} %</td>
                            <td>{product.companyDTO.name}</td>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export {AdminProduct}