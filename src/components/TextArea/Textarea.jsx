import React, {createRef} from 'react'
import styles from './textarea.module.css'
import CycleInput from './InputTextArea/CycleInput'
import TimerInput from './InputTextArea/TimerInput'
import ActionInput from './InputTextArea/ActionInput'

function TextArea(props) {
    return <>
        <div className={styles.TextArea}>
        <div>
            Действие: <ActionInput Action={props.Action} ActionChange={props.ActionChange}/>
        </div>
        <div>
            Время: <TimerInput Timer={props.Timer} TimerChange={props.TimerChange}/>
        </div>
        <div>
            Выполнить количество раз: <CycleInput Cycle={props.Cycle} CycleChange={props.CycleChange}/>
        </div>
        <div>
            <button className={styles.activate}>
                Выполнить
            </button>
        </div>
        </div>
    </>
}

export default TextArea;
