import { connect } from "react-redux"
import Table from "./Table"
import { AddAction, ActionChange, TimerChange, CycleChange, LineChange } from "../../redux/TableReducer"

function mapStatetoProps(state){
    return {
        actions: state.TablePage.actions,
        Action: state.TablePage.TextArea.Action,
        Timer: state.TablePage.TextArea.Timer,
        Cycle: state.TablePage.TextArea.Cycle,
        Line: state.TablePage.TextArea.Line,
        isEnabled: state.TablePage.TextArea.isEnabled
    }
}

let TableContainer = connect(mapStatetoProps, {ActionChange, TimerChange, CycleChange, LineChange, AddAction})(Table)

export default TableContainer;