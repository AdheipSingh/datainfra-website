import React from "react"
import styles from "./styles.module.css"

export default function TerminalWindow({ children }) {
    return <div className={styles.main}>{children}</div>
}

// ** Styled Components
// function Container({ children }) {
//     return (
//         <div style={{ position: "relative", marginTop: "50px", marginLeft: "50px" }}>
//             {children}
//         </div>
//     )
// }
