import React, { useState } from "react";
import BlogPostItem from "@theme-original/BlogPostItem";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import Layout from "@theme/Layout";

export default function BlogPostItemWrapper(props) {
    React.useEffect(() => {
        const navbar = document.querySelector('.navbar__items');
        if (navbar) {
            navbar.classList.add('navbar__items--left');
        }
    }, []);

    return (
        <>

            <NavBar className={styles.navbar} />
            <div style={{ marginTop: '90px' }}>
                <BlogPostItem {...props} />
            </div>

        </>
    );
}

function NavBar({ className }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={`${className} v-navbar`}>
            <Logo />
            <div className="v-links">
                {/* <NavLink to="/#features">Features</NavLink> */}
                {/* <NavLink to="/documentation">Documentation</NavLink> */}
                <NavLink to="/blog">Blog</NavLink>
                {/* <NavLink to="/services">Services</NavLink> */}
                <a
                    className="navbar__link_hover_src-pages-index-module"
                    style={{
                        color: "rgb(19, 18, 18)",
                        marginLeft: "16px", /* Adjust margins to your preference */
                        marginRight: "16px",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                    }}
                    href="https://saasinfra.substack.com/"
                    target="_blank"
                >
                    Newsletter
                </a>
            </div>
            <div className="v-social-links">
                {/* <Gitbutton href="https://github.com/baazhq/baaz">
                    <span>Star on GitHub</span>
                </Gitbutton>
                <ActionButton href="https://www.launchpass.com/baaz">
                    <span>Join Slack</span>
                </ActionButton> */}
            </div>
            <button onClick={() => setIsOpen(true)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="32"
                    height="32"
                    viewBox="0 0 50 50"
                >
                    <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                </svg>
            </button>
            {isOpen && (
                <div className="v-navbar_phone">
                    <div className="v-links_phone">
                        <span onClick={() => setIsOpen(false)}>&#10006;</span>
                        {/* <NavLink to="/#features">Features</NavLink>
                        <NavLink to="/documentation">Documentation</NavLink> */}
                        {/* <NavLink to="/services">Services</NavLink> */}
                        <NavLink to="/blog">Blog</NavLink>
                        <a
                            className="navbar__link_hover_src-pages-index-module"
                            style={{
                                color: "rgb(19, 18, 18)",
                                marginLeft: "16px",
                                marginRight: "16px",
                                fontSize: "1.2rem",
                                fontWeight: "bold",
                            }}
                            href="https://saasinfra.substack.com/"
                            target="_blank"
                        >
                            Newsletter
                        </a>
                    </div>
                    <div className="v-social-links_phone">
                        {/* <Gitbutton href="https://github.com/baazhq/baaz">
                            <span>Star on GitHub</span>
                        </Gitbutton>
                        <ActionButton href="https://www.launchpass.com/baaz">
                            <span>Join Slack</span>
                        </ActionButton> */}
                    </div>
                </div>
            )}
        </nav>
    );
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
                color: "#131212",
                marginLeft: "16px", /* Adjust margins to your preference */
                marginRight: "16px",
                fontSize: "1.2rem",
                fontWeight: "bold",
                ...style,
            }}
        >
            {children}
        </Link>
    );
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
                fontFamily: "Inter, sans-serif",
                boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.12)",
                padding: "8px 24px",
                transition: "background 0.3s ease, color 0.3s ease, border-color 0.3s ease",
                gap: "16px",
                ...style,
            }}
            onMouseEnter={(e) => {
                e.target.style.background = "#4361ee";
                e.target.style.color = "#fff";
                e.target.style.borderColor = "#4361ee";
            }}
            onMouseLeave={(e) => {
                e.target.style.background = "#fff";
                e.target.style.color = "#4361ee";
                e.target.style.borderColor = "#4361ee";
            }}
        >
            <img
                style={{ marginRight: "16px", height: "24px" }}
                src="/img/slack.svg"
                alt="join-slack"
            />
            {children}
        </Link>
    );
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
                marginLeft: "16px", // Adjusted marginLeft
                fontFamily: "Inter, sans-serif",
                boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.12)",
                padding: "8px 24px",
                transition: "background 0.3s ease, color 0.3s ease, border-color 0.3s ease",
                gap: "16px",
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
