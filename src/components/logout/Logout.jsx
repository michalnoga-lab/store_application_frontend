import React, {Component} from "react";
import * as URLs from "../URLs"

class Logout extends Component {

    constructor(props) {
        super(props);
    }

    // logout = async () => {
    //     const url = URLs.backend + 'logout';
    //     const headers = new Headers();
    //     headers.set('Content-Type', 'application/json;charset=UTF-8');
    //
    //     await fetch(url, {
    //         method: 'POST',
    //         headers: headers
    //     })
    //     await sessionStorage.clear();
    //
    //     await console.log('hahahaha' + sessionStorage.getItem('role')); //todo
    // }

    componentDidMount() {
        const url = URLs.backend + 'logout';
        const headers = new Headers();
        headers.set('Content-Type', 'application/json;charset=UTF-8');

        fetch(url, {
            method: 'POST',
            headers: headers
        }).then(action => sessionStorage.clear());

        //App.forceUpdate();
    }

    render() {
        return (
            <div className='main-page'>
                <section className="container">
                    <h5 className="top-page-text">OPCJE</h5>
                    <div className="top-page-text-details">
                        <p className="top-page-text-details-at">@ wyloguj</p>
                        <p className="top-page-text-details-text">zostałeś poprawnie wylogowany z serwisu</p>
                    </div>
                </section>
            </div>
        );
    }
}

export {Logout}