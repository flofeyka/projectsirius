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
            <a className={styles.Nav}>
        <NavLink to="/">
          <button className={styles.Button}>Табличный режим</button>
        </NavLink>
        <NavLink to="/dragonwidget">
          <button className={styles.Button}>Dragon Widget</button>
        </NavLink>
        <NavLink to="/node">
          <button className={styles.Button}>Режим нод</button>
        </NavLink>
        <NavLink to="/login">
                <button className={styles.logger}>Войти</button>
            </NavLink>
        </a>

        </a>
        </header>
}

export default Header;