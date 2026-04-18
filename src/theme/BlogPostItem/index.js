import React from "react"
import BlogPostItem from "@theme-original/BlogPostItem"
import { Navbar } from "@site/src/components/Layout"
import Head from "@docusaurus/Head"
import { useBlogPost } from "@docusaurus/theme-common/internal"

// Tags whose posts should be excluded from search indexing.
// These posts remain accessible via direct link but don't dilute
// the site's topical authority around GPU infrastructure.
const NOINDEX_TAGS = new Set(["saas", "control-planes"])

function hasNoindexTag(tags) {
    if (!tags || tags.length === 0) return false
    return tags.some((t) => {
        const label = typeof t === "string" ? t : t?.label
        if (!label) return false
        return NOINDEX_TAGS.has(label.toLowerCase())
    })
}

function BlogPostStructuredData() {
    let metadata = null

    try {
        const blogPost = useBlogPost()
        metadata = blogPost?.metadata
    } catch (e) {
        // Hook not available in list view, skip structured data
        return null
    }

    if (!metadata) return null

    const { title, description, date, authors, permalink, tags } = metadata

    const noindex = hasNoindexTag(tags)

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "description": description,
        "datePublished": date,
        "dateModified": date,
        "url": `https://baaz.dev${permalink}`,
        "author": authors && authors.length > 0 ? {
            "@type": "Person",
            "name": authors[0].name || "BaaZ",
            "url": authors[0].url || "https://baaz.dev"
        } : {
            "@type": "Organization",
            "name": "BaaZ",
            "url": "https://baaz.dev"
        },
        "publisher": {
            "@type": "Organization",
            "name": "BaaZ",
            "url": "https://baaz.dev",
            "logo": {
                "@type": "ImageObject",
                "url": "https://baaz.dev/img/logo-vector.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://baaz.dev${permalink}`
        },
        "keywords": "GPU infrastructure, AI factory, GPU consulting, distributed training, Kubernetes GPU"
    }

    return (
        <Head>
            {/* Noindex legacy / off-topic posts so they don't dilute topical authority */}
            {noindex && <meta name="robots" content="noindex, follow" />}
            {!noindex && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Head>
    )
}

export default function BlogPostItemWrapper(props) {
    return (
        <>
            <BlogPostStructuredData />
            <Navbar />
            <div style={{ marginTop: "80px" }}>
                <BlogPostItem {...props} />
            </div>
        </>
    )
}
