import React from 'react';
import styles from "./Header.module.css"
import sirius from "../../assets/sirius.png"
import { NavLink } from 'react-router-dom';

function Header(props) {
    return <header className={styles.header}>
        <NavLink to="/">
        <img src={sirius}/>
        </NavLink>
        <a className={styles.loging}>
            <NavLink to="/login">
                <button className={styles.logger}>Войти</button>
            </NavLink>
        </a>
        </header>
}

export default Header;