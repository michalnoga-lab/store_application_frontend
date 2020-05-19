import React, {Component} from "react";

class UserToken extends Component {

    constructor(props) {
        super(props);

        this.state = {
            token: ''
        }
    }

    updateToken = e => {
        this.setState({token: e.target.value})
    };

    getToken = e => {
        return this.state.token
    }
}

export default UserToken