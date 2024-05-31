import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";


export default function Home() {
    const { siteConfig } = useDocusaurusContext();

    React.useLayoutEffect(() => {
        document.querySelector(".main-wrapper").style.background = "#f4f4f4";
    }, []);

    return (
        <>
            <Layout
                title="Control Plane for SaaS Infrastructure"
                description="Discover the remote control plane and unified management options for your SaaS infrastructure at DataInfra.io. Explore dedicated, shared, and BYOC choices for optimised SaaS infrastructure management with a centralized control plane."
                wrapperClassName={styles.wrapper}
            >
                <NavBar className={styles.navbar}>
                    <Logo />
                    <NavLink to="/blog">Blogs</NavLink>
                    <ActionButton href="https://launchpass.com/datainfra-workspace">
                        Join Slack
                    </ActionButton>
                </NavBar>

                {/* Navbar mobile */}
                {/* Navbar mobile content here */}

                {/* Section 1 */}
                <div>
                    <Container>
                        {/* Left decoration */}
                        <img src="/img/leftOrnament.svg" alt="left" />
                        <div
                            style={{
                                textAlign: "center",
                                marginRight: "10px",
                                marginLeft: "10px",
                            }}
                        >
                            <Title>
                                <Purple>Centralised</Purple> Control Plane for <Purple>SaaS</Purple>
                            </Title>
                            <p
                                style={{ fontSize: "1.375rem", fontWeight: 500, color: "#000" }}
                            >
                                Unified Management Plane for Managed Services, Infra SaaS and
                                Serverless SaaS.
                            </p>

                            <RequestDemo>
                                <RequestDemoButtons>
                                    <Link to="/demo" className={styles.requestDemoButton}>
                                        Book Demo
                                    </Link>
                                    <Link
                                        to="/documentation"
                                        className={styles.requestDemoButton}
                                        style={{ marginRight: "10px" }}
                                    >
                                        Read Docs
                                    </Link>
                                </RequestDemoButtons>
                            </RequestDemo>
                        </div>
                        {/* Right decoration */}
                        <img src="/img/rightOrnament.svg" alt="right" />
                    </Container>
                </div>

                {/* New Section */}
                <div style={{ textAlign: "center", marginTop: "-50px", backgroundColor: "#f4f4f4" }}>
                    <Title>
                        Focus on your <Purple>Product </Purple>Layer
                    </Title>
                    <p
                        style={{
                            fontSize: "1.25rem",
                            fontWeight: 100,
                            marginBottom: "100px",
                            marginTop: "0px",
                            color: "#1a202c",
                        }}
                    >
                        BaaZ Platform streamlines infrastructure setup,
                        reduces costs,<br></br> accelerates GTM and ensures security and compliance.
                    </p>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                        <div style={{ marginRight: "10px" }}>
                            <h3>WITHOUT BAAZ</h3>
                            <img src="/img/saas-layers.png" alt="Without BaaZ" style={{ maxWidth: "700px" }} />
                        </div>
                        <div style={{ marginLeft: "20px" }}>
                            <h3>WITH BAAZ</h3>
                            <img src="/img/saas-layers.png" alt="With BaaZ" style={{ maxWidth: "700px" }} />
                        </div>
                    </div>
                </div>
                {/* Rest of the content... */}
            </Layout>
        </>
    );
}

// ** Styled Components

function Container({ children }) {
    return (
        <div
            className={styles.containerHero1}
            style={{
                padding: "180px 0 210px",
                display: "flex",
                background: " #f4f4f4",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: "180px"
            }}
        >
            {children}
        </div>
    );
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
    );
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
    );
}

function Logo() {
    return (
        <img
            src="/img/logo-text.svg"
            alt="secure-icon"
            style={{ marginRight: "auto" }}
        />
    );
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
    );
}

function Screen2() {
    return (
        <div style={{ backgroundColor: "rgba(244, 244, 244, 0.5)", paddingTop: "50px" }}>
            <div style={{ textAlign: "center" }}>
                <Title>
                    Focus on your <Purple>Product </Purple>Layer
                </Title>
                <p
                    style={{
                        fontSize: "1.25rem",
                        fontWeight: 100,
                        marginBottom: "100px",
                        marginTop: "0px",
                        color: "#1a202c",
                    }}
                >
                    BaaZ Platform streamlines infrastructure setup,
                    reduces costs,<br></br> accelerates GTM and ensures security and compliance.
                </p>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                    <div style={{ marginRight: "10px" }}>
                        <h3>WITHOUT BAAZ</h3>
                        <img src="/img/saas-layers.png" alt="Without BaaZ" style={{ maxWidth: "700px" }} />
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <h3>WITH BAAZ</h3>
                        <img src="/img/saas-layers.png" alt="With BaaZ" style={{ maxWidth: "700px" }} />
                    </div>
                </div>
            </div>
        </div>
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
                fontSize: "1.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                marginLeft: "64px",
                fontFamily: "Inter, sans-serif",
                boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.12)",
                padding: "12px 32px",
                transition: "background 0.3s ease, color 0.3s ease",
                ...style,
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


function RequestDemo({ children }) {
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
            {children}
        </div>
    );
}

function RequestDemoButtons({ children }) {
    return (
        <div style={{ display: "flex", gap: "16px" }}>
            {children}
        </div>
    );
}

function Title({ children }) {
    return (
        <h1
            style={{
                fontSize: "3rem",
                fontWeight: 700,
                marginBottom: "16px",
                marginTop: "32px",
                color: "#1a202c",
            }}
        >
            {children}
        </h1>
    );
}

