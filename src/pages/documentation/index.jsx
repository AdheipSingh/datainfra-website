import React from "react"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import styles from "./styles.module.css"
import newstyles from "../index.module.css"


export default function Documentation() {
    const { siteConfig } = useDocusaurusContext()

    return (
        <Layout title="BaaZ Docs: All about BaaZ." description="BaaZ Docs.">
            <NavBar className={newstyles.navbar}>
            </NavBar>

            <Main>
                <img src="img/analytics.png" alt="analytics-image" height="163px" style={{ marginTop: '50px' }} />

                <Title>
                    <Purple>BaaZ </Purple> Documentation
                </Title>

                <Services>
                    <Service name="Developer Documentation" icon="docs" />
                    {/* <Service name="Tutorials" icon="pinot" /> */}
                    {/* <Service name="Distributed Systems Operator Interface" icon="dsoiLarge" />
                    <Service name="Operator Runtime" icon="operatorLarge" /> */}
                </Services>
            </Main>
        </Layout>
    )
}

// ** Styled Components

function Purple({ children }) {
    return (
        <span
            style={{
                color: "#4361EE",
            }}
        >
            {children}
        </span>
    )
}

function Service({ name, icon }) {
    return (
        <Link
            to={`/docs/${name.toLowerCase().split(" ").join("-")}`} // converts title to slug
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                textDecoration: "none",
                height: "180px",
                width: "314px",
                fontWeight: 500,
                borderRadius: "40px",
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.16)",
                WebkitBoxShadow: "0px 8px 16px rgba(0, 0, 0, 0.16)",
                MozBoxShadow: "0px 8px 16px rgba(0, 0, 0, 0.16)",
            }}
        >
            <img
                style={{
                    height: "64px",
                    ...(icon === "dsoiLarge" && { marginTop: "12px", marginBottom: "-12px" }),
                }}
                src={`img/${icon}.png`}
                alt={`${icon}-icon`}
            />
            <span
                style={{
                    color: "#131212",
                    fontSize: "1.25rem",
                    lineHeight: "24.38px",
                    textAlign: "center",
                    maxWidth: "210px",
                }}
            >
                {name}
            </span>
        </Link>
    )
}

function Main({ children }) {
    return (
        <main
            style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "50px",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {children}
        </main>
    )
}

function Title({ children }) {
    return (
        <h1
            style={{
                fontSize: "2.5rem",
                maxWidth: "650px",
                textAlign: "center",
                marginTop: "68px",
                lineHeight: "56px",
                color: "#131212",
            }}
        >
            {children}
        </h1>
    )
}

function Services({ children }) {
    return (
        <div
            className={styles.services}
            style={{
                display: "flex",
                marginTop: "60px",
                marginBottom: "200px",
                maxWidth: "800px",
                // width: "100%",
                justifyContent: "space-between",
            }}
        >
            {children}
        </div>
    )
}

function NavBarLogo({ className }) {
    return (
        <span
            className={styles.logo}
            style={{
                position: "fixed",
                top: "26px",
                zIndex: 999,
                left: "150px",
                fontSize: "24px",
                color: "#fff",
            }}
        >
            <b></b> <b></b>
        </span>
    )
}

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
