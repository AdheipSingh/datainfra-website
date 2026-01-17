import React from "react"
// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents"
import TerminalWindow from "@site/src/components/TerminalWindow/index.jsx"
import Installation from "@site/src/components/Installation/index.jsx"
import GoInstallation from "@site/src/components/GoInstallation/index.jsx"


export default {
    // Re-use the default mapping
    ...MDXComponents,
    TerminalWindow,
    Installation,
    GoInstallation,
}
