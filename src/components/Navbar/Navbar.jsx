import React from 'react';
import styles from "./Navbar.module.css"
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className={styles.Nav}>
        <NavLink to="/textarea">
          <button className={styles.Button}>Текстовый режим</button>
        </NavLink>
        <NavLink to="/table">
          <button className={styles.Button}>Табличный режим</button>
        </NavLink>
        <NavLink to="/dragonwidget">
          <button className={styles.Button}>Dragon Widget</button>
        </NavLink>
        <NavLink to="/node">
          <button className={styles.Button}>Режим нод</button>
        </NavLink>
        </nav>

    )
}

export default Navbar;