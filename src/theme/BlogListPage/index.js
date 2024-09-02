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
import newstyles from "../../pages/index.module.css"

function BlogListPageMetadata(props) {
    const { metadata } = props
    const {
        siteConfig: { title: siteTitle },
    } = useDocusaurusContext()
    const { blogDescription, permalink } = metadata
    const isBlogOnlyMode = permalink === "/"
    const title =
        "BaaZ Blogs | Insights, Trends, and Best Practices for SaaS Infrastructure Management"
    return (
        <>
            <NavBar className={styles.navbar}>
            </NavBar>
            <PageMetadata
                title={title}
                description="BaaZ blogs for valuable insights, latest trends, and best practices in SaaS infrastructure management. Stay informed about industry developments, optimization techniques, and strategies to enhance the performance and scalability of your SaaS infrastructure."
            />
            <SearchMetadata tag="blog_posts_list" />
        </>
    )
}

function BlogListPageContent(props) {
    const { metadata, items, sidebar } = props
    return (
        <BlogLayout>
            {/* <ActionButton href="https://www.launchpass.com/baaz">Join Slack</ActionButton> */}
            <BlogPostItems items={items} />
            <BlogListPaginator metadata={metadata} />
        </BlogLayout>
    )
}

export default function BlogListPage(props) {
    React.useEffect(() => {
        // Delete default content: Dropdown and logo
        document.querySelector(".navbar__items > a").style.display = "none"
        document.querySelector(".navbar__items > div").style.display = "none"

        // Prepare img element with new logo
        const imgElement = document.createElement("img")
        //imgElement.src = "/img/logo-text-light.svg"
        //imgElement.alt = "logo"

        // Append the img element to nav element
        document.querySelector(".navbar__items").appendChild(imgElement)

        // Add padding to right side to make room for Join Slack
        document.querySelector(".navbar__items.navbar__items--right").style.marginRight = "290px"
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
                    <BlogPost post={item.content.metadata} key={Math.random()} top={false} />
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
            setTimeout(handleResize, 300)
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

            <p style={{ fontSize: "1rem", color: "rgb(26, 32, 44)" }}>{description}...</p>

            {/* Tags */}
            {tagsExists && (
                <div style={{ paddingLeft: 0 }} className={clsx("col")}>
                    <TagsListInline tags={tags} />
                </div>
            )}
        </div>
    )
}

// function ActionButton({ className, href, style, children }) {
//     return (
//         <Link
//             className={className}
//             href={href}
//             style={{
//                 background: "#fff",
//                 borderRadius: "28px",
//                 border: "none",
//                 color: "#000",
//                 fontSize: "1.25rem",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 textDecoration: "none",
//                 marginLeft: "64px",
//                 fontFamily: "Inter, sans-serif",
//                 boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.12)",
//                 padding: "12px 32px",
//                 position: "fixed",
//                 top: "17px",
//                 right: "56px",
//                 zIndex: 999,
//                 ...style,
//             }}
//         >
//             <img style={{ marginRight: "16px", height: "24px" }} src="/img/slack.svg" alt="slack" />
//             {children}
//         </Link>
//     )
// }


function NavBar({ className, children }) {
    return (
        <nav
            className={className}
            style={{
                height: "90px",
                background: "#fff",
                position: "fixed",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between", // Adjusted justifyContent
                paddingLeft: "56px",
                paddingRight: "20px", // Adjusted paddingRight
                zIndex: 99,
            }}
        >
            <div style={{ display: "flex", alignItems: "center", minWidth: 310 }}>
                <Logo />
            </div>
            <div>
                <NavLink to="/#features">Features</NavLink>
                <NavLink to="/documentation">Documentation</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <a
                    className="navbar__link_hover_src-pages-index-module"
                    style={{
                        color: "rgb(19, 18, 18)",
                        marginLeft: "32px",
                        marginRight: "32px",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                    }}
                    href="https://saasinfra.substack.com/"
                    target="_blank"
                >
                    Newsletter
                </a>
            </div>
            <div style={{ display: "flex" }}>
                <Gitbutton href="https://github.com/baazhq/baaz">Star on GitHub</Gitbutton>
                <ActionButton href="https://www.launchpass.com/baaz">Join Slack</ActionButton>
            </div>
        </nav>
    )
}

function Logo() {
    return (
        <img
            src="/img/logo.png"
            alt="secure-icon"
            style={{ width: "250px", height: "auto", marginRight: "auto" }}
        />
    )
}

function NavLink({ style, to, children }) {
    return (
        <Link
            className={styles.navbar__link_hover}
            to={to}
            style={{
                color: " #131212",
                marginLeft: "32px",
                marginRight: "32px",
                fontSize: "1.2rem",
                fontWeight: "bold", // Added fontWeight
                ...style,
            }}
        >
            {children}
        </Link>
    )
}
function ActionButton({ className, href, style, children }) {
    return (
        <Link
            className={className}
            href={href}
            style={{
                background: "#fff",
                borderRadius: "28px",
                border: "2px solid #4361ee",
                color: "#4361ee",
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                marginLeft: "16px", // Adjusted marginLeft
                fontFamily: "Inter, sans-serif",
                boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.12)",
                padding: "8px 24px",
                transition: "background 0.3s ease, color 0.3s ease, border-color 0.3s ease",
                ...style,
            }}
            onMouseEnter={(e) => {
                e.target.style.background = "#4361ee"
                e.target.style.color = "#fff"
                e.target.style.borderColor = "#4361ee"
            }}
            onMouseLeave={(e) => {
                e.target.style.background = "#fff"
                e.target.style.color = "#4361ee"
                e.target.style.borderColor = "#4361ee"
            }}
        >
            <img
                style={{ marginRight: "16px", height: "24px" }}
                src="/img/slack.svg"
                alt="join-slack"
            />
            {children}
        </Link>
    )
}

function RequestDemo({ children }) {
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
            {children}
        </div>
    )
}

function RequestDemoButtons({ children }) {
    return <div style={{ display: "flex", gap: "16px" }}>{children}</div>
}

function Title({ children }) {
    return (
        <h1
            style={{
                fontSize: "3rem",
                fontWeight: 800,
                marginBottom: "16px",
                marginTop: "32px",
                color: "#1a202c",
            }}
        >
            {children}
        </h1>
    )
}

function Gitbutton({ className, href, style, children }) {
    return (
        <Link
            className={className}
            href={href}
            style={{
                background: "#fff",
                borderRadius: "28px",
                border: "2px solid #4361ee",
                color: "#4361ee",
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                // marginLeft: "16px", // Adjusted marginLeft
                fontFamily: "Inter, sans-serif",
                boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.12)",
                padding: "8px 24px",
                transition: "background 0.3s ease, color 0.3s ease, border-color 0.3s ease",
                ...style,
            }}
            onMouseEnter={(e) => {
                e.target.style.background = "#4361ee"
                e.target.style.color = "#fff"
                e.target.style.borderColor = "#4361ee"
            }}
            onMouseLeave={(e) => {
                e.target.style.background = "#fff"
                e.target.style.color = "#4361ee"
                e.target.style.borderColor = "#4361ee"
            }}
        >
            <img
                style={{ height: "32px", marginRight: "16px" }}
                src="/img/github-mark.png"
                alt="Star-on-Github"
            />
            {children}
        </Link>
    )
}
