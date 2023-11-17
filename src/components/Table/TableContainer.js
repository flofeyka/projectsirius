import { connect } from "react-redux"
import Table from "./Table"

function mapStatetoProps(state){
    return {

    }
}

let TableContainer = connect(mapStatetoProps, {})(Table)

export default TableContainer;