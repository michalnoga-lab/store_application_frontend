import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import * as URLs from '../../URLs'

const AddDeliveryAddress = () => { // TODO dodać metody focus do formularzy

    const [street, setStreet] = useState('')
    const [phone, setPhone] = useState('')
    const [isStreetCorrect, setIsStreetCorrect] = useState(false)
    const [streetErrorMessage, setStreetErrorMessage] = useState('Dozwolone są tylko litery i cyfry')
    const [isPhoneCorrect, setIsPhoneCorrect] = useState(false)
    const [phoneErrorMessage, setPhoneErrorMessage] = useState('Dozwolone są tylko litery i cyfry')
    const [isAddressAdded, setIsAddressAdded] = useState(false)
    const [addressAddedMessage, setAddressAddedMessage] = useState('Poprawnie dodano nowy adres')
    const [isAddButtonVisible, setIsAddButtonVisible] = useState(false)
    let history = useHistory()

    useEffect(() => {
        if (Object.keys(street).length === 0) {
            setIsStreetCorrect(true)
            setIsAddButtonVisible(false)
        }
        if (Object.keys(phone).length === 0) {
            setIsPhoneCorrect(true)
            setIsAddButtonVisible(false)
        }
    })

    const handleStreetChange = event => {
        let target = event.target
        let value = target.value

        const regex = /^[a-z0-9\s]{0,100}$/g;

        regex.test(value) ? setIsStreetCorrect(true) : setIsStreetCorrect(false)
        checkIsInputCorrect()
        setStreet(value)
    }

    const handlePhoneChange = event => {
        let target = event.target
        let value = target.value
        const regex = /^[a-z0-9\s]{0,100}$/g;

        regex.test(value) ? setIsPhoneCorrect(true) : setIsPhoneCorrect(false)
        checkIsInputCorrect()
        setPhone(value)
    }

    const clearFields = () => {
        setStreet('')
        setPhone('')
        setIsStreetCorrect(false)
        setIsPhoneCorrect(false)
    }

    const checkIsInputCorrect = () => {
        if (isStreetCorrect && isPhoneCorrect && Object.keys(street).length > 0 && Object.keys(phone).length > 0) {
            setIsAddButtonVisible(true)
        } else {
            setIsAddButtonVisible(false)
        }
    }

    const handleSubmit = event => {
        if (isStreetCorrect && isPhoneCorrect) {

            const url = URLs.backend + 'api/deliveryAddress/add';
            const headers = new Headers();
            headers.set('Content-Type', 'application/json;charset=UTF-8');
            headers.set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));

            fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({street: street, phone: phone})
            })
                .then(clearFields)
            setIsAddressAdded(true)
            setTimeout(() => history.push("/deliveryAddress/all"), 500)
        }
        event.preventDefault();
    }

    return (
        <div className='input-page'>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input
                        className='btn-block form-control'
                        type='text'
                        placeholder='ULICA'
                        name='street'
                        value={street}
                        onChange={handleStreetChange}
                    />
                </div>
                <div className='alert alert-danger' hidden={isStreetCorrect}>
                    {streetErrorMessage}
                </div>
                <div className='form-group'>
                    <input
                        className='btn-block form-control'
                        type='text'
                        placeholder='TELEFON'
                        name='phone'
                        value={phone}
                        onChange={handlePhoneChange}
                    />
                </div>
                <div className='alert alert-danger' hidden={isPhoneCorrect}>
                    {phoneErrorMessage}
                </div>
                <div className='alert alert-success' hidden={!isAddressAdded}>
                    {addressAddedMessage}
                </div>
                <div hidden={!isAddButtonVisible}>
                    <button type='submit' className='btn btn-block btn-outline-dark'>DODAJ</button>
                </div>
            </form>
        </div>
    )
}

export {AddDeliveryAddress}