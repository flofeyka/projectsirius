import React from 'react';
import styles from ".././input.module.css"

function LineInput(props) {
    let refs = React.createRef()

    function Changes(){
        props.LineChange(refs.current.value)
    }

    return <a className={styles.blockly}>
        <textarea className={styles.inTextArea} ref={refs} value={props.Line} onChange={Changes}/>
    </a>
}

export default LineInput