import React, {useState, useEffect, useRef} from "react";
import Table from "react-bootstrap/Table";
import * as URLs from '../../URLs'

const EmptyList = () => (
    <div className='main-page'>
        <section className="container">
            <h5 className="top-page-text">MOJE ADRESY</h5>
            <div className="top-page-text-details">
                <p className="top-page-text-details-at">@ status</p>
                <p className="top-page-text-details-text">nie masz jeszcze zapisanych żadnych adresów</p>
            </div>
        </section>
    </div>
)

const AddressItem = props =>
    <tr>
        <td>{props.rowNumber}</td>
        <td>{props.address.street}</td>
        <td>{props.address.phone}</td>
    </tr>

const DeliveryAddress = () => {

    const [deliveryAddresses, setDeliveryAddresses] = useState([])
    const [change, setChange] = useState(true)

    useEffect(() => {
        async function getData() {
            await getAddresses()
        }

        getData().catch(err => console.log(err))
        setChange(false)
    }, [change])

    const getAddresses = async () => {
        const url = URLs.backend + 'api/deliveryAddress/all';
        const headers = new Headers();
        headers.set('Content-Type', 'application/json;charset=UTF-8');
        headers.set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));

        const response = fetch(url, {
            method: 'GET',
            headers: headers
        })

        const body = await (await response).json()
        setDeliveryAddresses(await body)
    }

    if (Object.entries(deliveryAddresses).length === 0) {
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
                        <td>Adres</td>
                        <td>Telefon</td>
                    </tr>
                    </thead>
                    <tbody>
                    {deliveryAddresses.map((deliveryAddress, i) => <AddressItem key={deliveryAddress.id}
                                                                                address={deliveryAddress}
                                                                                rowNumber={i + 1}/>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export {DeliveryAddress}