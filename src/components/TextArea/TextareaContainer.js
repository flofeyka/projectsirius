import {connect} from "react-redux"
import TextArea from "./Textarea"
import {ActionChange, TimerChange, CycleChange, ActivateChanges} from "../../redux/TextAreaReducer"
import axios from "axios"



let mapStateToProps = (state) => ({
    TextAreaPage: state.TextAreaPage,
    Action: state.TextAreaPage.Action,
    Timer: state.TextAreaPage.Timer,
    Cycle: state.TextAreaPage.Cycle
})

let TextareaContainer = connect(mapStateToProps, {ActionChange, TimerChange, CycleChange, ActivateChanges})(TextArea)

export default TextareaContainer;