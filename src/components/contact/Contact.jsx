import React, {Component} from 'react'

class Contact extends Component {

    render() {
        return (
            <div className='main-page'>
                <section className="container">
                    <h5 className="top-page-text">KONTAKT</h5>
                    <div className="top-page-text-details">
                        <p className="top-page-text-details-at">@ nazwa firmy</p>
                        <p className="top-page-text-details-text">Firma Handlowa PRIMA</p>
                    </div>
                    <div className="top-page-text-details">
                        <p className="top-page-text-details-at">@ adres</p>
                        <p className="top-page-text-details-text">30-740 Kraków<br/>Półłanki 31G</p>
                    </div>
                    <div className="top-page-text-details">
                        <p className="top-page-text-details-at">@ kontakt</p>
                        <p className="top-page-text-details-text">(12) 411 25 09, (12) 411 67 54,
                            biuro@primakrakow.pl</p>
                    </div>
                </section>
            </div>
        )
    }
}

export {Contact}