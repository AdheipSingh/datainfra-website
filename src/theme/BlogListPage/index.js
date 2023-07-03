import React from "react"
import clsx from "clsx"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import { PageMetadata, HtmlClassNameProvider, ThemeClassNames } from "@docusaurus/theme-common"
import BlogLayout from "@theme/BlogLayout"
import BlogListPaginator from "@theme/BlogListPaginator"
import SearchMetadata from "@theme/SearchMetadata"
import TagsListInline from "@theme/TagsListInline"
import Link from "@docusaurus/Link"
import styles from "./styles.module.css"

function BlogListPageMetadata(props) {
    const { metadata } = props
    const {
        siteConfig: { title: siteTitle },
    } = useDocusaurusContext()
    const { blogDescription, blogTitle, permalink } = metadata
    const isBlogOnlyMode = permalink === "/"
    const title = isBlogOnlyMode ? siteTitle : blogTitle
    return (
        <>
            <PageMetadata title={title} description={blogDescription} />
            <SearchMetadata tag="blog_posts_list" />
        </>
    )
}

function BlogListPageContent(props) {
    const { metadata, items, sidebar } = props
    return (
        <BlogLayout>
            <BlogPostItems items={items} />
            <BlogListPaginator metadata={metadata} />
        </BlogLayout>
    )
}

export default function BlogListPage(props) {
    return (
        <HtmlClassNameProvider
            className={clsx(ThemeClassNames.wrapper.blogPages, ThemeClassNames.page.blogListPage)}
        >
            <BlogListPageMetadata {...props} />
            <BlogListPageContent {...props} />
        </HtmlClassNameProvider>
    )
}

function BlogPostItems({ items }) {
    return (
        <div className={styles.blogWrapper}>
            {/* First blog post */}
            <BlogPost post={items[0].content.metadata} />

            {/* Rest of blog posts */}
            <div
                style={{
                    display: "flex",
                    gap: "60px",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                }}
            >
                {items.slice(1).map((item) => (
                    <BlogPost post={item.content.metadata} top={false} />
                ))}
            </div>
        </div>
    )
}

function BlogPost({ post, top = true }) {
    const {
        authors,
        tags,
        readingTime,
        date,
        description,
        title,
        frontMatter: { url },
    } = post

    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    })

    const tagsExists = tags.length > 0

    const imageRef = React.useRef(null)
    const textRef = React.useRef(null)

    React.useEffect(() => {
        const handleResize = () => {
            const imageWidth = imageRef.current.offsetWidth
            const fontSize = imageWidth * 0.035
            textRef.current.style.fontSize = `${fontSize}px`
        }

        handleResize() // Initial font size calculation

        window.addEventListener("resize", handleResize)

        if (imageRef.current.offsetWidth === 0) {
            setTimeout(handleResize, 100)
        }

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <div style={{ marginBottom: "5rem", width: top ? "100%" : "46%" }} className={styles.blog}>
            <div style={{ position: "relative" }}>
                <Link href={"/blog/" + url}>
                    <img
                        ref={imageRef}
                        style={{
                            marginBottom: "20px",
                            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                            borderRadius: "10px",
                        }}
                        src="/img/blogEmpty.svg"
                        alt="title"
                    />
                </Link>
                <p
                    ref={textRef}
                    style={{
                        color: "#48525C",
                        textDecoration: "none",
                        position: "absolute",
                        pointerEvents: "none",
                        top: "32%",
                        left: "28%",
                        width: "65%",
                        fontWeight: 500,
                    }}
                >
                    {title}
                </p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                {/* Authors */}
                <div style={{ display: "flex", gap: "20px" }}>
                    {authors.map((author) => (
                        <div>
                            <Link href={author.url}>
                                <span
                                    style={{
                                        color: "var(--ifm-link-color)",
                                        font: "bold var(--ifm-h4-font-size) / var(--ifm-heading-line-height) var(--ifm-font-family-base)",
                                    }}
                                >
                                    {author.name}
                                </span>
                            </Link>
                            <small className="avatar__subtitle" style={{ display: "block" }}>
                                {author.title}
                            </small>
                        </div>
                    ))}
                </div>

                {/* Date */}
                <div style={{ display: "flex", gap: "4px", fontSize: top ? "1rem" : "0.875rem" }}>
                    <p>{formattedDate}</p>
                    <span>·</span>
                    <p>{Math.floor(readingTime) + " min read"}</p>
                </div>
            </div>

            <Link href={"/blog/" + url}>
                <h2 style={{ marginTop: "20px", fontSize: top ? "2rem" : "1.5rem" }}>{title}</h2>
            </Link>

            <p>{description}...</p>

            {/* Tags */}
            {tagsExists && (
                <div style={{ paddingLeft: 0 }} className={clsx("col")}>
                    <TagsListInline tags={tags} />
                </div>
            )}
        </div>
    )
}
