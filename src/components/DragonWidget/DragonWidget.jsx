import React from "react";
import index from "./drakonwidget/index.html"

function DragonWidget(props) {
    return <iframe dangerouslySetInnerHTML={{ __html: index }} />
}

export default DragonWidget;