import React from 'react';
import styles from './input.module.css'

function CycleInput(props){
    let CycleRef = React.createRef()
    function onChangerCycle() {
        props.CycleChange(CycleRef.current.value)
    }
    return <textarea className={styles.inTextArea} onChange={onChangerCycle} value={props.Cycle} ref={CycleRef}/>
}

export default CycleInput;