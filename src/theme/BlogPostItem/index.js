import React from "react"
import BlogPostItem from "@theme-original/BlogPostItem"
import { Navbar } from "@site/src/components/Layout"

export default function BlogPostItemWrapper(props) {
    return (
        <>
            <Navbar />
            <div style={{ marginTop: "80px" }}>
                <BlogPostItem {...props} />
            </div>
        </>
    )
}
