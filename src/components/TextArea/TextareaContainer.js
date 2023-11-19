import {connect} from "react-redux"
import TextArea from "./Textarea"
import {ChangeText, isToggle} from "../../redux/TextAreaReducer"

let mapStatetoProps = (state) => ({
    text: state.TextAreaPage.text

})

let TextareaContainer = connect(mapStatetoProps, {ChangeText})(TextArea)

export default TextareaContainer