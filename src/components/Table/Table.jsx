import React from 'react'
import styles from './table.module.css'
import InputTextArea from './InputTextArea/InputTextArea';

function Table(props) {
    return <div className={styles.tables}>
    <InputTextArea Action={props.Action} ActionChange={props.ActionChange} Cycle={props.Cycle} CycleChange={props.CycleChange}
    Timer={props.Timer} TimerChange={props.TimerChange} Line={props.Line} LineChange={props.LineChange}/>
    <button className={styles.activate} onClick={props.AddAction}>Добавить</button>
    <table>
  <tbody>
    <tr>
      {props.actions.map(d=> {
        return( <tr><td>{d.Doing}</td>
        <td>{d.Time}</td>
        <td>{d.Cycle}</td>
        <td>{d.Line}</td></tr> 
        )
      })}
</tr>
  </tbody>
</table>
    </div>
}

export default Table;