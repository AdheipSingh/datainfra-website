import React from "react"
import Layout from "@theme/Layout"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Link from "@docusaurus/Link"
import styles from "./index.module.css"

export default function Home() {
    const { siteConfig } = useDocusaurusContext()

    React.useLayoutEffect(() => {
        // Hide navbar
        document.querySelector(".navbar").style.display = "none"
    }, [])

    return (
        <>
            <Layout
                title={`${siteConfig.title}`}
                description="Control Planes for Real-Time Analytics Infrastructure"
                wrapperClassName={styles.wrapper}
            >
                <NavBar>
                    <Logo />

                    <NavLink to="https://github.com/orgs/datainfrahq/repositories">Github</NavLink>

                    <NavLink to="/documentation">Documentation</NavLink>

                    <NavLink to="/blog">Blogs</NavLink>

                    <ActionButton to="/demo">Book Demo</ActionButton>
                </NavBar>

                {/* HERO 1 */}
                <div style={{ maxWidth: "1440px", margin: "auto" }}>
                    <Container>
                        <LeftColumn>
                            <Title>
                                <span style={{ display: "block" }}>Kubernetes</span> Control Planes
                                For <Purple>Real-Time Analytics Infrastructure</Purple>
                            </Title>

                            {/* Secure */}
                            <ServiceContainer>
                                <img src="/img/secure.svg" alt="secure-icon" />

                                <div style={{ marginLeft: "16px" }}>
                                    <H3>Secure:</H3>
                                    <Description>
                                        Keep your data within your network by building an internal
                                        cloud data platform.
                                    </Description>
                                </div>
                            </ServiceContainer>

                            {/* Efficient */}
                            <ServiceContainer>
                                <img src="/img/efficient.svg" alt="efficient-icon" />

                                <div style={{ marginLeft: "16px" }}>
                                    <H3>Efficient:</H3>
                                    <Description>
                                        Streamline your data management with kubernetes native
                                        features.
                                    </Description>
                                </div>
                            </ServiceContainer>

                            {/* Open */}
                            <ServiceContainer>
                                <img src="/img/open.svg" alt="open-icon" />

                                <div style={{ marginLeft: "16px" }}>
                                    <H3>Open:</H3>
                                    <Description>
                                        Utilize open source data analytics for flexibility and
                                        transparency.
                                    </Description>
                                </div>
                            </ServiceContainer>

                            {/* Cost-Effective */}
                            <ServiceContainer>
                                <img src="/img/costEffective.svg" alt="cost-effective-icon" />

                                <div style={{ marginLeft: "16px" }}>
                                    <H3>Cost-Effective:</H3>
                                    <Description>Avoid costly SAAS vendors.</Description>
                                </div>
                            </ServiceContainer>
                        </LeftColumn>

                        {/* Right column */}
                        <div style={{ flex: 2, minWidth: "565px" }}>
                            <img src="/img/diagram.svg" alt="diagram-icon" />
                        </div>
                    </Container>

                    {/* HERO 2 */}
                    <div
                        style={{
                            background: "linear-gradient(108.31deg, #E9EDFF 0%, #E6F4FF 100%)",
                            borderRadius: "32px",
                            paddingTop: "48px",
                            paddingBottom: "2px",
                            margin: "56px",
                            marginTop: 0,
                        }}
                    >
                        <h2
                            style={{
                                textAlign: "center",
                                fontWeight: 800,
                                fontSize: "3rem",
                                paddingRight: "10px",
                                paddingLeft: "10px",
                            }}
                        >
                            Choose Your Own <Purple>Real-Time Analytics</Purple> Database
                        </h2>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-around",
                                marginTop: "36px",
                                paddingRight: "20px",
                                paddingLeft: "20px",
                            }}
                        >
                            {/* Left */}
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-end",
                                }}
                            >
                                <img
                                    src="/img/pinotLarge.svg"
                                    alt="pinot-large"
                                    style={{ marginRight: "auto" }}
                                />
                                <p
                                    style={{
                                        fontSize: "1.5rem",
                                        fontWeight: 600,
                                        marginTop: "16px",
                                    }}
                                >
                                    Apache Pinot on Kubernetes
                                </p>
                            </div>

                            {/* Right */}
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    // alignItems: "flex-end",
                                }}
                            >
                                <img
                                    src="/img/druidLarge.svg"
                                    alt="pinot-large"
                                    style={{ marginRight: "auto" }}
                                />
                                <p
                                    style={{
                                        fontSize: "1.5rem",
                                        fontWeight: 600,
                                        marginTop: "16px",
                                    }}
                                >
                                    Apache Druid on Kubernetes
                                </p>
                            </div>
                        </div>

                        <h3
                            style={{
                                fontSize: "3rem",
                                fontWeight: "800",
                                textAlign: "center",
                                marginTop: "20px",
                            }}
                        >
                            We build Infra , You drive Insights
                        </h3>

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-around",
                                marginTop: "50px",
                                marginBottom: "70px",
                            }}
                        >
                            <div style={{ display: "flex", width: "auto", alignItems: "center" }}>
                                <img src="/img/checkPurple.svg" alt="checkmark" />
                                <span style={{ marginLeft: "16px" }}>
                                    Stay in control of your Data
                                </span>
                            </div>

                            <div style={{ display: "flex", width: "auto", alignItems: "center" }}>
                                <img src="/img/checkPurple.svg" alt="checkmark" />
                                <span style={{ marginLeft: "16px" }}>100% Open Source</span>
                            </div>

                            <div style={{ display: "flex", width: "auto", alignItems: "center" }}>
                                <img src="/img/checkPurple.svg" alt="checkmark" />
                                <span style={{ marginLeft: "16px" }}>Zero Vendor Locks</span>
                            </div>
                        </div>
                    </div>

                    {/* HERO 3 */}
                    <div
                        style={{
                            background: "linear-gradient(272.55deg, #001EAA 0%, #0023CA 100%)",
                            borderRadius: "32px",
                            color: "#fff",
                            display: "flex",
                            flexDirection: "column",
                            position: "relative",
                            height: "280px",
                            paddingTop: "64px",
                            paddingLeft: "55px",
                            margin: "56px",
                            maxWidth: "1440px",
                            marginTop: "96px",
                        }}
                    >
                        <span style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                            Are You Interested?
                        </span>
                        <span style={{ fontSize: "1.5rem", fontWeight: 900, lineHeight: 1 }}>
                            Our Control Planes are easy to deploy. Try it out Today !
                        </span>
                        <Link to="https://github.com/orgs/datainfrahq/repositories">
                            <button
                                style={{
                                    width: "240px",
                                    height: "64px",
                                    borderRadius: "40px",
                                    background: "#fff",
                                    marginTop: "32px",
                                    color: "#4361EE",
                                    fontSize: "20px",
                                    fontWeight: 600,
                                    border: "none",
                                    cursor: "pointer",
                                }}
                            >
                                Get Started
                            </button>
                        </Link>
                        <img
                            style={{ position: "absolute", right: "24px", top: "24px" }}
                            src="/img/infraGroup.svg"
                            alt="infra-group-logo"
                        />
                    </div>

                    {/* HERO 4 */}
                    <div
                        style={{
                            display: "flex",
                            marginLeft: "55px",
                            marginRight: "55px",
                            marginTop: "120px",
                            justifyContent: "space-between",
                            maxWidth: "1440px",
                            justifySelf: "center",
                        }}
                    >
                        {/* Left side */}
                        <div>
                            <h3
                                style={{
                                    fontSize: "3.5rem",
                                    fontWeight: 800,
                                    marginTop: "96px",
                                }}
                            >
                                Community
                            </h3>
                            <p
                                style={{
                                    fontSize: "1.5rem",
                                    maxWidth: "500px",
                                    marginTop: "20px",
                                    lineHeight: "1.25",
                                    marginBottom: "40px",
                                }}
                            >
                                DataInfra is built on the principles of open and free software. Join
                                our global community of contributors, developers, and enthusiasts on
                                Slack and GitHub
                            </p>
                            <div style={{ display: "flex" }}>
                                <Link href="https://app.slack.com/">
                                    <button
                                        style={{
                                            width: "240px",
                                            height: "64px",
                                            borderRadius: "40px",
                                            border: "none",
                                            background: "#4361EE",
                                            color: "white",
                                            fontWeight: 600,
                                            fontSize: "1.25rem",
                                            cursor: "pointer",
                                        }}
                                    >
                                        Join Slack
                                    </button>
                                </Link>
                                <Link href="https://github.com/orgs/datainfrahq/repositories">
                                    <button
                                        style={{
                                            width: "240px",
                                            height: "64px",
                                            borderRadius: "40px",
                                            border: "1px solid #4361ee",
                                            marginLeft: "16px",
                                            background: "#f4f4f4",
                                            color: "#4361EE",
                                            fontWeight: 600,
                                            fontSize: "1.25rem",
                                            cursor: "pointer",
                                        }}
                                    >
                                        Star On Github
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Chart */}
                        <img style={{ height: "507px" }} src="/img/community.png" alt="community" />
                    </div>
                </div>
            </Layout>
        </>
    )
}

