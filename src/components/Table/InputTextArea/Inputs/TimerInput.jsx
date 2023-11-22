import React from 'react';
import styles from '../input.module.css'

function TimerInput(props){
    let TimerRef = React.createRef()

    function onChangerTimer() {
        props.TimerChange(TimerRef.current.value)
    }

    return <a className={styles.Blockly}> 
    <textarea className={styles.inTextArea} onChange={onChangerTimer} value={props.Timer} ref={TimerRef}/>
    </a>
}

export default TimerInput;