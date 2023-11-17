import React from 'react';
import styles from "./Header.module.css"
import sirius from "../../assets/sirius.png"
function Header(props) {
    return <header className={styles.header}>
        <img src={sirius}/>
        </header>
}

export default Header;