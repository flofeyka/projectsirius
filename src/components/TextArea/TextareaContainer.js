import {connect} from "react-redux"
import TextArea from "./Textarea"
import {ActionChange, TimerChange, CycleChange} from "../../redux/TextAreaReducer"
import axios from "axios"

function TextAreaGetTheServerAPI() {
    axios.get().then(Response => {

    })
    return <TextArea/>
}

let mapStateToProps = (state) => ({
    TextAreaPage: state.TextAreaPage,
    Action: state.TextAreaPage.Action,
    Timer: state.TextAreaPage.Timer,
    Cycle: state.TextAreaPage.Cycle
})

let mapDispatchToProps = (dispatch) => ({
    ActionChange: (string) => {
        dispatch(ActionChange(string))
    },
    TimerChange: (integer) => {
        dispatch(TimerChange(integer))
    },
    CycleChange: (integer) => {
        dispatch(CycleChange(integer))
    }
})

let TextareaContainer = connect(mapStateToProps, mapDispatchToProps)(TextArea)

export default TextareaContainer;