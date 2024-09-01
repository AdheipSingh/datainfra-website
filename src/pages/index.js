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
                <NavBar className={styles.navbar}>
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
                            <p style={{ fontSize: "1.25rem", fontWeight: 500, color: "#000" }}>
                                Unified Management Plane for Managed Services, Infra SaaS and
                                Serverless SaaS.
                            </p>

                            <RequestDemo>
                                <RequestDemoButtons>
                                    <Link
                                        to="https://cal.com/baazhq"
                                        className={styles.requestDemoButton}
                                    >
                                        Book a Call{" "}
                                        <div className={styles.arrowContainer}>
                                            <img
                                                src="/img/arrow_forward.svg"
                                                className="img-fluid"
                                            />
                                        </div>
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

                {/* Join Our Community Section */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        padding: "40px 20px",
                        marginTop: "40px",
                    }}
                >
                    <div
                        style={{
                            flex: 1,
                            textAlign: "left",
                            marginLeft: "100px",
                            marginRight: "100px",
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
                        <div style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
                            <Gitbutton href="https://github.com/baazhq/baaz">
                                Star on GitHub
                            </Gitbutton>
                            <ActionButton href="https://www.launchpass.com/baaz">
                                Join Slack
                            </ActionButton>
                        </div>
                    </div>
                    <div style={{ flex: 1, textAlign: "center", maxWidth: "50%" }}>
                        <img
                            src="/img/bzcommunity.png"
                            alt="Community"
                            style={{ width: "100%", maxWidth: "400px", borderRadius: "50%" }}
                        />
                    </div>
                </div>

                <div className={styles.newsletter}>
                    {/* <h2>
                        Subscribe to our <span>Newsletter</span>
                    </h2> */}
                    {/* <p>The BaaZ newsletter goes out every other week, don’t miss out!</p> */}
                    {/* <form action="https://formspree.io/f/mvgpryap" method="POST">
                        <div
                            className={styles.inputBox}
                            style={{ display: "flex", position: "relative" }}
                        >
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                // placeholder="Enter your email ID"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit cursor-pointer">
                                Subscribe <img src="/img/arrow-narrow-right.png" alt="" />
                            </button>
                        </div> */}
                    {/* </form> */}
                    {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
                </div>

                {/* Rest of the content... */}
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
            style={{
                width: "calc(33.3333% - 40px)", // Adjusted width to accommodate three boxes with spacing
                // height: "200px", // Fixed height for square boxes
                padding: "32px 24px 24px 24px",
                // paddingBottom: "200px", // Added bottom padding
                background: "#fff",
                // border: `2px solid ${isHovered ? "#FFA500" : "#FFD700"}`,
                borderRadius: "16px",
                margin: "10px",
                textAlign: "center",
                boxSizing: "border-box",
                display: "inline-block",
            }}
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
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: "20px",
            }}
        >
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
    return (
        <div
            className={styles.containerHero1}
            style={{
                padding: "180px 0 210px",
                display: "flex",
                background: " #f4f4f4",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: "180px",
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
                justifyContent: "space-between", // Adjusted justifyContent
                paddingLeft: "56px",
                paddingRight: "20px", // Adjusted paddingRight
                zIndex: 99,
            }}
        >
            <div style={{ display: "flex", alignItems: "center", minWidth: 310 }}>
                <Logo />
            </div>
            <div>
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
            <div style={{ display: "flex" }}>
                <Gitbutton href="https://github.com/baazhq/baaz">Star on GitHub</Gitbutton>
                <ActionButton href="https://www.launchpass.com/baaz">Join Slack</ActionButton>
            </div>
        </nav>
    )
}

function Logo() {
    return (
        <img
            src="/img/logo.png"
            alt="secure-icon"
            style={{ width: "250px", height: "auto", marginRight: "auto" }}
        />
    )
}

function NavLink({ style, to, children }) {
    return (
        <Link
            className={styles.navbar__link_hover}
            to={to}
            style={{
                color: " #131212",
                marginLeft: "32px",
                marginRight: "32px",
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
                marginLeft: "16px", // Adjusted marginLeft
                fontFamily: "Inter, sans-serif",
                boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.12)",
                padding: "8px 24px",
                transition: "background 0.3s ease, color 0.3s ease, border-color 0.3s ease",
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
            <img
                style={{ marginRight: "16px", height: "24px" }}
                src="/img/slack.svg"
                alt="join-slack"
            />
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
    return <div style={{ display: "flex", gap: "16px" }}>{children}</div>
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
                // marginLeft: "16px", // Adjusted marginLeft
                fontFamily: "Inter, sans-serif",
                boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.12)",
                padding: "8px 24px",
                transition: "background 0.3s ease, color 0.3s ease, border-color 0.3s ease",
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
            <img
                style={{ height: "32px", marginRight: "16px" }}
                src="/img/github-mark.png"
                alt="Star-on-Github"
            />
            {children}
        </Link>
    )
}
