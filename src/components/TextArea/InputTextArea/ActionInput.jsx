import React from 'react';
import styles from './input.module.css'

function ActionInput(props){
    let ActionRef = React.createRef()

    function onChangerAction() {
        props.ActionChange(ActionRef.current.value)
    }

    return <textarea className={styles.inTextArea} onChange={onChangerAction} value={props.Action} ref={ActionRef}/>
}

export default ActionInput;