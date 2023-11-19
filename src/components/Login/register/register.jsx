import React from 'react';
import styles from './register.module.css'

function Register(props){
    let Refs = {
        LoginRef: React.createRef(),
        EmailRef: React.createRef(),
        PasswordRef: React.createRef(),
        RepeatPasswordRef: React.createRef()
    }
    let Changes = {
        changeLogin: () => {
            let ref = Refs.LoginRef
            props.ChangeLogin(ref.current.value)
        },
        changeEmail: () => {
            let ref = Refs.EmailRef
            props.ChangeEmail(ref.current.value)
        },
        changePassword: () => {
            let ref = Refs.PasswordRef
            props.ChangePassword(ref.current.value)
        },
        changeRepeatPassword: () => {
            let ref = Refs.RepeatPasswordRef
            props.ChangeRepeatPassword(ref.current.value)
        }
    }
    return <>
    <div>
        <textarea className={styles.input} placeholder='Логин' value={props.inputLogin} onChange={Changes.changeLogin} ref={Refs.LoginRef}/>
    </div>
    <div>
        <textarea className={styles.input} placeholder='Почта' value={props.inputEmail} onChange={Changes.changeEmail} ref={Refs.EmailRef}/>
    </div>
    <div>
        <textarea className={styles.input} placeholder='Пароль' value={props.inputPassword} onChange={Changes.changePassword} ref={Refs.PasswordRef}/>
    </div>
    <div>
        <textarea className={styles.input} placeholder='Повторите пароль' value={props.inputRepeatPassword} onChange={Changes.changeRepeatPassword} ref={Refs.RepeatPasswordRef}/>
    </div>
    <div>
        <button className={styles.RegisterInside} onClick={props.InputRegister}>Зарегистрироваться</button>
    </div>

    </>
}

export default Register;