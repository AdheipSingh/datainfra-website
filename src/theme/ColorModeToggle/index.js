import React from "react"
import ColorModeToggle from "@theme-original/ColorModeToggle"
import { useLocation } from "@docusaurus/router"

export default function ColorModeToggleWrapper(props) {
    const { pathname } = useLocation()

    return pathname === "/" ? null : <ColorModeToggle {...props} />
}
