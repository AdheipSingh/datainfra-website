import React from "react"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Footer from "@theme-original/Footer"
// import styles from "./index.module.css"
import Link from "@docusaurus/Link"

export default function Home() {
    return (
        <>
            <NavBar>
                <Logo />

                <NavLink to="/blog">Blogs</NavLink>

                <NavLink to="/">Home</NavLink>
            </NavBar>

            <Main>
                <img src="img/analytics.png" alt="analytics-image" height="163px" />

                <Title>
                    Accelerate <Purple>Real Time Analytics</Purple> Infrastructure on Kubernetes
                </Title>    

                <Services>
                    <Service name="Druid On Kubernetes" icon="druid" />
                    <Service name="Pinot On Kubernetes" icon="pinot" />
                    <Service name="Distributed Systems Operator Interface" icon="dsoi" />
                    <Service name="Operator Runtime" icon="operator" />
                </Services>
            </Main>

            <Footer />
        </>
    )
}

// ** Styled Components
function NavBar({ children }) {
    return (
        <nav
            style={{
                height: "112px",
                background: "#001EAA",
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

function NavLink({ to, children }) {
    return (
        <Link
            to={to}
            style={{
                color: "#fff",
                marginLeft: "64px",
                fontSize: "1.25rem",
            }}
        >
            {children}
        </Link>
    )
}

function Logo() {
    return <img src="/img/logo-developer.svg" alt="secure-icon" style={{ marginRight: "auto" }} />
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

function Service({ name, icon }) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                height: "180px",
                width: "314px",
                borderRadius: "40px",
                boxShadow: "-1px 1px 7px -1px rgba(0,0,0,0.75)",
                WebkitBoxShadow: "-1px 1px 7px -1px rgba(0,0,0,0.75)",
                MozBoxShadow: "-1px 1px 7px -1px rgba(0,0,0,0.75)",
            }}
        >
            <img src={`img/${icon}.png`} alt={`${icon}-icon`} />
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
        </div>
    )
}

function Main({ children }) {
    return (
        <main
            style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "189px",
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
            style={{
                display: "flex",
                marginTop: "88px",
                marginBottom: "200px",
                maxWidth: "1328px",
                width: "100%",
                justifyContent: "space-between",
            }}
        >
            {children}
        </div>
    )
}
