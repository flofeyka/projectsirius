const ChangeTextCreator = "TEXT-CHANGER"

let InitialState = {
    text: "123"
}


function TextAreaReducer(state=InitialState, action){
    switch(action.type){
        case ChangeTextCreator:
            return {...state, text: action.text}
        default:
            return state;
    }
}

export const ChangeText = (text) => ({type: ChangeTextCreator, text: text})


export default TextAreaReducer;