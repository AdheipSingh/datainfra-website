import React from "react"
import BlogPostItem from "@theme-original/BlogPostItem"
import Link from "@docusaurus/Link"
import styles from "../../pages/index.module.css"
import Layout from "@theme/Layout"

export default function BlogPostItemWrapper(props) {
    React.useEffect(() => {
        // Delete default content: Dropdown and logo
        // document.querySelector(".navbar__items > a").style.display = "none"
        // document.querySelector(".navbar__items > div").style.display = "none"

        // Prepare img element with new logo
        const imgElement = document.createElement("img")
        //  imgElement.src = "/img/logo-text-light.svg"
        //  imgElement.alt = "logo"

        // Append the img element to nav element
        //   document.querySelector(".navbar__items").appendChild(imgElement)

        // Add padding to right side to make room for Join Slack
        // document.querySelector(".navbar__items.navbar__items--right").style.marginRight = "290px"
    }, [])

    return (

        <>
            {/* <Layout> */}
            <NavBar className={styles.navbar}>
            </NavBar>

            <div style={{ marginTop: "50px" }}> {/* Adjust this value as needed */}
                <BlogPostItem {...props} />
            </div>
            {/* </Layout> */}
        </>
    )
}

function NavBar({ className, children }) {
    return (
        <nav
            className={className}
            style={{
                height: "90px",
                top: "-10px",
                background: "#fff",
                position: "fixed",
                width: "100%",
                display: "flex",
                justifyContent: "center", // Center the content
                zIndex: 99,
            }}
        >
            <div
                style={{
                    width: "100%", // Set width to full
                    maxWidth: "1200px", // Set a maximum width to avoid stretching
                    display: "flex",
                    alignItems: "center",
                    // justifyContent: "left", // Evenly distribute items
                    paddingLeft: "56px",
                    paddingRight: "2060px", // Adjusted padding for even spacing
                }}
            >
                <div style={{ display: "flex", alignItems: "center", minWidth: 310 }}>
                    <Logo />
                </div>
                <div>
                    <NavLink to="/">Home</NavLink>
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
            </div>
        </nav>
    )
}

function Logo() {
    return (
        <Link to="/">
            <img
                src="/img/logo.png"
                alt="secure-icon"
                style={{ width: "250px", height: "auto", marginRight: "auto" }}
            />
        </Link>
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
                borderRadius: "24px",
                border: "2px solid #4361ee",
                color: "#4361ee",
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                marginLeft: "16px",
                fontFamily: "Inter, sans-serif",
                boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.12)",
                padding: "8px 16px",
                whiteSpace: "nowrap", // Prevent line breaks
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
                style={{ marginRight: "8px", height: "20px" }}
                src="/img/slack.svg"
                alt="join-slack"
            />
            {children}
        </Link>
    )
}

function Gitbutton({ className, href, style, children }) {
    return (
        <Link
            className={className}
            href={href}
            style={{
                background: "#fff",
                borderRadius: "24px",
                border: "2px solid #4361ee",
                color: "#4361ee",
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                fontFamily: "Inter, sans-serif",
                boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.12)",
                padding: "8px 16px",
                whiteSpace: "nowrap", // Prevent line breaks
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
                style={{ height: "24px", marginRight: "8px" }}
                src="/img/github-mark.png"
                alt="Star-on-Github"
            />
            {children}
        </Link>
    )
}