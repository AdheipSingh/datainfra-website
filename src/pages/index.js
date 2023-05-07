import React from "react"
import Layout from "@theme/Layout"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import styles from "./index.module.css"

export default function Home() {
    const { siteConfig } = useDocusaurusContext()

    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Control Planes for Running Data Analytics"
            wrapperClassName={styles.wrapper}
        >
            <Container>
                <LeftColumn>
                    <Title>
                        Control Planes For <Purple>Data Analytics</Purple>
                    </Title>

                    {/* Secure */}
                    <ServiceContainer>
                        <img src="/img/secure.svg" alt="secure-icon" />

                        <div style={{ marginLeft: "16px" }}>
                            <H3>Secure:</H3>
                            <Description>
                                Keep your data within your network.
                            </Description>
                        </div>
                    </ServiceContainer>

                    {/* Efficient */}
                    <ServiceContainer>
                        <img src="/img/efficient.svg" alt="efficient-icon" />

                        <div style={{ marginLeft: "16px" }}>
                            <H3>Efficient:</H3>
                            <Description>
                                Streamline your data management with kubernetes
                                native features.
                            </Description>
                        </div>
                    </ServiceContainer>

                    {/* Open */}
                    <ServiceContainer>
                        <img src="/img/open.svg" alt="open-icon" />

                        <div style={{ marginLeft: "16px" }}>
                            <H3>Open:</H3>
                            <Description>
                                Utilize open source data analytics for
                                flexibility and transparency.
                            </Description>
                        </div>
                    </ServiceContainer>

                    {/* Cost-Effective */}
                    <ServiceContainer>
                        <img
                            src="/img/costEffective.svg"
                            alt="cost-effective-icon"
                        />

                        <div style={{ marginLeft: "16px" }}>
                            <H3>Cost-Effective:</H3>
                            <Description>
                                Avoid costly SAAS vendors.
                            </Description>
                        </div>
                    </ServiceContainer>
                </LeftColumn>

                {/* Right column */}
                <div
                    style={{ flex: 1, background: "wheat", width: "800px" }}
                ></div>
            </Container>
        </Layout>
    )
}

// ** Styled Components

function Container({ children }) {
    return (
        <div
            style={{
                padding: "95px 56px",
                display: "flex",
                gap: "40px",
                maxWidth: "1440px",
                margin: "auto",
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
                maxWidth: "500px",
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
