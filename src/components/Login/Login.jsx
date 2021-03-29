import React from 'react';
import s from './Login.module.css';
import { connect } from 'react-redux';
import { login, logout } from '../../redux/authReducer';
import LoginForm from './components/loginForm/loginForm';
import LogoutForm from './components/logoutForm/logoutForm';
import { Redirect } from 'react-router';

const Login = (props) => {

    let onSubmit = (formObj) => {
        console.log(formObj);
        props.login(formObj.email, formObj.password, formObj.isRemember || false);
    }

    return props.isLogged ?
        (<div>
            <Redirect to={"/profile"} />
        </div>)
        :
        (<div>
            <LoginForm onSubmit = {onSubmit} />
        </div>)
        ;
}

const mapStateToProps = (state) => ({
    isLogged: state.auth.isLogged
})

export default connect(mapStateToProps, { login, logout })(Login);