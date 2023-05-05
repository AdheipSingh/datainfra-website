import React from "react"
import DocSidebar from "@theme-original/DocSidebar"

export default function DocSidebarWrapper(props) {
    return (
        <>
            <h3
                style={{
                    marginTop: "70px",
                    paddingLeft: "20px",
                    marginBottom: "-54px",
                    borderBottom: "1px solid var(--ifm-toc-border-color)",
                    paddingBottom: "10px",
                }}
            >
                {prepareTitle(props.path)}
            </h3>
            <DocSidebar {...props} />
        </>
    )
}

/**
 * Helper function to get title from its path
 * @example
 * "/docs/druid-on-kubernetes/documentation" => "Druid On Kubernetes"
 */
function prepareTitle(path) {
    const titleArray = path.split("/")[2].split("-")
    return titleArray.map((a) => a[0].toUpperCase() + a.slice(1)).join(" ")
}
