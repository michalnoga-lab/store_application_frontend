import React, {Component, useEffect, useState} from "react";
import Table from "react-bootstrap/Table";
import * as URLs from '../../URLs'

const ClosedCart = () => {

    let [products, setProducts] = useState()
    let [change, setChange] = useState(true)

    useEffect(() => {
        async function getData() {
            await getAllProductsFromCart()
        }

        getData().catch(err => console.log(err))
        setChange(false)
    }, [change])

    const getAllProductsFromCart = async () => {
        const url = URLs.backend + 'api/carts/one/' + sessionStorage.getItem('cartId')
        const headers = new Headers()
        headers.set('Content-Type', 'application/json;charset=UTF-8')
        headers.set('Authorization', 'Bearer ' + sessionStorage.getItem('token'))

        const response = await fetch(url, {
            method: 'GET',
            headers: headers
        })


        console.log('---------------------') //todo
        console.log(products)

        const body = await response.json()
        setProducts(body)
    }

    return (
        <div>
            <div className='table-page'>
                <Table bordered hover>
                    <thead>
                    <tr>
                        <td>Lp</td>
                        <td>Nazwa</td>
                        <td>Ilość</td>
                        <td>Netto</td>
                        <td>VAT</td>
                        <td>Wartość netto</td>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((product, i) =>
                        <tr key={product.id} id={product.id}>
                            <td className='col-1'>{i + 1}</td>
                            <td className='col-5'>{product.name}</td>
                            <td className='col-1'>{product.quantity} SZT</td>
                            <td className='col-1'>{product.nettPrice} PLN</td>
                            <td className='col-1'>{product.vat} %</td>
                            <td className='col-1'>{product.nettPrice * product.quantity} PLN</td>
                            <td className='col-2'>
                                <button className='btn btn-block btn-danger'>USUŃ</button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export {ClosedCart}