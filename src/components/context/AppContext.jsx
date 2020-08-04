import React, {Component} from 'react'
import Context from './context'

class AppContext extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userLogged: false,
            userRole: ""
        }
    }

    componentDidMount() {
        const token = sessionStorage.getItem('token')
        console.log(token) // todo
        if (!token) return

        const role = sessionStorage.getItem('role')
        this.setState({
            userLogged: true,
            userRole: role
        })

    }

    render() {
        const store = {
            userLogged: this.state.userLogged,
            setUserUnLogged: () => {
                this.setState({
                    userLogged: false
                })
            },
            setUserLogged: () => {
                this.setState({
                    userLogged: true
                })
            },
            userRole: this.state.userRole,
            setUserRole: role => {
                this.setState(({
                    userRole: role
                }))
            }
        }

        return (
            <Context.Provider value={store}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default AppContext