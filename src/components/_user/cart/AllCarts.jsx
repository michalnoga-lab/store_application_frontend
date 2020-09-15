import React, {useState, useEffect, useRef} from "react";
import * as URLs from '../../URLs';
import {Table} from "react-bootstrap";

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
        <td>Lp</td>
        <td>Dostawa do</td>
        <td>Wartość koszyka</td>
        <td>Data zamówienia</td>
    </tr>

const CartItem = props =>
    <tr>
        <td>{props.rowNumer}</td>
        <td>{props.cart.deliveryAddressDTO == null ? '----------' : props.cart.deliveryAddressDTO.street}</td>
        <td> {props.cart.totalGrossValue} PLN</td>
        <td>{props.cart.purchaseTime == null ? '----------' :
            props.cart.purchaseTime.toString().replace('T', " ")}</td>
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
                        {carts.map((cart, i) => <CartItem key={cart.id} cart={cart} rowNumer={i + 1}/>)}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export {AllCarts}