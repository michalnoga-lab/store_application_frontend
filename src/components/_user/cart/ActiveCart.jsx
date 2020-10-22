import React, {useState, useEffect, useRef} from "react";
import {useHistory} from 'react-router-dom'
import * as URLs from '../../URLs';
import Table from "react-bootstrap/Table";

const ActiveCart = () => { //todo jeżeli dodany adres stądo to powrót tutaj

    let [products, setProducts] = useState([])
    let [addresses, setAddresses] = useState([])
    let [address, setAddress] = useState({})
    let [cartClosed, setCartClosed] = useState(false)
    let [userHasAddresses, setUserHasAddresses] = useState(false)
    let [isAddAddAddressButtonActive, setIsAddAddressButtonActive] = useState(false)
    let [isSubmitButtonActive, setIsSubmitButtonActive] = useState(false)
    let [change, setChange] = useState(true)
    let history = useHistory()

    useEffect(() => {
        async function getData() {
            await getProductsFromActiveCart()
            await getAddresses()
        }

        getData().catch(err => console.log(err))
        setChange(false)
    }, [change])

    const handleAddressChange = event => {
        let target = event.target
        let value = target.value

        let addressToStore = addresses.filter(function (address, index, array) {
            if (address.id.toString() === value) {
                return address
            }
        })
        setAddress(addressToStore[0])
    }

    const handleSubmit = async event => {

        const url = URLs.backend + 'api/carts/close'
        const headers = new Headers();
        headers.set('Content-Type', 'application/json;charset=UTF-8');
        headers.set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));

        fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({id: address.id})
        })
            .then(() => setChange(true))
            .then(() => setCartClosed(true))
            .then(() => setProducts([]))
            .catch(err => console.log(err))

        event.preventDefault()
    }

    const getProductsFromActiveCart = async () => {
        const url = URLs.backend + 'api/products/activeCart'
        const headers = new Headers();
        headers.set('Content-Type', 'application/json;charset=UTF-8')
        headers.set('Authorization', 'Bearer ' + sessionStorage.getItem('token'))

        const response = fetch(url, {
            method: 'GET',
            headers: headers
        })
        const products = JSON.parse(await (await response).text())
        setProducts(await products)
    }

    const getAddresses = async () => {
        const url = URLs.backend + 'api/deliveryAddress/all'
        const headers = new Headers();
        headers.set('Content-Type', 'application/json;charset=UTF-8')
        headers.set('Authorization', 'Bearer ' + sessionStorage.getItem('token'))

        const response = fetch(url, {
            method: 'GET',
            headers: headers
        })

        const addresses = JSON.parse(await (await response).text())
        const firstAddress = await addresses[0]

        if (Object.keys(addresses).length === 0) {
            setUserHasAddresses(false)
            setIsAddAddressButtonActive(true)
            setIsSubmitButtonActive(false)
        } else {
            setUserHasAddresses(true)
            setIsAddAddressButtonActive(false)
            setIsSubmitButtonActive(true)
            setAddresses(await addresses)
            setAddress(await firstAddress)
        }
    }

    const handleRemoveFromCart = async event => {
        let target = event.target
        let id = target.parentElement.parentElement.getAttribute('id')

        const url = URLs.backend + 'api/products/remove/' + id;
        const headers = new Headers()
        headers.set('Content-Type', 'application/json;charset=UTF-8')
        headers.set('Authorization', 'Bearer ' + sessionStorage.getItem('token'))

        await fetch(url, {
            method: "DELETE",
            headers: headers,
            body: JSON.stringify({id: id})
        })
            .then(() => setChange(true))
    }

    const handleAddAddressButton = () => {
        history.push('/deliveryAddress/add')
    }

    if (Object.entries(products).length === 0) {
        return (
            <div className='main-page'>
                <div hidden={cartClosed}>
                    <section className="container">
                        <h5 className="top-page-text">MÓJ KOSZYK</h5>
                        <div className="top-page-text-details">
                            <p className="top-page-text-details-at">@ status</p>
                            <p className="top-page-text-details-text">nie masz jeszcze żadnych produktów w koszyku</p>
                        </div>
                    </section>
                </div>
                <div className='alert alert-success m-4' hidden={!cartClosed}>
                    <p>Zamówienie przesłane do realizacji</p>
                </div>
            </div>
        )
    } else {
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
                            <td>Akcja</td>
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
                                    <p className='fa fa-trash fa-2x icon-red' onClick={handleRemoveFromCart}/>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='table-page'>
                        <label hidden={!userHasAddresses}>DOSTAWA DO:</label>
                        <select name='address' value={address} onChange={handleAddressChange}
                                hidden={!userHasAddresses}>
                            {
                                addresses.map(address => <option key={address.id}
                                                                 value={address.id}>{address.street}</option>)
                            }
                        </select>
                        <div hidden={!isAddAddAddressButtonActive}>
                            <button className='btn btn-outline-dark btn-block' onClick={handleAddAddressButton}>DODAJ
                                ADRES
                                DOSTAWY
                            </button>
                        </div>
                        <div className='table-page' hidden={!isSubmitButtonActive}>
                            <button type='submit' className='btn btn-block btn-outline-secondary'
                                    hidden={cartClosed}>PRZEŚLIJ DO REALIZACJI
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export {ActiveCart}