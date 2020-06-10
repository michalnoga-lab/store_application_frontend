import React, {Component} from "react";
import * as URLs from "../../URLs"

class Logout extends Component {

    constructor(props) {
        super(props);
    }

    logout = async () => {
        const url = URLs.backend + 'logout';
        const headers = new Headers();
        headers.set('Content-Type', 'application/json;charset=UTF-8');

        await fetch(url, {
            method: 'POST',
            headers: headers
        })
        await sessionStorage.clear();
    }

    render() {
        return (
            <div>
                {this.logout()}
            </div>
        );
    }
}

export {Logout}