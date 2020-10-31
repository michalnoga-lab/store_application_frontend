import React, {useEffect, useState} from "react";
import * as URLs from '../../URLs';

const AdminProductAdd = () => {

    let [name, setName] = useState('')
    let [isNameCorrect, setIsNameCorrect] = useState(false)
    let [nameErrorMessage] = useState('Nazwa produktu jest nieprawidłowa')
    let [numberInAuction, setNumberInAuction] = useState('')
    let [isNumberInAuctionCorrect, setIsNumberInAuctionCorrect] = useState(false)
    let [numberInAuctionErrorMessage, setNumberInAuctionErrorMessage] = useState('Numer pozycji nie jest prawidłowy')
    let [isAddButtonVisible, setIsAddButtonVisible] = useState(false)
    let [change, setChange] = useState(true)
    const inputRegex = new RegExp('^[a-zA-Z0-9\\s]{0,100}$')

    const addProduct = async () => {
        const url = URLs.backend + 'api/admin/products/addOne';
        const headers = new Headers();
        headers.set('Content-Type', 'application/json;charset=UTF-8')
        headers.set('Authorization', sessionStorage.getItem('token'))

        fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({name: name, numberInAuction: numberInAuction})
        })
            .catch(err => console.log(err))
    }

    const handleNameChange = event => {
        let target = event.target
        let value = target.value
        setName(value)

        inputRegex.test(name) ? setIsNameCorrect(true) : setIsNameCorrect(false)
        checkIsInputCorrect()
    }

    const handleNumberInAuctionChange = event => {
        let target = event.target
        setNumberInAuction(target.value)

        inputRegex.test(numberInAuction) ? setIsNumberInAuctionCorrect(true) : setIsNumberInAuctionCorrect(false)
        checkIsInputCorrect()
    }

    const checkIsInputCorrect = () => {
        setIsAddButtonVisible(isNameCorrect && isNumberInAuctionCorrect)
    }

    return (
        <div className="input-page">
            <form onSubmit={addProduct}>
                <div className='form-group'>
                    <input
                        className='btn-block form-control'
                        type='text'
                        placeholder='NAZWA PRODUKTU'
                        name='name'
                        value={name}
                        onChange={handleNameChange}
                    />
                    <div className='alert alert-danger' hidden={isNameCorrect}>
                        {nameErrorMessage}
                    </div>
                    <input
                        className='btn-block form-control'
                        type='text'
                        placeholder='NUMER POZYCJI'
                        name='numberInAuction'
                        value={numberInAuction}
                        onChange={handleNumberInAuctionChange}
                    />
                </div>
                <div className='alert alert-danger' hidden={isNumberInAuctionCorrect}>
                    {numberInAuctionErrorMessage}
                </div>
                <div hidden={!isAddButtonVisible}>
                    <button type='submit' className='btn btn-block btn-outline-dark'>DODAJ</button>
                </div>
            </form>
        </div>
    )
}

export {AdminProductAdd}