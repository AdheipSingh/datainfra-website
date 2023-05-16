import React from "react"
import styles from "./styles.module.css"
import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import TerminalWindow from "@site/src/components/TerminalWindow/index.jsx"

export default function GoInstallation({ children }) {
    return (
        <div className={styles.main}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                {/* Title */}
                <h1 style={{ fontSize: "2.25rem" }}>{children[0]}</h1>
            </div>

            <Tabs className={styles.tabs}>
                <TabItem className={styles.tab} value="go" label="Go" default>
                    <hr />
                    <TerminalWindow>{children[1]}</TerminalWindow>
                </TabItem>
            </Tabs>

        </div>
    )
}


// ** Styled Components
function Select({ children }) {
    return (
        <select
            style={{
                height: "50px",
                borderRadius: "16px",
                fontSize: "1rem",
                padding: "14px",
                border: "1px solid #c7c7c7",
            }}
        >
            {children}
        </select>
    )
}
