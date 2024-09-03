import React, { useState } from "react"
import Layout from "@theme/Layout"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Link from "@docusaurus/Link"
import styles from "./index.module.css"

export default function Home() {
    const { siteConfig } = useDocusaurusContext()

    React.useLayoutEffect(() => {
        document.querySelector(".main-wrapper").style.background = "#f4f4f4"
    }, [])

    // const [email, setEmail] = React.useState("")
    // const [error, setError] = React.useState("")

    // const validateEmail = (email) => {
    //     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    //     return emailPattern.test(email)
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     if (validateEmail(email)) {
    //         setError("")
    //         e.target.submit()
    //     } else {
    //         setError("Please enter a valid email address.")
    //     }
    // }

    return (
        <>
            <Layout
                title="Control Plane for SaaS"
                description="Centralised control plane and unified management options for SaaS infrastructure. Build managed services, infra saas, and serverless choices for SaaS infrastructure management."
                wrapperClassName={styles.wrapper}
            >
                <NavBar className={styles.navbar} />

                <Container>
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
                        <p style={{ fontSize: "1.25rem", fontWeight: 500, color: "#000" }}>
                            Unified Management Plane for Managed Services, Infra SaaS and Serverless
                            SaaS.
                        </p>

                        <RequestDemo>
                            <RequestDemoButtons>
                                <Link
                                    to="https://cal.com/baazhq"
                                    className={styles.requestDemoButton}
                                >
                                    Book a Call{" "}
                                    <div className={styles.arrowContainer}>
                                        <img src="/img/arrow_forward.svg" className="img-fluid" />
                                    </div>
                                </Link>
                                <Link to="/documentation" className={styles.requestDemoButton}>
                                    Read Docs
                                </Link>
                            </RequestDemoButtons>
                        </RequestDemo>
                    </div>
                    <img src="/img/rightOrnament.svg" alt="right" />
                </Container>

                {/* New Section */}
                <div style={{ textAlign: "center", backgroundColor: "#f4f4f4" }}>
                    <Title>
                        Accelerate your <Purple>SaaS </Purple>Journey
                    </Title>
                    <p
                        style={{
                            fontSize: "1.25rem",
                            fontWeight: 100,
                            marginBottom: "20px",
                            marginTop: "0px",
                            color: "#1a202c",
                        }}
                    >
                        BaaZ Platform streamlines infrastructure setup, reduces costs,<br></br>{" "}
                        accelerates GTM and ensures security and compliance.
                    </p>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                        <div
                            style={
                                {
                                    // border: "2px solid #FFD700", // gold border
                                    // borderRadius: "10px", // rounded corners
                                    // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // subtle shadow for highlighting
                                    // overflow: "hidden" // hide overflow content
                                }
                            }
                        >
                            <img
                                src="/img/indeximage.png"
                                alt="Without BaaZ"
                                className="img-fluid"
                            />
                        </div>
                    </div>

                    {/* Features Title */}
                    <h1
                        id="features"
                        style={{
                            marginTop: "48px",
                            marginBottom: "20px",
                            fontWeight: 800,
                            fontSize: "2.5rem",
                        }}
                    >
                        Deploy on any K8s cluster on cloud or on-prem. <br />
                        Launch <Purple>Dataplanes</Purple>, Create <Purple>Tenants</Purple> and
                        Deploy <Purple>Apps</Purple>
                    </h1>

                    {/* Highlighted Boxes for Baaz Features */}

                    <div>
                        <BaazFeatures />
                    </div>
                </div>

                <div className="v-join-community">
                    <div
                        style={{
                            flex: 1,
                            textAlign: "left",
                        }}
                    >
                        <h2
                            style={{
                                fontSize: "2.5rem",
                                fontWeight: 700,
                                marginBottom: "16px",
                                color: "#1a202c",
                            }}
                        >
                            Join Our <Purple>Community</Purple>
                        </h2>
                        <p style={{ fontSize: "1.5rem", fontWeight: 100, color: "#1a202c" }}>
                            BaaZ thrives on the ethos of open-source collaboration. Become a part of
                            our worldwide network of innovators, engineers, and advocates on Slack
                            and GitHub.
                        </p>
                        <div className="v-social-links">
                            <Gitbutton href="https://github.com/baazhq/baaz">
                                Star on GitHub
                            </Gitbutton>
                            <ActionButton href="https://www.launchpass.com/baaz">
                                Join Slack
                            </ActionButton>
                        </div>
                    </div>
                    <div style={{ flex: 1, textAlign: "center" }}>
                        <img
                            src="/img/bzcommunity.png"
                            alt="Community"
                            style={{ width: "100%", maxWidth: "400px", borderRadius: "50%" }}
                        />
                    </div>
                </div>
            </Layout>
        </>
    )
}

const baazFeatures = [
    {
        title: "Unified Multi-Cloud Design",
        description:
            "A comprehensive system architecture supporting shared, dedicated, and BYOC infrastructures across multiple cloud environments.",
        logo: "/img/multicloud.png",
    },
    {
        title: "Robust Security",
        description:
            "Implement secure access to customer networks using a pull-based model, eliminating the need for VPC peering in BYOC scenarios.",
        logo: "/img/security.png",
    },
    {
        title: "Optimized Cost Efficiency",
        description:
            "Leverage built-in Kubernetes deployment and scheduling strategies to significantly reduce cloud expenditure.",
        logo: "/img/cost.png",
    },
    {
        title: "Rapid Go-to-Market",
        description: "Accelerate your SaaS launch and start monetizing within days.",
        logo: "/img/gtm.png",
    },
    {
        title: "Enhanced Sales Enablement",
        description:
            "Facilitate seamless deployments in both customer and SaaS provider networks, removing engineering roadblocks for sales.",
        logo: "/img/sales.png",
    },
    {
        title: "Stateless Control Plane",
        description:
            "Deploy a stateless control plane on any Kubernetes cluster, whether on-premises or in the cloud.",
        logo: "/img/statelesscp.png",
    },
]

function HighlightedBox({ title, description, logo }) {
    const [isHovered, setIsHovered] = React.useState(false)

    return (
        <div
            className="v-home-feature"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={logo}
                alt={`${title} logo`}
                style={{ height: "50px", marginBottom: "10px" }}
            />
            <h3 style={{ fontWeight: 800, marginBottom: "10px" }}>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

function BaazFeatures() {
    return (
        <div className="v-home-features">
            {baazFeatures.map((feature, index) => (
                <HighlightedBox
                    key={index}
                    title={feature.title}
                    description={feature.description}
                    logo={feature.logo}
                />
            ))}
        </div>
    )
}

// ** Styled Components

function Container({ children }) {
    return <div className={`${styles.containerHero1} v-home-banner`}>{children}</div>
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

function NavBar({ className }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className={`${className} v-navbar`}>
            <Logo />
            <div className="v-links">
                <NavLink to="/#features">Features</NavLink>
                <NavLink to="/documentation">Documentation</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/services">Services</NavLink>
                <a
                    className="navbar__link_hover_src-pages-index-module"
                    style={{
                        color: "rgb(19, 18, 18)",
                        marginLeft: "32px",
                        marginRight: "32px",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                    }}
                    href="https://saasinfra.substack.com/"
                    target="_blank"
                >
                    Newsletter
                </a>
            </div>
            <div className="v-social-links">
                <Gitbutton href="https://github.com/baazhq/baaz">
                    <span>Star on GitHub</span>
                </Gitbutton>
                <ActionButton href="https://www.launchpass.com/baaz">
                    <span>Join Slack</span>
                </ActionButton>
            </div>
            <button onClick={() => setIsOpen(true)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="32"
                    height="32"
                    viewBox="0 0 50 50"
                >
                    <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                </svg>
            </button>
            {isOpen && (
                <div className="v-navbar_phone">
                    <div className="v-links_phone">
                        <span onClick={() => setIsOpen(false)}>&#10006;</span>
                        <NavLink to="/#features">Features</NavLink>
                        <NavLink to="/documentation">Documentation</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/blog">Blog</NavLink>
                        <a
                            className="navbar__link_hover_src-pages-index-module"
                            style={{
                                color: "rgb(19, 18, 18)",
                                marginLeft: "32px",
                                marginRight: "32px",
                                fontSize: "1.2rem",
                                fontWeight: "bold",
                            }}
                            href="https://saasinfra.substack.com/"
                            target="_blank"
                        >
                            Newsletter
                        </a>
                    </div>
                    <div className="v-social-links_phone">
                        <Gitbutton href="https://github.com/baazhq/baaz">
                            <span>Star on GitHub</span>
                        </Gitbutton>
                        <ActionButton href="https://www.launchpass.com/baaz">
                            <span>Join Slack</span>
                        </ActionButton>
                    </div>
                </div>
            )}
        </nav>
    )
}

function Logo() {
    return <img src="/img/logo.png" alt="secure-icon" style={{ width: "250px", height: "auto" }} />
}

function NavLink({ style, to, children }) {
    return (
        <Link
            className={styles.navbar__link_hover}
            to={to}
            style={{
                color: " #131212",
                marginLeft: "15px",
                marginRight: "15px",
                fontSize: "1.2rem",
                fontWeight: "bold", // Added fontWeight
                ...style,
            }}
        >
            {children}
        </Link>
    )
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
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                fontFamily: "Inter, sans-serif",
                boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.12)",
                padding: "8px 22px",
                transition: "background 0.3s ease, color 0.3s ease, border-color 0.3s ease",
                gap: "16px",
                ...style,
            }}
            onMouseEnter={(e) => {
                e.target.style.background = "#4361ee"
                e.target.style.color = "#fff"
                e.target.style.borderColor = "#4361ee"
            }}
            onMouseLeave={(e) => {
                e.target.style.background = "#fff"
                e.target.style.color = "#4361ee"
                e.target.style.borderColor = "#4361ee"
            }}
        >
            <img style={{ height: "24px" }} src="/img/slack.svg" alt="join-slack" />
            {children}
        </Link>
    )
}

