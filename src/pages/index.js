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

                    <ActionButton to="/demo">Book Demo</ActionButton>
                </NavBar>

                {/* Navbar mobile */}
                <NavBar className={styles.navbarMobile}>
                    <div style={{ display: "flex" }}>
                        <Logo />

                        <ActionButton className={styles.actionButton} to="/demo">
                            Book Demo
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
                <div style={{ maxWidth: "1440px", margin: "auto", width: "100%" }}>
                    <Container>
                        <LeftColumn>
                            <Title classname={styles.h1Title}>
                                <span>Control Planes For</span> <Purple>SAAS Infrastructure</Purple>
                            </Title>

                            {/* Secure */}
                            <ServiceContainer>
                                <img src="/img/secure.svg" alt="secure-icon" />

                                <div style={{ marginLeft: "16px" }}>
                                    <H3>Data Security and Privacy:</H3>
                                    <Description>
                                        Complete Data and Network Isolation per Tenant.
                                    </Description>
                                </div>
                            </ServiceContainer>

                            {/* Efficient */}
                            <ServiceContainer>
                                <img src="/img/efficient.svg" alt="efficient-icon" />

                                <div style={{ marginLeft: "16px" }}>
                                    <H3>Application Aware Infrastructure :</H3>
                                    <Description>
                                        No Generic Control Planes, Create Tailored Infra for your application.
                                    </Description>
                                </div>
                            </ServiceContainer>

                            {/* Open */}
                            <ServiceContainer>
                                <img src="/img/open.svg" alt="open-icon" />

                                <div style={{ marginLeft: "16px" }}>
                                    <H3>Mutli Tenant & Multi Cloud :</H3>
                                    <Description>
                                        Portable Infrastructure with physical and logical tenancy.
                                    </Description>
                                </div>
                            </ServiceContainer>

                            {/* BYOA - Bring Your Own Application */}
                            <ServiceContainer>
                                <img src="/img/open.svg" alt="open-icon" />

                                <div style={{ marginLeft: "16px" }}>
                                    <H3>BYOA - Bring Your Own Application:</H3>
                                    <Description>Onboard your app, bundle other apps together and ship on any environment</Description>
                                </div>
                            </ServiceContainer>

                            {/* BYOA - Bring Your Own Application */}
                            <ServiceContainer>
                                <img src="/img/costEffective.svg" alt="cost-effective-icon" />

                                <div style={{ marginLeft: "16px" }}>
                                    <H3>Cost Insights:</H3>
                                    <Description>Cost Insights Per Tenant</Description>
                                </div>
                            </ServiceContainer>

                        </LeftColumn>

                        {/* Right column */}
                        <div style={{ flex: 2, minWidth: "565px" }} className={styles.diagram}>
                            <img src="/img/12.svg" alt="diagram-icon" />
                        </div>
                    </Container>

                    {/* HERO 3 */}
                    {/* <div
                        className={styles.containerHero3}
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
                    </div> */}

                    {/* HERO 4 */}
                    <div
                        className={styles.containerHero4}
                        style={{
                            display: "flex",
                            marginLeft: "55px",
                            marginRight: "55px",
                            marginTop: "120px",
                            justifyContent: "space-between",
                            justifySelf: "center",
                            marginBottom: "90px",
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
                            <div style={{ display: "flex", gap: "16px" }}>
                                <Link href="https://launchpass.com/datainfra-workspace">
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
            className={styles.containerHero1}
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

function Title({ classname, children }) {
    return (
        <h1
            className={classname}
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

function ActionButton({ className, to, children }) {
    return (
        <Link
            className={className}
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
