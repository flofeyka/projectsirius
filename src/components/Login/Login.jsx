import React from 'react';
import styles from './login.module.css'

function Login(props){
    let LoginRef = React.createRef()  
    let PasswordRef = React.createRef()

    function onChangeLogin() {
        props.ChangeLogin(LoginRef.current.value)
    }
    function onChangePassword() {
        props.ChangePassword(PasswordRef.current.value)
    }
    
    return <div className={styles.LoginStyle}>
    <div> 
        <textarea className={styles.input} placeholder='Логин' value={props.inputLogin} ref={LoginRef} onChange={onChangeLogin}/>
    </div>
    <div>
        <textarea className={styles.input} placeholder='Пароль' value={props.inputPassword} ref={PasswordRef} onChange={onChangePassword}/>
    </div>
    <div>
        <button onClick={props.LoginInput} className={styles.LoginInside}>Войти</button>
    </div>
    </div>
}

export default Login;