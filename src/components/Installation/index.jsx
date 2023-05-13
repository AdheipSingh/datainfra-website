import React from "react"
import styles from "./styles.module.css"
import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import TerminalWindow from "@site/src/components/TerminalWindow/index.jsx"

export default function Installation({ children }) {
    return (
        <div className={styles.main}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                {/* Title */}
                <h1 style={{ fontSize: "2.25rem" }}>{children[0]}</h1>

                {/* Version */}
                <Select>
                    <option value="0.0.1">Latest v0.0.1</option>
                </Select>
            </div>

            <Tabs className={styles.tabs}>
                <TabItem className={styles.tab} value="helm" label="Helm" default>
                    <hr />
                    <TerminalWindow>{children[1]}</TerminalWindow>
                </TabItem>
                <TabItem className={styles.tab} value="kustomize" label="Kustomize">
                    <hr />
                    <TerminalWindow>{children[2]}</TerminalWindow>
                </TabItem>
                <TabItem className={styles.tab} value="kubectl" label="Kubectl">
                    <hr />
                    <TerminalWindow>{children[3]}</TerminalWindow>
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
