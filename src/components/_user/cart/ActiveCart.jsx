import React, {useState, useEffect, useRef} from "react";
import * as URLs from '../../URLs';
import Table from "react-bootstrap/Table";

const EmptyList = () => (
    <div className='main-page'>
        <section className="container">
            <h5 className="top-page-text">MÓJ KOSZYK</h5>
            <div className="top-page-text-details">
                <p className="top-page-text-details-at">@ status</p>
                <p className="top-page-text-details-text">nie masz jeszcze żadnych produktów w koszyku</p>
            </div>
        </section>
    </div>
)

const Product = props =>
    <tr>
        <td>{props.rowNumber}</td>
        <td>zwrócić najpierw nazwę</td>
        <td>{props.quantity}</td>
        <td>{props.nettPrice}</td>
        <td>{props.vat} %</td>
        <td>{props.value}</td>
    </tr>

const ActiveCart = () => {

    const [products, setProducts] = useState([])
    const [rowNumber, setRowNumber] = useState(0)
    const [change, setChange] = useState(true)

    useEffect(() => {
        async function getData() {
            await getProductsFromActiveCart()
        }

        getData().catch(err => console.log(err))
        setChange(false)
    }, [change])


    const getProductsFromActiveCart = async () => {
        const url = URLs.backend + 'api/products/activeCart'
        const headers = new Headers();
        headers.set('Content-Type', 'application/json;charset=UTF-8')
        headers.set('Authorization', 'Bearer ' + sessionStorage.getItem('token'))

        const response = fetch(url, {
            method: 'GET',
            headers: headers
        })

        //todo remove

        console.log('----------------- 1')
        console.log(await response)

        const products = JSON.parse(await (await response).text())

        console.log('--------------------- 2')
        console.log(await products)

        setProducts(await products)
    }


    if (Object.entries(products).length === 0) {
        return (
            <EmptyList/>
        )
    } else {
        return (
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
                    {products.map(product => <Product
                        key={product.id}
                        // todo numery prodktów
                        rowNumber={rowNumber}
                        quantity={product.quantity}
                        nettPrice={product.nettPrice}
                        vat={product.vat}
                        value={product.nettPrice * product.quantity}
                    />)}
                    </tbody>
                </Table>
            </div>
        )
    }


}

export {ActiveCart}