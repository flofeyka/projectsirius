import React from 'react'
import ActionInput from './Inputs/ActionInput'
import CycleInput from './Inputs/CycleInput'
import TimerInput from './Inputs/TimerInput'
import LineInput from './Inputs/LineInput'

function InputTextArea(props){
    return <div>
        <div>
        Действие: <ActionInput Action={props.Action} ActionChange={props.ActionChange}/>
        </div>
        <div>
        Время: <CycleInput Cycle={props.Cycle} CycleChange={props.CycleChange}/>
        </div>
        <div>
        Выполнить количество раз: <TimerInput Timer={props.Timer} TimerChange={props.TimerChange}/>
        </div>
        <div>
        Линия взаимодействия: <LineInput Line={props.Line} LineChange={props.LineChange}/>
        </div>
    </div>
}

export default InputTextArea;