function RequestDemo({ children }) {
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
            {children}
        </div>
    )
}

function RequestDemoButtons({ children }) {
    return <div className="request-demo-btns">{children}</div>
}

function Title({ children }) {
    return (
        <h1
            style={{
                fontSize: "3rem",
                fontWeight: 800,
                marginBottom: "16px",
                marginTop: "32px",
                color: "#1a202c",
            }}
        >
            {children}
        </h1>
    )
}

function Gitbutton({ className, href, style, children }) {
    return (
        <Link
            className={className}
            href={href}
            style={{
                background: "#fff",
                borderRadius: "28px",
                border: "2px solid #4361ee",
                color: "#4361ee",
                fontSize: "1.2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                fontFamily: "Inter, sans-serif",
                boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.12)",
                padding: "8px 22px",
                transition: "background 0.3s ease, color 0.3s ease, border-color 0.3s ease",
                gap: "16px",
                ...style,
            }}
            onMouseEnter={(e) => {
                e.target.style.background = "#4361ee"
                e.target.style.color = "#fff"
                e.target.style.borderColor = "#4361ee"
            }}
            onMouseLeave={(e) => {
                e.target.style.background = "#fff"
                e.target.style.color = "#4361ee"
                e.target.style.borderColor = "#4361ee"
            }}
        >
            <img style={{ height: "32px" }} src="/img/github-mark.png" alt="Star-on-Github" />
            {children}
        </Link>
    )
}
