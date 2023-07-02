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

                {/* Section 1 */}
                <div>
                    <Container>
                        {/* Left decoration */}
                        <img src="/img/leftOrnament.svg" alt="left" />

                        <div
                            style={{ textAlign: "center", marginRight: "10px", marginLeft: "10px" }}
                        >
                            <Title>
                                <Purple>Centralised</Purple> Control Plane for <Purple>SAAS</Purple>{" "}
                                Infrastructure
                            </Title>
                            <p style={{ fontSize: "1.375rem", fontWeight: 500, color: "#000" }}>
                                Unified Management for Shared, Dedicated and BYOC SAAS.
                            </p>

                            <RequestDemo>
                                <form action="https://formspree.io/f/mgebqzok" method="POST">
                                    {/* Hidden message */}
                                    <input
                                        defaultValue="Request for Demo"
                                        name="message"
                                        style={{ display: "none" }}
                                    />
                                    <RequestDemoInput />
                                    <RequestDemoButton>Request for Demo</RequestDemoButton>
                                </form>
                            </RequestDemo>
                        </div>

                        {/* Right decoration */}
                        <img src="/img/rightOrnament.svg" alt="right" />
                    </Container>
                </div>

                {/* Section 2 */}
                {/* <div>
                    <img
                        style={{ maxWidth: "1183px", margin: "auto", display: "block" }}
                        src="/img/landingDiagram.png"
                        alt="diagram"
                    />
                </div> */}
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
                maxWidth: "620px",
                margin: "auto",
                marginTop: "36px",
            }}
        >
            {children}
        </div>
    )
}

function RequestDemoInput() {
    return (
        <input
            placeholder="Type your Email Address..."
            name="email"
            id="email"
            className={styles.input}
            style={{
                maxWidth: 620,
                width: "100%",
                height: 58,
                borderRadius: 36,
                background: "#fff",
                boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.12)",
                border: "none",
                paddingLeft: "30px",
                fontSize: "1rem",
            }}
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
                right: "2px",
                width: "200px",
                height: "55px",
                borderRadius: "36px",
                background: "#4361ee",
                border: "none",
                color: "#fff",
                fontSize: "1rem",
                fontWeight: 700,
                cursor: "pointer",
            }}
            type="submit"
        >
            {children}
        </button>
    )
}

function Title({ children }) {
    return (
        <h1
            style={{
                fontSize: "3.5625rem",
                fontWeight: 500,
                maxWidth: "20ch",
                color: "#131212",
                margin: "auto",
                marginBottom: "16px",
            }}
        >
            {children}
        </h1>
    )
}
