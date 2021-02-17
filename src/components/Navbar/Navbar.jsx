import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.mainMenu}>
          <ul className={s.mainMenu__list}>
            <li><NavLink activeClassName={s.active} to="/profile/">My page</NavLink></li>
            <li><NavLink activeClassName={s.active} to="/messages">Messages</NavLink></li>
            <li><NavLink activeClassName={s.active} to="/friendlist">Friends</NavLink></li>
            <li><NavLink activeClassName={s.active} to="/users">Users</NavLink></li>
            <li><NavLink activeClassName={s.active} to="/news">News</NavLink></li>
          </ul>
        </nav>
    );
}

export default Navbar;