import React, {useState, useEffect, useRef} from "react";
import * as URLs from '../../URLs'
import Table from "react-bootstrap/Table";

const AddProduct = () => {

    let [product, setProduct] = useState({})
    let [quantity, setQuantity] = useState(1)
    let [isQuantityCorrect, setIsQuantityCorrect] = useState(false)
    let [quantityErrorMessage, setQuantityErrorMessage] = useState('Dozwolone są tylko cyfry')
    let [isProductAdded, setIsProductAdded] = useState(false)
    let [productAddedMessage, setProductAddedMessage] = useState('Produkt został dodany do koszyka')
    let [change, setChange] = useState(true)

    useEffect(() => {
        async function getData() {
            await getOneProduct()
        }

        if (Object.keys(quantity).length === 0) {
            setIsQuantityCorrect(true)
        }

        getData().catch(err => console.log(err))
        setChange(false)
    }, [change])

    const getOneProduct = async () => {
        const url = URLs.backend + 'api/products/one';
        const headers = new Headers();
        headers.set('Content-Type', 'application/json;charset=UTF-8');
        headers.set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));

        const response = fetch(url, {
            method: 'POST',
            headers: headers,
            //body: JSON.stringify({id: sessionStorage.getItem('productId')}) // todo czy to dobra praktyka ???
            body: JSON.stringify({id: 3}) // todo zmienić ze stałego ustawienia
        })

        const body = await (await response).json()
        setProduct(await body)
    }

    const handleChange = event => {
        let target = event.target
        let value = target.value
        const regex = /^[0-9]{0,10}$/g;

        regex.test(value) ? setIsQuantityCorrect(true) : setIsQuantityCorrect(false)
        setQuantity(value)
    }

    const handleSubmit = async event => {

        const url = URLs.backend + 'api/products/buy'
        const headers = new Headers();
        headers.set('Content-Type', 'application/json;charset=UTF-8');
        headers.set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));

        fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({id: product.id, quantity: quantity})
        })
            .then(() => clearFields())
            .then(() => setIsProductAdded(true))
            .catch(err => console.log(err))

        event.preventDefault()
    }

    const clearFields = () => {
        setQuantity(1)
        setIsProductAdded(true)
    }

    return (<div className="table-page">
            <div className='overflow-mobile'>

                <Table bordered hover>
                    <thead>
                    <tr>
                        <td>Nazwa</td>
                        <td>Cena</td>
                        <td>Opis</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{product.name}</td>
                        <td>{product.nettPrice}</td>
                        <td>{product.description}</td>
                    </tr>
                    </tbody>
                </Table>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input
                            className='btn-block form-control'
                            type='text'
                            placeholder='PODAJ ILOŚĆ'
                            defaultValue={1}
                            name='quantity'
                            value={quantity}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='alert alert-danger' hidden={isQuantityCorrect}>
                        {quantityErrorMessage}
                    </div>
                    <div className='alert alert-success' hidden={!isProductAdded}>
                        {productAddedMessage}
                    </div>
                    <div>
                        <button type='submit' className='btn btn-block btn-outline-dark'>DODAJ DO KOSZYKA</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export {AddProduct}