// ** Styled Components

function Container({ children }) {
    return (
        <div
            className={styles.wrapper}
            style={{
                padding: "180px 56px 95px 56px",
                display: "flex",
                gap: "40px",
                margin: "auto",
                background: " #f4f4f4",
            }}
        >
            {children}
        </div>
    )
}

function Title({ children }) {
    return (
        <h1
            style={{
                fontWeight: 800,
                fontSize: "2.5rem",
                lineHeight: "48.76px",
                letterSpacing: "0.04em",
                color: "#131212",
                maxWidth: "450px",
            }}
        >
            {children}
        </h1>
    )
}

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

function H3({ children }) {
    return (
        <h3
            style={{
                marginBottom: "0",
                fontSize: "1.25rem",
            }}
        >
            {children}
        </h3>
    )
}

function Description({ children }) {
    return (
        <p
            style={{
                fontSize: "1.25rem",
                color: "#5c5c5c",
                lineHeight: "24.38px",
                marginTop: "4px",
                marginBottom: 0,
                maxWidth: "450px",
            }}
        >
            {children}
        </p>
    )
}

function ServiceContainer({ children }) {
    return <div style={{ display: "flex", marginTop: "56px" }}>{children}</div>
}

function LeftColumn({ children }) {
    return <div style={{ flex: 1 }}>{children}</div>
}

function NavBar({ children }) {
    return (
        <nav
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

function NavLink({ to, children }) {
    return (
        <Link
            className={styles.navbar__link_hover}
            to={to}
            style={{
                color: " #131212",
                marginLeft: "64px",
                fontSize: "1.125rem",
            }}
        >
            {children}
        </Link>
    )
}

function ActionButton({ to, children }) {
    return (
        <Link
            to={to}
            style={{
                height: "56px",
                width: "223px",
                background: "#4361ee",
                borderRadius: "40px",
                border: "none",
                color: "#fff",
                fontWeight: 600,
                fontSize: "1.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                marginLeft: "64px",
            }}
        >
            {children}
        </Link>
    )
}
