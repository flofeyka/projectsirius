const ActionChangeCreator = "ACTION-CHANGE"
const TimerChangeCreator = "TIMER-CHANGE"
const CycleChangeCreator = "CYCLE-CHANGE"

let InitialState = {
    Action: "",
    Timer: 1, 
    Cycle: 1,
}


function TextAreaReducer(state=InitialState, action){
    switch(action.type){
        case ActionChangeCreator:
            return {...state, Action: action.string}
        case TimerChangeCreator:
            return {...state, Timer: action.integer}
        case CycleChangeCreator:
            return {...state, Cycle: action.integer}
        default:
            return state;
    }
}

export const ActionChange = (string) => ({type: ActionChangeCreator, Action: string})
export const TimerChange = (integer) => ({type: ActionChangeCreator, Timer: integer})
export const CycleChange = (integer) => ({type: ActionChangeCreator, Cycle: integer})

export default TextAreaReducer;