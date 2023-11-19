import {combineReducers, legacy_createStore as createStore} from "redux";
import TableReducer from "./TableReducer";
import TextAreaReducer from "./TextAreaReducer";
import DragonWidgetReducer from "./DragonWidgetReducer";
import NodeReducer from "./NodeReducer";
import LoginReducer from "./LoginReducer";
import RegisterReducer from "./RegisterReducer";


let reducers = combineReducers({
    DragonWidgetPage: DragonWidgetReducer,
    TablePage: TableReducer,
    TextAreaPage: TextAreaReducer,
    NodePage: NodeReducer,
    LoginPage: LoginReducer,
    RegisterPage: RegisterReducer
})


let store = createStore(reducers)

export default store;