import React from 'react';
import styles from "./node.module.css"

function Node(props){
    return <div>
        <iframe className={styles.iFrame}/>
    </div>
}

export default Node;