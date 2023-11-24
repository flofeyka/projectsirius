import React from 'react'
import styles from './table.module.css'

function Table(props) {
    return <div className={styles.tables}>
    <table>
  <tbody>
    <tr>
    <tbody>
      {props.actions.map(d=> {
        return( <tr>
        <td>{d.id+1}</td>
        <td>{d.Doing}</td>
          
        <td>{d.Time}</td>
        <td>{d.Color}</td>
        </tr> 
        )
      })}
      </tbody>
</tr>
  </tbody>
</table>
<button className={styles.activate} onClick={props.AddAction}>Активировать</button>
</div>
}

export default Table;