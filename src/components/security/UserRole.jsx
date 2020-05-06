import React, {Component} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class UserRole extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userRole: 'unauthorized',
            navLinks: [
                {text: 'START', path: '/', icon: 'ion-ios-home'},
                {text: 'KONTAKT', path: '/contact', icon: <FontAwesomeIcon icon="coffee" />}
            ]
        }
    }

    updateRole = e => {
        this.setState({userRole: e.target.value})
    };

    updateNavLinks = e => {
        this.setState({navLinks: e.target.value})
    };

    getRole = () => {
        return this.state.userRole
    };

    getNavLinks = () => {
        return this.state.navLinks
    };
}

export default UserRole