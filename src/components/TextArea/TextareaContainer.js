import {connect} from "react-redux"
import TextArea from "./Textarea"
import {ActionChange, TimerChange, CycleChange, ActivateChanges, LineChange} from "../../redux/TextAreaReducer"
import axios from "axios"



let mapStateToProps = (state) => ({
    TextAreaPage: state.TextAreaPage,
    Action: state.TextAreaPage.Action,
    Timer: state.TextAreaPage.Timer,
    Cycle: state.TextAreaPage.Cycle,
    Line: state.TextAreaPage.Line
})

let TextareaContainer = connect(mapStateToProps, {ActionChange, TimerChange, CycleChange, ActivateChanges, LineChange})(TextArea)

export default TextareaContainer;