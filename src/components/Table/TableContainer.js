import { connect } from "react-redux"
import Table from "./Table"
import { AddAction, ActionChange, TimerChange, CycleChange, LineChange } from "../../redux/TableReducer"
import axios from "axios"


function mapStatetoProps(state){
    return {
        actions: state.TablePage.actions
    }
}

let TableContainer = connect(mapStatetoProps, {AddAction})(Table)

export default TableContainer