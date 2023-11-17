import {connect} from "react-redux"
import TextArea from "./Textarea"
import {ChangeText} from "../../redux/TextAreaReducer"

function mapStatetoProps(state) {
    return {
        text: state.TextAreaPage.text
    }

}

let TextareaContainer = connect(mapStatetoProps, {ChangeText})(TextArea)

export default TextareaContainer