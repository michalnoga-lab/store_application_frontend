import React, {useState} from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import ReactDOM from 'react-dom'

const AdminPanel = () => {

    return (<div className='main-page col-10 ml-6 mr-6'>
            <div className='col-12 btn-group mt-4'>
                <Link to='#' className='btn btn-outline-secondary btn-lg m-5 col-3' type='button'>PRODUKTY</Link>
                <Link to='/admin/products/all' className='btn btn-outline-info btn-lg m-5 col-3'>POKAŻ</Link>
                <Link to='/admin/products/add' className='btn btn-outline-success btn-lg m-5 col-3'
                      type='button'>DODAJ</Link>
                <Link to='/admin/products/del' className='btn btn-outline-danger btn-lg m-5 col-3'
                      type='button'>USUŃ</Link>
            </div>
            <div className='col-12 btn-group mt-0'>
                <Link to='#' className='btn btn-outline-secondary btn-lg m-5 col-3'>FIRMY</Link>
                <Link to='/admin/products/all' className='btn btn-outline-info btn-lg m-5 col-3'
                      type='button'>POKAŻ</Link>
                <Link to='/admin/products/add' className='btn btn-outline-success btn-lg m-5 col-3'
                      type='button'>DODAJ</Link>
                <Link to='/admin/products/del' className='btn btn-outline-danger btn-lg m-5 col-3'
                      type='button'>USUŃ</Link>
            </div>
        </div>
    )
}

export {AdminPanel}