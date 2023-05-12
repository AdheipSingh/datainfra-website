import React from "react"
import Link from "@docusaurus/Link"
import { useLocation } from "@docusaurus/router"

export default function DocMainSection({ children }) {
    return (
        <Container>
            <HeroBackground />

            <ContentWrapper>
                <Title>{children[0]}</Title>

                <Content>{children[1]}</Content>
            </ContentWrapper>

            <Pages>
                <Page name="Documentation" icon="document" />
                <Page name="Tutorials" icon="docs" />
                <Page name="Installation" icon="download" />
            </Pages>
        </Container>
    )
}

// ** Styled Components
function Container({ children }) {
    return (
        <div style={{ position: "relative", marginTop: "50px", marginLeft: "50px" }}>
            {children}
        </div>
    )
}

function HeroBackground() {
    return (
        <img
            src="/img/doc-hero-background.svg"
            alt="doc-hero-background"
            style={{ position: "absolute", zIndex: -1 }}
        />
    )
}

function ContentWrapper({ children }) {
    return <div style={{ height: "280px" }}>{children}</div>
}

function Title({ children }) {
    return (
        <h1
            style={{
                paddingTop: "40px",
                paddingLeft: "42px",
                fontSize: "2.5rem",
                color: "#111",
            }}
        >
            {children}
        </h1>
    )
}

export function Purple({ children }) {
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

function Content({ children }) {
    return (
        <p
            style={{
                paddingLeft: "50px",
                maxWidth: "53ch",
                color: "#111",
                lineHeight: "22px",
            }}
        >
            {children}
        </p>
    )
}

function Pages({ children }) {
    return (
        <div
            style={{
                display: "flex",
                marginTop: "80px",
                marginBottom: "200px",
                maxWidth: "935px",
                width: "100%",
                justifyContent: "space-between",
            }}
        >
            {children}
        </div>
    )
}

function Page({ name, icon }) {
    const { pathname } = useLocation()

    return (
        <Link
            to={pathname + "/" + name.toLowerCase()}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                textDecoration: "none",
                height: "180px",
                width: "295px",
                borderRadius: "40px",
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.16)",
                WebkitBoxShadow: "0px 8px 16px rgba(0, 0, 0, 0.16)",
                MozBoxShadow: "0px 8px 16px rgba(0, 0, 0, 0.16)",
            }}
        >
            <img src={`/img/${icon}.png`} alt={`${icon}-icon`} style={{ height: "32px" }} />
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
