import {combineReducers, legacy_createStore as createStore} from "redux";
import TableReducer from "./TableReducer";
import TextAreaReducer from "./TextAreaReducer";
import VRReducer from "./VRReducer";
import DragonWidgetReducer from "./DragonWidgetReducer";


let reducers = combineReducers({
    DragonWidgetPage: DragonWidgetReducer,
    TablePage: TableReducer,
    TextAreaPage: TextAreaReducer,
    VRPage: VRReducer
})


let store = createStore(reducers)

export default store;