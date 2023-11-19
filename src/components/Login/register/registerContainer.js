import { connect } from "react-redux";
import Register from "./register";
import { InputRegister,ChangeEmail, ChangePassword, ChangeRepeatPassword, ChangeLogin } from "../../../redux/RegisterReducer";
function mapStateToProps(state) {
    return {
        inputLogin: state.RegisterPage.inputLogin,
        inputEmail: state.RegisterPage.inputEmail,
        inputPassword: state.RegisterPage.inputPassword,
        inputRepeatPassword: state.RegisterPage.inputRepeatPassword
    }
}

let RegisterContainer = connect(mapStateToProps, {InputRegister, ChangeLogin, ChangeEmail, 
    ChangePassword, ChangeRepeatPassword
})(Register)

export default RegisterContainer;