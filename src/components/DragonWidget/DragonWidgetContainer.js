import { connect } from "react-redux";
import DragonWidget from "./DragonWidget"

function mapStatetoProps (state) {
    return {

    }
}

let DragonWidgetContainer = connect(mapStatetoProps, {})(DragonWidget)

export default DragonWidgetContainer;