import React from "react"
import BlogPostItem from "@theme-original/BlogPostItem"
import { Navbar } from "@site/src/components/Layout"
import Head from "@docusaurus/Head"
import { useBlogPost } from "@docusaurus/theme-common/internal"

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

    const { title, description, date, authors, permalink } = metadata

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "description": description,
        "datePublished": date,
        "dateModified": date,
        "url": `https://www.baaz.dev${permalink}`,
        "author": authors && authors.length > 0 ? {
            "@type": "Person",
            "name": authors[0].name || "BaaZ",
            "url": authors[0].url || "https://www.baaz.dev"
        } : {
            "@type": "Organization",
            "name": "BaaZ",
            "url": "https://www.baaz.dev"
        },
        "publisher": {
            "@type": "Organization",
            "name": "BaaZ",
            "url": "https://www.baaz.dev",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.baaz.dev/img/logo-vector.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.baaz.dev${permalink}`
        },
        "keywords": "GPU infrastructure, AI factory, GPU consulting, distributed training, Kubernetes GPU"
    }

    return (
        <Head>
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
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
