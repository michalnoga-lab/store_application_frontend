import React, {useState, useEffect, useRef, useCallback} from "react";
import {useHistory} from "react-router";
import {Table} from "react-bootstrap";
import * as URLs from '../../URLs';

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
        <td className='col-2'>Akcja</td>
    </tr>

const AllCarts = () => {

    const [carts, setCarts] = useState([])
    const [change, setChange] = useState(true)
    let history = useHistory();

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

        sessionStorage.setItem('cartId', target.parentElement.parentElement.getAttribute('id'));
        history.push('/user/carts/oneClosed')
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
                            <tr key={cart.id} id={cart.id}>
                                <td>{i + 1}</td>
                                <td>{cart.deliveryAddressDTO == null ? '----------' : cart.deliveryAddressDTO.street}</td>
                                <td> {cart.totalGrossValue} PLN</td>
                                <td>{cart.purchaseTime == null ? '----------' :
                                    cart.purchaseTime.toString().replace('T', " ")}</td>
                                <td>
                                    <p className='fa fa-check fa-2x icon-grey' onClick={handleCartClick}/>
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