import React, {createRef} from 'react'
import styles from './textarea.module.css'

function TextArea(props) {
    let ChangeTextRef = React.createRef()

    function onChanger() {
        props.ChangeText(ChangeTextRef.current.value)
    }

    return <>
        <div className={styles.TextArea}>
        <div>
            <textarea className={styles.inTextArea} onChange={onChanger} value={props.text} ref={ChangeTextRef}/>
        </div>
        <div>
            <textarea className={styles.inTextArea} onChange={onChanger} value={props.text} ref={ChangeTextRef}/>
        </div>
        <div>
            <textarea className={styles.inTextArea} onChange={onChanger} value={props.text} ref={ChangeTextRef}/>
        </div>
        <div>
            <textarea className={styles.inTextArea} onChange={onChanger} value={props.text} ref={ChangeTextRef}/>
        </div>
        </div>
    </>
}

export default TextArea;
