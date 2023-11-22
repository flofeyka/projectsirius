import axios from "axios"

const AddActionCreator = "ADD-ACTION"
const ActionChangeCreator = "ACTION-CHANGE"
const TimerChangeCreator = "TIMER-CHANGE"
const CycleChangeCreator = "CYCLE-CHANGE"
const LineChangeCreator = "LINE-CHANGE"
const SetEnableCreator = "SET-ENABLE"

let InitialState = {
    actions: [
    {
        id: 1, 
        Doing: "Налить", 
        Cycle: 1,
        Time: 1,
        Line: 1
    }, 
    {
        id: 2,
        Doing: "Повернуть",
        Cycle: 2,
        Time: 2,
        Line: 2
    }
], 
    TextArea: {
        Action: "",
        Timer: 1, 
        Cycle: 1,
        Line: 1
    },
    isEnabled: true
}


function TableReducer(state=InitialState, action) {
    switch(action.type){
        case AddActionCreator:
        //     return {...state, actions: [...state.actions, {
        //         id: Object.keys(state.actions).length + 1,
        //         Doing: state.Action,
        //         Cycle: state.Cycle,
        //         Time: state.Timer,
        //         Line: state.Line
        //     }]
        // }
            return (
                axios.get("http://10.10.201.184:8000/?commands=light(1,0,0)").then(Response => {
                    return {...state, isEnabled: true}
                })
            )
        case ActionChangeCreator:
            return {...state, TextArea: {...state.TextArea, Action: action.string}};
        case TimerChangeCreator:
            return {...state, TextArea: {...state.TextArea, Timer: action.integer}};
        case CycleChangeCreator:
            return {...state, TextArea: {...state.TextArea, Cycle: action.integer}};
        case LineChangeCreator:
            return {...state, TextArea: {...state.TextArea, Line: action.integer}};
        case SetEnableCreator: 
            return {...state, isEnabled: action.bool}
        default:
            return state;
    }
}

export const AddAction = () => ({type: AddActionCreator})
export const ActionChange = (string) => ({type: ActionChangeCreator, Action: string});
export const TimerChange = (integer) => ({type: TimerChangeCreator, Timer: integer});
export const CycleChange = (integer) => ({type: CycleChangeCreator, Cycle: integer});
export const LineChange = (integer) => ({type: LineChangeCreator, Line: integer});
export const SetEnable = (bool) => ({type: LineChangeCreator, isEnabled: bool})

export default TableReducer;