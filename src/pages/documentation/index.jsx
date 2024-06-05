import React from "react"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import styles from "./styles.module.css"

export default function Documentation() {
    const { siteConfig } = useDocusaurusContext()

    return (
        <Layout
            title="BaaZ Docs: All about BaaZ."
            description="BaaZ Docs."
        >
            <NavBarLogo />

            <Main>
                <img src="img/analytics.png" alt="analytics-image" height="163px" />

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
        </Layout >
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
                width: "100%",
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
