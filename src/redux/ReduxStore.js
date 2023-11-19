import {combineReducers, legacy_createStore as createStore} from "redux";
import TableReducer from "./TableReducer";
import TextAreaReducer from "./TextAreaReducer";
import DragonWidgetReducer from "./DragonWidgetReducer";


let reducers = combineReducers({
    DragonWidgetPage: DragonWidgetReducer,
    TablePage: TableReducer,
    TextAreaPage: TextAreaReducer,
})


let store = createStore(reducers)

export default store;