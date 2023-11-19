import {connect} from 'react-redux';
import Login from "./Login"
import { LoginInput, ChangePassword, ChangeLogin } from '../../../redux/LoginReducer';

function mapStateToProps(state) {
    return {
        inputLogin: state.LoginPage.inputLogin,
        inputPassword: state.LoginPage.inputPassword
    }
}

let LoginContainer = connect(mapStateToProps, {LoginInput, ChangeLogin, ChangePassword})(Login)

export default LoginContainer;