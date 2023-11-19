const LoginCreator = "LOGIN-TO-THE-SYSTEM"
const ChangeLoginCreator = "CHANGE-LOGIN-INPUT"
const ChangePasswordCreator = "CHANGE-PASSWORD-INPUT"

let InitialState = {
    inputLogin: "",
    inputPassword: "",
    isLogged: false
}

function LoginReducer(state=InitialState, action){
    switch(action.type){
        case LoginCreator:
            return {...state, isLogged: true}
        case ChangeLoginCreator:
            return {...state, inputLogin: action.login}
        case ChangePasswordCreator:
            return {...state, inputPassword: action.password}
        default:
            return state;
    }
}

export const LoginInput = () => ({type: LoginCreator})
export const ChangeLogin = (login) => ({type: ChangeLoginCreator, inputLogin: login})
export const ChangePassword = (password) => ({type: ChangePasswordCreator, inputPassword: password})

export default LoginReducer;