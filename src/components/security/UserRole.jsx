import React, {Component} from 'react'

class UserRole extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userRole: 'unauthorized',
            navLinks: [
                {text: 'START', path: '/', icon: 'ion-ios-home'}

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