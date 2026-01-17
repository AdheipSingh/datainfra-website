import React from "react"
import { Footer } from "@site/src/components/Layout"
import { Analytics } from "@vercel/analytics/react"

export default function FooterWrapper() {
    return (
        <>
            <Footer />
            <Analytics />
        </>
    )
}
