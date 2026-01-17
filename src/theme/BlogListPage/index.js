import React from "react"
import clsx from "clsx"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import { PageMetadata, HtmlClassNameProvider, ThemeClassNames } from "@docusaurus/theme-common"
import BlogLayout from "@theme/BlogLayout"
import BlogListPaginator from "@theme/BlogListPaginator"
import SearchMetadata from "@theme/SearchMetadata"
import TagsListInline from "@theme/TagsListInline"
import Link from "@docusaurus/Link"
import { Navbar } from "@site/src/components/Layout"
import styles from "./styles.module.css"

function BlogListPageMetadata(props) {
    const { metadata } = props
    const {
        siteConfig: { title: siteTitle },
    } = useDocusaurusContext()
    const { blogDescription, permalink } = metadata
    const isBlogOnlyMode = permalink === "/"
    const title = "BaaZ Blog | GPU Infrastructure Insights"
    return (
        <>
            <Navbar />
            <PageMetadata
                title={title}
                description="Insights on GPU infrastructure, Kubernetes operators, and cloud-native technologies."
            />
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
    React.useEffect(() => {
        // Hide default navbar elements
        const navItems = document.querySelector(".navbar__items > a")
        const navDiv = document.querySelector(".navbar__items > div")
        if (navItems) navItems.style.display = "none"
        if (navDiv) navDiv.style.display = "none"
    }, [])

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
            {/* First blog post - featured */}
            <BlogPost post={items[0].content.metadata} featured />

            {/* Rest of blog posts */}
            <div className={styles.blogGrid}>
                {items.slice(1).map((item, index) => (
                    <BlogPost post={item.content.metadata} key={index} />
                ))}
            </div>
        </div>
    )
}

function BlogPost({ post, featured = false }) {
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

    return (
        <article className={clsx(styles.blogPost, featured && styles.blogPostFeatured)}>
            <Link href={"/blog/" + url} className={styles.blogImageLink}>
                <div className={styles.blogImageWrapper}>
                    <img
                        src="/img/blogEmpty.svg"
                        alt={title}
                        className={styles.blogImage}
                    />
                    <p className={styles.blogImageTitle}>{title}</p>
                </div>
            </Link>

            <div className={styles.blogMeta}>
                {/* Authors */}
                <div className={styles.authors}>
                    {authors.map((author, idx) => (
                        <div key={idx} className={styles.author}>
                            <Link href={author.url} className={styles.authorName}>
                                {author.name}
                            </Link>
                            {author.title && (
                                <span className={styles.authorTitle}>{author.title}</span>
                            )}
                        </div>
                    ))}
                </div>

                {/* Date and reading time */}
                <div className={styles.dateInfo}>
                    <span>{formattedDate}</span>
                    <span className={styles.separator}>·</span>
                    <span>{Math.floor(readingTime)} min read</span>
                </div>
            </div>

            <Link href={"/blog/" + url} className={styles.blogTitleLink}>
                <h2 className={clsx(styles.blogTitle, featured && styles.blogTitleFeatured)}>
                    {title}
                </h2>
            </Link>

            <p className={styles.blogDescription}>{description}...</p>

            {/* Tags */}
            {tagsExists && (
                <div className={styles.tagsWrapper}>
                    <TagsListInline tags={tags} />
                </div>
            )}
        </article>
    )
}
