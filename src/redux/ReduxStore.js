import {combineReducers, legacy_createStore as createStore} from "redux";
import TableReducer from "./TableReducer";
import DragonWidgetReducer from "./DragonWidgetReducer";
import NodeReducer from "./NodeReducer";
import LoginReducer from "./LoginReducer";


let reducers = combineReducers({
    DragonWidgetPage: DragonWidgetReducer,
    TablePage: TableReducer,
    NodePage: NodeReducer,
    LoginPage: LoginReducer
})


let store = createStore(reducers)

export default store;