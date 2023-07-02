import React from "react"
import Layout from "@theme/Layout"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Link from "@docusaurus/Link"
import styles from "./index.module.css"

export default function Home() {
    const { siteConfig } = useDocusaurusContext()

    React.useLayoutEffect(() => {
        document.querySelector(".main-wrapper").style.background = "#f4f4f4"
    }, [])

    return (
        <>
            <Layout
                title={`${siteConfig.title}`}
                description="Control Planes for SAAS Infrastructure"
                wrapperClassName={styles.wrapper}
            >
                <NavBar className={styles.navbar}>
                    <Logo />

                    <NavLink to="/documentation">OSS</NavLink>

                    <NavLink to="/blog">Blogs</NavLink>

                    <ActionButton href="https://launchpass.com/datainfra-workspace">
                        Join Slack
                    </ActionButton>
                </NavBar>

                {/* Navbar mobile */}
                <NavBar className={styles.navbarMobile}>
                    <div style={{ display: "flex" }}>
                        <Logo />

                        <ActionButton
                            className={styles.actionButton}
                            href="https://launchpass.com/datainfra-workspace"
                        >
                            Join Slack
                        </ActionButton>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <NavLink
                            style={{ marginLeft: 0 }}
                            to="https://github.com/orgs/datainfrahq/repositories"
                        >
                            Github
                        </NavLink>

                        <NavLink style={{ marginLeft: 0 }} to="/documentation">
                            Documentation
                        </NavLink>

                        <NavLink style={{ marginLeft: 0 }} to="/blog">
                            Blogs
                        </NavLink>
                    </div>
                </NavBar>

                {/* HERO 1 */}
                <div>
                    <Container>
                        {/* Left decoration */}
                        <img src="/img/heroLeft.svg" alt="left" />

                        <div
                            style={{ textAlign: "center", marginRight: "10px", marginLeft: "10px" }}
                        >
                            <h1 style={{ fontSize: "4.5rem", fontWeight: 500, color: "#131212" }}>
                                <Purple>Centralised</Purple> Control Plane for <Purple>SAAS</Purple> Infrastructure
                            </h1>
                            <p style={{ fontSize: "1.75rem", fontWeight: 500, color: "#000" }}>
                                Unified Management for Shared, Dedicated and BYOC SAAS.
                            </p>

                            <RequestDemo>
                                <RequestDemoInput
                                    placeholder="Type your Email Address..."
                                    name="email"
                                    id="email"
                                />
                                <RequestDemoButton>Request for Demo</RequestDemoButton>
                            </RequestDemo>
                        </div>

                        {/* Right decoration */}
                        <img src="/img/heroRight.svg" alt="right" />
                    </Container>
                </div>
            </Layout>
        </>
    )
}

// ** Styled Components

function Container({ children }) {
    return (
        <div
            className={styles.containerHero1}
            style={{
                padding: "180px 0 160px",
                display: "flex",
                background: " #f4f4f4",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            {children}
        </div>
    )
}

function Purple({ children }) {
    return (
        <span
            style={{
                backgroundImage: "linear-gradient(to right,#5573FF, #002DFF)",
                WebkitBackgroundClip: "text",
                MozBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
            }}
        >
            {children}
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
                paddingLeft: "56px",
                paddingRight: "56px",
                marginRight: "auto",
                zIndex: 99,
            }}
        >
            {children}
        </nav>
    )
}

function Logo() {
    return <img src="/img/logo-text.svg" alt="secure-icon" style={{ marginRight: "auto" }} />
}

function NavLink({ style, to, children }) {
    return (
        <Link
            className={styles.navbar__link_hover}
            to={to}
            style={{
                color: " #131212",
                marginLeft: "64px",
                fontSize: "1.125rem",
                ...style,
            }}
        >
            {children}
        </Link>
    )
}

function ActionButton({ className, href, children }) {
    return (
        <Link
            className={className}
            href={href}
            style={{
                background: "#fff",
                borderRadius: "28px",
                border: "none",
                color: "#000",
                fontSize: "1.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                marginLeft: "64px",
                fontFamily: "Inter, sans-serif",
                boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.12)",
                padding: "12px 32px",
            }}
        >
            <img style={{ marginRight: "16px", height: "24px" }} src="/img/slack.svg" alt="slack" />
            {children}
        </Link>
    )
}

function RequestDemo({ children }) {
    return (
        <div
            style={{
                position: "relative",
                maxWidth: "780px",
                margin: "auto",
                marginTop: "46px",
            }}
        >
            {children}
        </div>
    )
}

function RequestDemoInput(props) {
    return (
        <input
            className={styles.input}
            style={{
                maxWidth: 780,
                width: "100%",
                height: 72,
                borderRadius: 36,
                background: "#fff",
                boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.12)",
                border: "none",
                paddingLeft: "30px",
                fontSize: "1.25rem",
            }}
            {...props}
        />
    )
}

function RequestDemoButton({ children }) {
    return (
        <button
            style={{
                position: "absolute",
                right: "0px",
                transform: "translateY(-50%)",
                top: "50%",
                right: "4px",
                width: "244px",
                height: "64px",
                borderRadius: "36px",
                background: "#4361ee",
                border: "none",
                color: "#fff",
                fontSize: "1.25rem",
                fontWeight: 700,
                cursor: "pointer",
            }}
            type="submit"
        >
            {children}
        </button>
    )
}
