const ActionChangeCreator = "ACTION-CHANGE"
const TimerChangeCreator = "TIMER-CHANGE"
const CycleChangeCreator = "CYCLE-CHANGE"
const ActivateChangesCreator = "ACTIVATE-CHANGES"
const LineChangeCreator = "LINE-CHANGE"

let InitialState = {
    Action: "",
    Timer: 1, 
    Cycle: 1,
    Line: null
}


function TextAreaReducer(state=InitialState, action){
    switch(action.type){
        case ActionChangeCreator:
            return {...state, Action: action.string};
        case TimerChangeCreator:
            return {...state, Timer: action.integer};
        case CycleChangeCreator:
            return {...state, Cycle: action.integer};
        case LineChangeCreator:
                return {...state, Line: action.integer};
        case ActivateChangesCreator:
            return state;
        default:
            return state;
    }
}

export const ActionChange = (string) => ({type: ActionChangeCreator, Action: string});
export const TimerChange = (integer) => ({type: TimerChangeCreator, Timer: integer});
export const CycleChange = (integer) => ({type: CycleChangeCreator, Cycle: integer});
export const LineChange = (integer) => ({type: LineChangeCreator, Line: integer})
export const ActivateChanges = () => ({type: ActivateChangesCreator})

export default TextAreaReducer;