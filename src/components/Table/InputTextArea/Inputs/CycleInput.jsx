import React from 'react';
import styles from '.././input.module.css'

function CycleInput(props){
    let CycleRef = React.createRef()
    function onChangerCycle() {
        props.CycleChange(CycleRef.current.value)
    }
    return <a className={styles.Blockly}>
     <textarea className={styles.inTextArea} onChange={onChangerCycle} value={props.Cycle} ref={CycleRef}/>
     </a>
}

export default CycleInput;