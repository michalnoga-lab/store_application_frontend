import React, {useEffect, useState} from "react";
import * as URLs from '../../URLs';

const AdminProductAdd = () => {

    let [name, setName] = useState('')
    let [isNameCorrect, setIsNameCorrect] = useState(false)
    let [nameErrorMessage] = useState('Nazwa produktu jest nieprawidłowa')

    let [numberInAuction, setNumberInAuction] = useState('')
    let [isNumberInAuctionCorrect, setIsNumberInAuctionCorrect] = useState(false)
    let [numberInAuctionErrorMessage, setNumberInAuctionErrorMessage] = useState('Numer pozycji nie jest prawidłowy')

    let [auctionIndex, setAuctionIndex] = useState('')
    let [isAuctionIndexCorrect, setIsAuctionIndexCorrect] = useState(false)
    let [auctionIndexErrorMessage, setAuctionIndexErrorMessage] = useState('Indeks aukcji nie jest prawidłowy')

    let [description, setDescription] = useState('')
    let [isDescriptionCorrect, setIsDescriptionCorrect] = useState(false)
    let [descriptionErrorMessage, setDescriptionErrorMessage] = useState('Opis nie jest prawidłowy')

    let [nettPrice, setNettPrice] = useState('')
    let [isNettPriceCorrect, setIsNettPriceCorrect] = useState(false)
    let [nettPriceErrorMessage, setNettPriceErrorMessage] = useState('Cena netto nie jest prawidłowa')

    let [vat, setVat] = useState('')
    let [isVatCorrect, setIsVatCorrect] = useState(false)
    let [vatErrorMessage, setVatErrorMessage] = useState('VAT nie jest prawidłowy')

    let [productCodes, setProductCodes] = useState([])
    let [currentProductCode, setCurrentProductCode] = useState({})

    let [companies, setCompanies] = useState({})

    let [isAddButtonVisible, setIsAddButtonVisible] = useState(false)
    let [change, setChange] = useState(true)
    const textInputRegex = new RegExp('^[a-zA-Z0-9\\s]{0,100}$')
    const numberInputRegex = new RegExp('^[0-9]{0,10}$')

    useEffect(() => {
        async function getData() {
            await getAllProductCodes()
        }

        getData().catch(err => console.log(err))
        setChange(false)
    }, [change])

    const addProduct = async () => {
        const url = URLs.backend + 'api/admin/products/addOne'
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

    const getAllProductCodes = async () => {
        const url = URLs.backend + 'api/admin/productCodes/all'
        const header = new Headers()
        header.set('Content-Type', 'application/json;charset=UTF-8')
        header.set('Authorization', 'Bearer ' + sessionStorage.getItem('token'))

        fetch(url, {
            method: 'GET',
            headers: header
        })
            .then(response => response.json())
            .then(body => setProductCodes(body))
            .catch(err => console.log(err))
    }

    const handleNameChange = event => {
        let target = event.target
        let value = target.value
        setName(value)

        textInputRegex.test(name) ? setIsNameCorrect(true) : setIsNameCorrect(false)
        checkIsInputCorrect()
    }

    const handleNumberInAuctionChange = event => {
        let target = event.target
        setNumberInAuction(target.value)

        textInputRegex.test(numberInAuction) ? setIsNumberInAuctionCorrect(true) : setIsNumberInAuctionCorrect(false)
        checkIsInputCorrect()
    }

    const handleAuctionIndexChange = event => {
        let target = event.target
        setAuctionIndex(target.value)

        textInputRegex.test(auctionIndex) ? setIsAuctionIndexCorrect(true) : setIsAuctionIndexCorrect(false)
        checkIsInputCorrect()
    }

    const handleDescriptionChange = event => {
        let target = event.target
        setDescription(target.value)

        textInputRegex.test(description) ? setIsDescriptionCorrect(true) : setIsDescriptionCorrect(false)
        checkIsInputCorrect()
    }

    const handleNettPriceChange = event => {
        let target = event.target
        setNettPrice(target.value)

        numberInputRegex.test(nettPrice) ? setIsNettPriceCorrect(true) : setIsNettPriceCorrect(false)
        checkIsInputCorrect()
    }

    const handleVatChange = event => {
        let target = event.target
        setVat(target.value)

        numberInputRegex.test(vat) ? setIsVatCorrect(true) : setIsVatCorrect(false)
        checkIsInputCorrect()
    }

    const handleProductCodeChange = event => {
        let target = event.target
        let value = target.value
        let selectedId = +target.selectedOptions[0].id

        console.log(selectedId)

        const selectedProduct = productCodes.filter(code=>code.id===selectedId)
        console.log('--------------------------------------------------------------------');
        console.log(selectedProduct[0])
        console.log('--------------------------------------------------------------------');


        // productCodes.filter(function (code, number, array) {
        //     if (array[number].id == selectedId) {
        //
        //         console.log('-------- f ---------')
        //         console.log(code)
        //        setCurrentProductCode(code)
        //     }

        // console.log('types')
        // console.log(typeof array[number].id)
        // console.log(typeof selectedId)


        //  console.log('-----------')
        //  console.log('---------------')
        //     console.log(target.selectedOptions[0].id)
        //  console.log(value)
        // //console.log(code.id)
        //  //console.log(number)
        //   console.log(array[number].id)


        // })
//        setCurrentProductCode(productCode[0])

        console.log(value)


    }

    const checkIsInputCorrect = () => {
        isNameCorrect && isNumberInAuctionCorrect && isAuctionIndexCorrect && isDescriptionCorrect && isNettPriceCorrect &&
        isVatCorrect
            ? setIsAddButtonVisible(true) : setIsAddButtonVisible(false)
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
                    <div className='alert alert-danger' hidden={isNameCorrect}>{nameErrorMessage}</div>
                    <input
                        className='btn-block form-control'
                        type='text'
                        placeholder='NUMER POZYCJI'
                        name='numberInAuction'
                        value={numberInAuction}
                        onChange={handleNumberInAuctionChange}
                    />
                </div>
                <div className='alert alert-danger'
                     hidden={isNumberInAuctionCorrect}>{numberInAuctionErrorMessage}</div>
                <input
                    className='btn-block form-control'
                    type='text'
                    placeholder='INDEKS W PRZETARGU'
                    name='auctionIndex'
                    value={auctionIndex}
                    onChange={handleAuctionIndexChange}
                />
                <div className='alert alert-danger' hidden={isAuctionIndexCorrect}>{auctionIndexErrorMessage}</div>
                <input
                    className='btn-block form-control'
                    type='text'
                    placeholder='OPIS'
                    name='description'
                    value={description}
                    onChange={handleDescriptionChange}
                />
                <div className='alert alert-danger' hidden={isDescriptionCorrect}>{descriptionErrorMessage}</div>
                <input
                    className='btn-block form-control'
                    type='number'
                    placeholder='CENA NETTO'
                    value={nettPrice}
                    onChange={handleNettPriceChange}
                />
                <div className='alert alert-danger' hidden={isNettPriceCorrect}>{nettPriceErrorMessage}</div>
                <input
                    className='btn-block form-control'
                    type='number'
                    placeholder='VAT'
                    value={vat}
                    onChange={handleVatChange}
                />
                <div className='alert alert-danger' hidden={isVatCorrect}>{vatErrorMessage}</div>
                <input
                    className='btn-block form-control'
                    type='number'
                    placeholder='BRUTTO'
                    readOnly={true}
                    value={nettPrice * (1 + vat) / 100}
                />
                <select className='btn-block' name='productCode' onChange={handleProductCodeChange}>
                    {productCodes.map(code =>
                        <option key={code.id} id={code.id}>{code.codeFromOptima}</option>
                    )}
                </select>
                {/*
                product code
                company
                */}
                <div hidden={!isAddButtonVisible}>
                    <button type='submit' className='btn btn-block btn-outline-dark'>DODAJ</button>
                </div>
            </form>
        </div>
    )
}

export {AdminProductAdd}