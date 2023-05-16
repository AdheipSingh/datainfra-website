import React from "react"
import Link from "@theme-original/DocSidebarItem/Link"

export default function LinkWrapper(props) {
    const docId = props.item.docId
    const druid = "druid-on-kubernetes/index"
    const pinot = "pinot-on-kubernetes/index"

    return docId === druid || docId === pinot ? (
        <div style={{ position: "relative" }}>
            <img
                style={{ height: "40px", position: "absolute", top: "28px", left: "28px" }}
                src={docId === druid ? "/img/druid.png" : "/img/pinot.png"}
                alt="secure-icon"
            />
            <Link
                style={{
                    paddingLeft: "64px",
                    background: "#DFE5FF",
                    borderRadius: "16px",
                    height: "72px",
                    margin: "12px",
                    fontSize: "1.125rem",
                    border: "1px solid rgba(0, 30, 170, 0.16)",
                }}
                {...props}
            />
        </div>
    ) : (
        <>
            <Link style={{ fontSize: "1.125rem", margin: "8px" }} {...props} />
        </>
    )
}
