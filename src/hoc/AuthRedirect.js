import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        debugger
        reder() {
            return this.props.isAuth ? 
                 <Component {...this.props}/> : <Redirect to='/login' />
        }
    }

    return RedirectComponent; 
}