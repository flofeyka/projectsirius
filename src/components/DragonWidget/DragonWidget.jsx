import React from "react";
import styles from "./DragonWidget.module.css"

function DragonWidget(props) {
    return <div>
        <iframe className={styles.site} src="http://localhost:8002/">
        </iframe>
    </div>
}

export default DragonWidget;