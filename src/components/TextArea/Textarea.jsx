import React, {createRef} from 'react'
import styles from './textarea.module.css'
import CycleInput from './InputTextArea/Inputs/CycleInput'
import TimerInput from './InputTextArea/Inputs/TimerInput'
import ActionInput from './InputTextArea/Inputs/ActionInput'
import InputTextArea from './InputTextArea/InputTextArea'

function TextArea(props) {
    return <>
        <div className={styles.TextArea}>
        <InputTextArea Action={props.Action} ActionChange={props.ActionChange}
        Timer={props.Timer} TimerChange={props.TimerChange} 
        Cycle={props.Cycle} CycleChange={props.CycleChange}
        Line={props.Line} LineChange={props.LineChange}/>
        <div>
            <button className={styles.activate}>
                Выполнить
            </button>
        </div>
        </div>
    </>
}

export default TextArea;
