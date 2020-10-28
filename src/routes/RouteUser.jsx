import React, {Component} from "react";
import {Redirect, Route} from "react-router-dom";

const RouteUser = ({component: Component, ...rest}) => {

    return (
        <Route
            {...rest}
            render={props => (
                sessionStorage.getItem('role') === 'USER'
                    ? <Component {...props} />
                    : <Redirect to={
                        {
                            pathname: '/login',
                            state: {from: props.location}
                        }
                    }/>
            )}
        />
    )
}

export {RouteUser}