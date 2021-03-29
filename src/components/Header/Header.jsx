import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom"

const Header = (props) => {
    return (
        <header className={s.header}>
            <img className={s.header__logo} src="https://icon-library.com/images/icon-png-logos/icon-png-logos-7.jpg" />
            <h1>Social-Adistance</h1>
            <div className={s.login_block}>
                {props.isLogged ? "Welcome back, " + props.login : <NavLink to={"/login"}>Please log in or sign up before using</NavLink>}
            </div>
        </header>
    );
}

export default Header;