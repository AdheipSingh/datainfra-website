import React, { useState, useMemo } from "react"
import clsx from "clsx"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import { PageMetadata, HtmlClassNameProvider, ThemeClassNames } from "@docusaurus/theme-common"
import BlogLayout from "@theme/BlogLayout"
import BlogListPaginator from "@theme/BlogListPaginator"
import SearchMetadata from "@theme/SearchMetadata"
import Link from "@docusaurus/Link"
import { Navbar } from "@site/src/components/Layout"
import styles from "./styles.module.css"

// Define categories - GPU featured visually when active
const CATEGORIES = [
    { id: "all", label: "All Posts", tags: [] },
    { id: "gpu", label: "GPU Infrastructure", tags: ["gpu", "distributed-training", "nvlink", "pcie", "power-management"], isGpu: true },
    { id: "networking", label: "AI Networking", tags: ["networking", "infiniband", "rdma", "mellanox", "network-analysis"] },
    { id: "kubernetes", label: "Kubernetes", tags: ["kubernetes", "operator"] },
    { id: "saas", label: "SaaS & Control Planes", tags: ["control-planes", "saas"] },
]

function BlogListPageMetadata() {
    return (
        <>
            <Navbar />
            <PageMetadata
                title="BaaZ Blog | GPU Infrastructure Insights"
                description="Technical insights on GPU infrastructure, distributed training, Kubernetes operators, and cloud-native technologies."
            />
            <SearchMetadata tag="blog_posts_list" />
        </>
    )
}

function SearchBar({ value, onChange }) {
    return (
        <div className={styles.searchWrapper}>
            <svg
                className={styles.searchIcon}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
            </svg>
            <input
                type="text"
                placeholder="Search blogs..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={styles.searchInput}
            />
            {value && (
                <button
                    className={styles.searchClear}
                    onClick={() => onChange("")}
                    aria-label="Clear search"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
            )}
        </div>
    )
}

