import React, {Component} from 'react';
import {Router} from '@reach/router'

import './App.css';
import {NavBarItems} from "./components/main/navigation/NavBar";


class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="App">
                <NavBarItems/>
            </div>
        );
    }
}

export default App;