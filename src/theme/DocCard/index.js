import React from "react"
import DocCard from "@theme-original/DocCard"

export default function DocCardWrapper(props) {
    return <>{cardsToIgnore.includes(props.item.docId) ? null : <DocCard {...props} />}</>
}

const cardsToIgnore = [
    //
    "pinot-on-kubernetes/tutorials/kind",
    "pinot-on-kubernetes/tutorials/aws",
    "pinot-on-kubernetes/tutorials/heterogenous-pinot"
]