function CategoryTabs({ categories, activeCategory, onCategoryChange, postCounts }) {
    return (
        <div className={styles.categoryWrapper}>
            <div className={styles.categoryTabs}>
                {categories.map((category) => (
                    <button
                        key={category.id}
                        className={clsx(
                            styles.categoryTab,
                            activeCategory === category.id && styles.categoryTabActive,
                            activeCategory === category.id && category.isGpu && styles.categoryTabGpuActive
                        )}
                        onClick={() => onCategoryChange(category.id)}
                    >
                        {category.label}
                        <span className={styles.categoryCount}>{postCounts[category.id] || 0}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}

function BlogListPageContent({ metadata, items }) {
    const [searchQuery, setSearchQuery] = useState("")
    const [activeCategory, setActiveCategory] = useState("all")

    // Calculate post counts for each category
    const postCounts = useMemo(() => {
        const counts = { all: items.length }
        CATEGORIES.forEach((category) => {
            if (category.id === "all") return
            counts[category.id] = items.filter((item) => {
                const postTags = item.content.metadata.tags.map((t) => t.label.toLowerCase())
                return category.tags.some((tag) => postTags.includes(tag.toLowerCase()))
            }).length
        })
        return counts
    }, [items])

    // Helper to check if post is GPU-related
    const isGpuPost = (item) => {
        const gpuTags = ["gpu", "distributed-training", "nvlink", "pcie", "power-management"]
        const postTags = item.content.metadata.tags.map((t) => t.label.toLowerCase())
        return gpuTags.some((tag) => postTags.includes(tag))
    }

    // Filter and sort posts based on search and category
    const filteredItems = useMemo(() => {
        let filtered = items

        // Filter by category
        if (activeCategory !== "all") {
            const category = CATEGORIES.find((c) => c.id === activeCategory)
            if (category) {
                filtered = filtered.filter((item) => {
                    const postTags = item.content.metadata.tags.map((t) => t.label.toLowerCase())
                    return category.tags.some((tag) => postTags.includes(tag.toLowerCase()))
                })
            }
        }

        // Filter by search query
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase()
            filtered = filtered.filter((item) => {
                const { title, description, tags } = item.content.metadata
                const tagLabels = tags.map((t) => t.label.toLowerCase()).join(" ")
                return (
                    title.toLowerCase().includes(query) ||
                    description.toLowerCase().includes(query) ||
                    tagLabels.includes(query)
                )
            })
        }

        // Sort GPU posts first when viewing "All Posts" and no search
        if (activeCategory === "all" && !searchQuery.trim()) {
            filtered = [...filtered].sort((a, b) => {
                const aIsGpu = isGpuPost(a)
                const bIsGpu = isGpuPost(b)
                if (aIsGpu && !bIsGpu) return -1
                if (!aIsGpu && bIsGpu) return 1
                return 0 // Keep original order within same category
            })
        }

        return filtered
    }, [items, activeCategory, searchQuery])

    return (
        <BlogLayout>
            <div className={styles.blogWrapper}>
                {/* Hero Section */}
                <div className={styles.blogHero}>
                    <h1 className={styles.blogHeroTitle}>BaaZ Blogs</h1>
                    <p className={styles.blogHeroSubtitle}>
                        Technical deep-dives on GPU infrastructure, distributed training, and cloud-native systems.
                    </p>
                </div>

                {/* Search and Filters */}
                <div className={styles.filterSection}>
                    <SearchBar value={searchQuery} onChange={setSearchQuery} />
                    <CategoryTabs
                        categories={CATEGORIES}
                        activeCategory={activeCategory}
                        onCategoryChange={setActiveCategory}
                        postCounts={postCounts}
                    />
                </div>

                {/* Results Info */}
                {(searchQuery || activeCategory !== "all") && (
                    <div className={styles.resultsInfo}>
                        <span>
                            {filteredItems.length} {filteredItems.length === 1 ? "article" : "articles"}
                            {searchQuery && ` matching "${searchQuery}"`}
                            {activeCategory !== "all" && ` in ${CATEGORIES.find(c => c.id === activeCategory)?.label}`}
                        </span>
                        {(searchQuery || activeCategory !== "all") && (
                            <button
                                className={styles.clearFilters}
                                onClick={() => {
                                    setSearchQuery("")
                                    setActiveCategory("all")
                                }}
                            >
                                Clear filters
                            </button>
                        )}
                    </div>
                )}

                {/* Blog Posts */}
                {filteredItems.length > 0 ? (
                    <>
                        {/* Featured post (only show when viewing all and no search) */}
                        {activeCategory === "all" && !searchQuery && (
                            <BlogPost post={filteredItems[0].content.metadata} featured />
                        )}

                        {/* Blog Grid */}
                        <div className={styles.blogGrid}>
                            {(activeCategory === "all" && !searchQuery ? filteredItems.slice(1) : filteredItems).map((item, index) => (
                                <BlogPost post={item.content.metadata} key={index} />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className={styles.noResults}>
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.35-4.35" />
                        </svg>
                        <h3>No articles found</h3>
                        <p>Try adjusting your search or filter to find what you're looking for.</p>
                        <button
                            className={styles.resetButton}
                            onClick={() => {
                                setSearchQuery("")
                                setActiveCategory("all")
                            }}
                        >
                            View all articles
                        </button>
                    </div>
                )}
            </div>
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
            <BlogListPageMetadata />
            <BlogListPageContent {...props} />
        </HtmlClassNameProvider>
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
        month: "short",
        day: "numeric",
        year: "numeric",
    })

    // Check if this is a GPU-related post
    const isGpuPost = tags.some((t) =>
        ["gpu", "distributed-training", "nvlink", "pcie", "power-management"].includes(t.label.toLowerCase())
    )

    return (
        <article className={clsx(styles.blogPost, featured && styles.blogPostFeatured)}>
            <Link href={"/blog/" + url} className={styles.blogImageLink}>
                <div className={styles.blogImageWrapper}>
                    {isGpuPost && <span className={styles.gpuBadge}>GPU</span>}
                    <img
                        src="/img/blogEmpty.svg"
                        alt={title}
                        className={styles.blogImage}
                    />
                    <p className={styles.blogImageTitle}>{title}</p>
                </div>
            </Link>

            <div className={styles.blogMeta}>
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

            <p className={styles.blogDescription}>
                {description.length > 150 ? description.substring(0, 150) + "..." : description}
            </p>

            {/* Tags */}
            {tags.length > 0 && (
                <div className={styles.tagsWrapper}>
                    {tags.slice(0, 3).map((tag, idx) => (
                        <Link
                            key={idx}
                            href={tag.permalink}
                            className={styles.tag}
                        >
                            {tag.label}
                        </Link>
                    ))}
                </div>
            )}
        </article>
    )
}
