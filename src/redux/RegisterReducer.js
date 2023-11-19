const RegisterCreator = "REGISTER-TO-THE-SYSTEM"
const ChangeInputLoginCreator = "CHANGE-INPUT-LOGIN"
const ChangeEmailCreator = "CHANGE-EMAIL-CREATOR"
const ChangeInputPasswordCreator = "CHANGE-INPUT-PASSWORD"
const ChangeInputRepeatPasswordCreator = "CHANGE-INPUT-REPEAT-PASSWORD"

let InitialState = {
    inputLogin: "",
    inputEmail: "",
    inputPassword: "",
    inputRepeatPassword: "",
    isLogged: false
}

function RegisterReducer(state=InitialState, action){
    switch(action.type) {
        case RegisterCreator:
            return {...state, isLogged: true}
        case ChangeInputLoginCreator:
            return {...state, inputLogin: action.login}
        case ChangeEmailCreator:
            return {...state, inputEmail: action.email}
        case ChangeInputPasswordCreator:
            return {...state, inputPassword: action.password}
        case ChangeInputRepeatPasswordCreator:
            return {...state, inputRepeatPassword: action.password}
        default:
            return state;
    }
}

export const InputRegister = () => ({type: RegisterCreator})
export const ChangeLogin = (login) => ({type: ChangeInputLoginCreator, inputLogin: login})
export const ChangeEmail = (email) => ({type: ChangeEmailCreator, inputEmail: email})
export const ChangePassword = (password) => ({type: ChangeInputPasswordCreator, inputPassword: password})
export const ChangeRepeatPassword = (password) => ({type: ChangeInputRepeatPasswordCreator, inputRepeatPassword: password})


export default RegisterReducer;