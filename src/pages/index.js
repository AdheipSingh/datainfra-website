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

                    <NavLink to="/documentation">Documentation</NavLink>

                    <NavLink to="/blog">Blogs</NavLink>

                    <ActionButton to="/demo">Book Demo</ActionButton>
                </NavBar>

                <Container>
                    <LeftColumn>
                        <Title>
                            Control Planes for <Purple>Real-Time Analytics</Purple> Infrastructure
                        </Title>

                        {/* Secure */}
                        <ServiceContainer>
                            <img src="/img/secure.svg" alt="secure-icon" />

                            <div style={{ marginLeft: "16px" }}>
                                <H3>Secure:</H3>
                                <Description>
                                    Keep your data within your network by building an internal cloud
                                    data plaform.
                                </Description>
                            </div>
                        </ServiceContainer>

                        {/* Efficient */}
                        <ServiceContainer>
                            <img src="/img/efficient.svg" alt="efficient-icon" />

                            <div style={{ marginLeft: "16px" }}>
                                <H3>Efficient:</H3>
                                <Description>
                                    Streamline your data management with kubernetes native features.
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
                maxWidth: "1440px",
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
                fontWeight: 700,
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
