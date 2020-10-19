import React, {useState, useEffect, useRef, useCallback} from "react";
import * as URLs from '../../URLs';
import {Table} from "react-bootstrap";
import {Redirect} from "react-router";

const EmptyList = () => (
    <div className='main-page'>
        <section className="container">
            <h5 className="top-page-text">MOJE KOSZYKI</h5>
            <div className="top-page-text-details">
                <p className="top-page-text-details-at">@ status</p>
                <p className="top-page-text-details-text">nie masz jeszcze żadnych koszyków</p>
            </div>
        </section>
    </div>
)

const TableHeadItem = () =>
    <tr>
        <td className='col-1'>Lp</td>
        <td className='col-5'>Dostawa do</td>
        <td className='col-2'>Wartość koszyka</td>
        <td className='col-2'>Data zamówienia</td>
        <td className='col-2'></td>
    </tr>

const AllCarts = () => {

    const [carts, setCarts] = useState([])
    const [change, setChange] = useState(true)

    useEffect(() => {
        async function getData() {
            await getAllClosedCarts()
        }

        getData().catch(err => console.log(err))
        setChange(false)
    }, [change])

    const getAllClosedCarts = async () => {
        const url = URLs.backend + 'api/carts/all';
        const headers = new Headers();
        headers.set('Content-Type', 'application/json;charset=UTF-8');
        headers.set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));

        fetch(url, {
            method: 'GET',
            headers: headers
        })
            .then(response => response.json())
            .then(carts => setCarts(carts))
            .catch(err => console.log(err))
    }

    const handleCartClick = async event => {
        let target = event.target

        sessionStorage.setItem('cartId', target.parentElement.getAttribute('id'));
        return <Redirect push to={'/carts/oneClosed'}/>
    }

    if (carts.length === 0) {
        return (
            <EmptyList/>
        )
    } else {
        return (
            <div className='table-page'>
                <div className='overflow-mobile'>
                    <Table bordered hover>
                        <thead>
                        <TableHeadItem/>
                        </thead>
                        <tbody>
                        {carts.map((cart, i) =>
                            <tr key={cart.id} id={cart.id} onClick={handleCartClick}>
                                <td>{i + 1}</td>
                                <td>{cart.deliveryAddressDTO == null ? '----------' : cart.deliveryAddressDTO.street}</td>
                                <td> {cart.totalGrossValue} PLN</td>
                                <td>{cart.purchaseTime == null ? '----------' :
                                    cart.purchaseTime.toString().replace('T', " ")}</td>
                                <td>
                                    <button className='btn btn-block btn-secondary'>SZCZEGÓŁY</button>
                                    {/*todo tutaj zacząć*/}
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export {AllCarts}