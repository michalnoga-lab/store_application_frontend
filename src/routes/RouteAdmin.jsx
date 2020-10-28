import React, {Component} from "react";
import {Redirect, Route} from "react-router-dom";

const RouteAdmin = ({component: Component, ...rest}) => {

    return (
        <Route
            {...rest}
            render={props => (
                sessionStorage.getItem('role') === 'ADMIN'
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

export {RouteAdmin}