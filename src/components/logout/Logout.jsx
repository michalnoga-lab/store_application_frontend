import React, {Component, useEffect, useState, useRef} from "react";
import {useHistory} from "react-router-dom";
import * as URLs from "../URLs"


const Logout = () => {

    let [change, setChange] = useState(true)
    let history = useHistory()

    useEffect(() => {
        async function getData() {
            await logout()
        }

        getData().catch(err => console.log(err))
        setChange(false)
    }, [change])

    const logout = async () => {
        const url = URLs.backend + 'logout';
        const headers = new Headers();
        headers.set('Content-Type', 'application/json;charset=UTF-8');

        fetch(url, {
            method: 'POST',
            headers: headers
        })
            .then(() => sessionStorage.clear())
            .then(() => history.push("/login"));
    }

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

export {Logout}


// import React, {Component} from "react";
// import * as URLs from "../URLs"
// import Context from "../context/context";
//
// class Logout extends Component {
//
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             redirect: false
//         }
//     }
//
//     componentDidMount() {
//         const url = URLs.backend + 'logout';
//         const headers = new Headers();
//         headers.set('Content-Type', 'application/json;charset=UTF-8');
//
//         fetch(url, {
//             method: 'POST',
//             headers: headers
//         })
//             .then(() => sessionStorage.clear())
//             .then(() => this.props.history.push("/login"));
//     }
//
//     render() {
//         return (
//             <div className='main-page'>
//                 <section className="container">
//                     <h5 className="top-page-text">OPCJE</h5>
//                     <div className="top-page-text-details">
//                         <p className="top-page-text-details-at">@ wyloguj</p>
//                         <p className="top-page-text-details-text">zostałeś poprawnie wylogowany z serwisu</p>
//                     </div>
//                 </section>
//             </div>
//         );
//     }
// }
//
// export {Logout}