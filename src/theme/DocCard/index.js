import React from "react"
import DocCard from "@theme-original/DocCard"

export default function DocCardWrapper(props) {
    return (
        <>
            {props.item.docId === "pinot-on-kubernetes/tutorials/kind" ? null : (
                <DocCard {...props} />
            )}
        </>
    )
}
