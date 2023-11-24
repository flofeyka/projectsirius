import React from 'react';
import styles from "./node.module.css"

function Node(props){
    return <div>
        <iframe className={styles.iFrame} src="http://127.0.0.1:8000"/>
    </div>
}

export default Node;