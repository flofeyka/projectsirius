import React from 'react';
import styles from '.././input.module.css'

function ActionInput(props){
    let ActionRef = React.createRef()

    function onChangeAction() {
        const selectElement = document.getElementById('fruits');
        const selectedAction = selectElement.value;
        props.ActionChange(selectedAction.value)
      }

    function onChangerAction() {
        props.ActionChange(ActionRef.current.value)
    }

    return <a className={styles.Blockly}>
    <textarea className={styles.inTextArea} onChange={onChangerAction} value={props.Action} ref={ActionRef}/>
    </a>
}

export default ActionInput;