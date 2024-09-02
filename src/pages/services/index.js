import Layout from "@theme/Layout"
import React from "react"
import styles from "../index.module.css"
import Link from "@docusaurus/Link"

const Services = () => {
    return (
        <>
            <Layout>
                <div>
                    <NavBar className={styles.navbar}></NavBar>
                    <div className={styles.heroSection}>
                        <Container>
                            <div>
                                <h2 style={{ fontSize: "4.4vw", fontWeight: 800 }}>
                                    Custom Control Planes for <span>Targeted Solutions</span>
                                </h2>
                                <p style={{ maxWidth: "68%" }}>
                                    We help companies adopt control plane architectures specific for
                                    their businesses.
                                </p>
                                <a href="https://cal.com/baazhq">
                                    Talk to Us{" "}
                                    <img
                                        src="img/arrow-right.png"
                                        style={{ maxWidth: 24 }}
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div style={{ maxWidth: 620 }}>
                                <img src="/img/service-img.png" alt="" />
                            </div>
                        </Container>
                    </div>
                    <div style={{ backgroundColor: "#F4F4F4", padding: "80px 24px" }}>
                        <div>
                            <h2
                                style={{
                                    textAlign: "center",
                                    fontSize: "4vw",
                                    fontWeight: 800,
                                    marginBottom: 32,
                                }}
                                className={styles.gradientText}
                            >
                                Our <span>Service Offerings</span>
                            </h2>
                        </div>
                        <div className={styles.wrapBody}>
                            <div className={styles.col3}>
                                <div className={styles.serviceCard}>
                                    <h3>Control Plane Architecture</h3>
                                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                        <li>
                                            <img
                                                src="img/star.png"
                                                alt=""
                                                style={{ maxWidth: 16, marginRight: 12 }}
                                            />{" "}
                                            Shared Architectures
                                        </li>
                                        <li>
                                            <img
                                                src="img/star.png"
                                                alt=""
                                                style={{ maxWidth: 16, marginRight: 12 }}
                                            />{" "}
                                            Dedicated Architecture
                                        </li>
                                        <li>
                                            <img
                                                src="img/star.png"
                                                alt=""
                                                style={{ maxWidth: 16, marginRight: 12 }}
                                            />{" "}
                                            Private SaaS Architecture
                                        </li>
                                        <li>
                                            <img
                                                src="img/star.png"
                                                alt=""
                                                style={{ maxWidth: 16, marginRight: 12 }}
                                            />{" "}
                                            Stateless & Statefull Architecture
                                        </li>
                                        <li>
                                            <img
                                                src="img/star.png"
                                                alt=""
                                                style={{ maxWidth: 16, marginRight: 12 }}
                                            />{" "}
                                            Push & Pull Architecture
                                        </li>
                                    </ul>
                                    <img
                                        src="img/saas.png"
                                        style={{
                                            position: "absolute",
                                            maxWidth: 220,
                                            right: 0,
                                            top: 0,
                                        }}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className={styles.col3}>
                                <div className={styles.serviceCard}>
                                    <h3>State Management</h3>
                                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                        <li>
                                            <img
                                                src="img/star.png"
                                                alt=""
                                                style={{ maxWidth: 16, marginRight: 12 }}
                                            />{" "}
                                            State Machines
                                        </li>
                                        <li>
                                            <img
                                                src="img/star.png"
                                                alt=""
                                                style={{ maxWidth: 16, marginRight: 12 }}
                                            />{" "}
                                            Cloud Controllers
                                        </li>
                                        <li>
                                            <img
                                                src="img/star.png"
                                                alt=""
                                                style={{ maxWidth: 16, marginRight: 12 }}
                                            />{" "}
                                            Infrastructure Autoscalers
                                        </li>
                                        <li>
                                            <img
                                                src="img/star.png"
                                                alt=""
                                                style={{ maxWidth: 16, marginRight: 12 }}
                                            />{" "}
                                            Event Driven Infrastructure Design
                                        </li>
                                        <li>
                                            <img
                                                src="img/star.png"
                                                alt=""
                                                style={{ maxWidth: 16, marginRight: 12 }}
                                            />{" "}
                                            Orchestrators
                                        </li>
                                    </ul>
                                    <img
                                        src="img/saas.png"
                                        style={{
                                            position: "absolute",
                                            maxWidth: 220,
                                            right: 0,
                                            top: 0,
                                        }}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className={styles.col3}>
                                <div className={styles.serviceCard}>
                                    <h3>Kubernetes </h3>
                                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                        <li>
                                            <img
                                                src="img/star.png"
                                                alt=""
                                                style={{ maxWidth: 16, marginRight: 12 }}
                                            />{" "}
                                            Kubernetes as a Control Plane
                                        </li>
                                        <li>
                                            <img
                                                src="img/star.png"
                                                alt=""
                                                style={{ maxWidth: 16, marginRight: 12 }}
                                            />{" "}
                                            Kubernetes Operators
                                        </li>
                                        <li>
                                            <img
                                                src="img/star.png"
                                                alt=""
                                                style={{ maxWidth: 16, marginRight: 12 }}
                                            />{" "}
                                            Kubernetes Controllers
                                        </li>
                                        <li>
                                            <img
                                                src="img/star.png"
                                                alt=""
                                                style={{ maxWidth: 16, marginRight: 12 }}
                                            />{" "}
                                            Kubernetes API Development
                                        </li>
                                        <li>
                                            <img
                                                src="img/star.png"
                                                alt=""
                                                style={{ maxWidth: 16, marginRight: 12 }}
                                            />{" "}
                                            Kubernetes Autoscalers
                                        </li>
                                    </ul>
                                    <img
                                        src="img/saas.png"
                                        style={{
                                            position: "absolute",
                                            maxWidth: 220,
                                            right: 0,
                                            top: 0,
                                        }}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className={styles.col3}>
                                <div className={styles.serviceCard}>
                                    <h3>Cost Optimization</h3>
                                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                        <li>
                                            <img
                                                src="img/star.png"
                                                alt=""
                                                style={{ maxWidth: 16, marginRight: 12 }}
                                            />{" "}
                                            Scheduling Strategies
                                        </li>
                                        <li>
                                            <img
                                                src="img/star.png"
                                                alt=""
                                                style={{ maxWidth: 16, marginRight: 12 }}
                                            />{" "}
                                            Spot Node Controllers
                                        </li>
                                        <li>
                                            <img
                                                src="img/star.png"
                                                alt=""
                                                style={{ maxWidth: 16, marginRight: 12 }}
                                            />{" "}
                                            Infra Cost Modules
                                        </li>
                                        <li>
                                            <img
                                                src="img/star.png"
                                                alt=""
                                                style={{ maxWidth: 16, marginRight: 12 }}
                                            />{" "}
                                            Bin Packing
                                        </li>
                                    </ul>
                                    <img
                                        src="img/saas.png"
                                        style={{
                                            position: "absolute",
                                            maxWidth: 220,
                                            right: 0,
                                            top: 0,
                                        }}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className={styles.col3}>
                                <div className={styles.serviceCard}>
                                    <h3>Security</h3>
                                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                        <li>
                                            <img
                                                src="img/star.png"
                                                alt=""
                                                style={{ maxWidth: 16, marginRight: 12 }}
                                            />{" "}
                                            Compliant Infrastructure
                                        </li>
                                        <li>
                                            <img
                                                src="img/star.png"
                                                alt=""
                                                style={{ maxWidth: 16, marginRight: 12 }}
                                            />{" "}
                                            Secure Control Plane Architecture
                                        </li>
                                        <li>
                                            <img
                                                src="img/star.png"
                                                alt=""
                                                style={{ maxWidth: 16, marginRight: 12 }}
                                            />{" "}
                                            Air-Gapped Infrastructure
                                        </li>
                                        <li>
                                            <img
                                                src="img/star.png"
                                                alt=""
                                                style={{ maxWidth: 16, marginRight: 12 }}
                                            />{" "}
                                            Kubernetes Security
                                        </li>
                                    </ul>
                                    <img
                                        src="img/saas.png"
                                        style={{
                                            position: "absolute",
                                            maxWidth: 220,
                                            right: 0,
                                            top: 0,
                                        }}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className={styles.col3}>
                                <div className={styles.serviceCard}>
                                    <h3>Consulting</h3>
                                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                        <li>
                                            <img
                                                src="img/star.png"
                                                alt=""
                                                style={{ maxWidth: 16, marginRight: 12 }}
                                            />{" "}
                                            Onsite Consultations
                                        </li>
                                        <li>
                                            <img
                                                src="img/star.png"
                                                alt=""
                                                style={{ maxWidth: 16, marginRight: 12 }}
                                            />{" "}
                                            Hands-On Implementations
                                        </li>
                                        <li>
                                            <img
                                                src="img/star.png"
                                                alt=""
                                                style={{ maxWidth: 16, marginRight: 12 }}
                                            />{" "}
                                            Technical Advisory on Control Planes
                                        </li>
                                        <li>
                                            <img
                                                src="img/star.png"
                                                alt=""
                                                style={{ maxWidth: 16, marginRight: 12 }}
                                            />{" "}
                                            Long Term Contactor Engadements
                                        </li>
                                    </ul>
                                    <img
                                        src="img/saas.png"
                                        style={{
                                            position: "absolute",
                                            maxWidth: 220,
                                            right: 0,
                                            top: 0,
                                        }}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ padding: "80px 240px" }}>
                        <div className={styles.whyChooseUsContainer}>
                            <div>
                                <h2
                                    style={{
                                        textAlign: "center",
                                        fontSize: "4vw",
                                        fontWeight: 800,
                                        marginBottom: 32,
                                    }}
                                    className={styles.heading}
                                >
                                    Why <span>Choose</span> Us
                                </h2>
                                <p>
                                    We are not your typical services partner. We’re a small team of
                                    niche software consultants and contractors, hands-on <br />{" "}
                                    engineers whose careers are built on open-source contributions.
                                </p>
                                <p>
                                    As Infrastructure developers having deep expertise in building
                                    state driven infrastructure platforms, <br /> we can help you
                                    build robust control planes.
                                    <p>
                                        <br /> We don't just talk architecture, we code and build
                                        systems hands-on from scratch.
                                    </p>
                                </p>
                            </div>
                            <div className={styles.wrapBody}>
                                <div className={styles.col3}>
                                    <div className={styles.counterBox}>
                                        <div className={styles.countPurple}>5+</div>
                                        <div className={styles.counterText}>Control Plane</div>
                                    </div>
                                </div>
                                <div className={styles.col3}>
                                    <div className={styles.counterBox}>
                                        <div className={styles.count}>300+</div>
                                        <div className={styles.counterText}>
                                            Commits to Open Source Projects
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.col3}>
                                    <div className={styles.counterBox}>
                                        <div className={styles.countPurple}>10+</div>
                                        <div className={styles.counterText}>
                                            Kubernetes Operators
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p>
                                    We offer system design, hands-on implementation, and support. To
                                    learn more about <br /> working with us, feel free to {}
                                    <a href="https://cal.com/baazhq" target="_blank">
                                        <b>Contact Us</b>
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style={{ padding: "80px 24px" }}>
                        <div className={styles.ourInsights}>
                            <div>
                                <h2
                                    style={{
                                        textAlign: "center",
                                        fontSize: "4vw",
                                        fontWeight: 800,
                                        marginBottom: 48,
                                    }}
                                    className={styles.heading}
                                >
                                    Our <span>Insights</span>
                                </h2>
                            </div>
                            <div className={styles.wrapBody}>
                                <div className={styles.col3}>
                                    <Link
                                        to={"/blog/centralised-control-planes-for-saas-part-2"}
                                        style={{ color: "#1c1e21", textDecoration: "none" }}
                                    >
                                        <div className={styles.blogImg}>
                                            <img
                                                src="img/blogEmpty.svg"
                                                style={{ maxWidth: "100%", height: "auto" }}
                                                alt=""
                                            />
                                            <p className={styles.imgText}>
                                                Centralised Control Planes for SaaS - Part 2:
                                                Stateless Async Event Handling
                                            </p>
                                        </div>
                                        <div>
                                            <h4
                                                className={styles.category}
                                                style={{
                                                    color: "#002DFF",
                                                    marginBottom: 8,
                                                    marginTop: 16,
                                                    fontSize: 16,
                                                    fontWeight: 700,
                                                }}
                                            >
                                                Artificial Intelligence
                                            </h4>
                                            <h3
                                                style={{
                                                    fontSize: 20,
                                                    color: "#101828",
                                                    fontWeight: 700,
                                                    marginBottom: 6,
                                                }}
                                            >
                                                Centralised Control Planes for SaaS - Part 2:
                                                Stateless Async Event Handling
                                            </h3>
                                            <p
                                                style={{
                                                    fontSize: 16,
                                                    fontWeight: 400,
                                                    marginBottom: 24,
                                                }}
                                            >
                                                Learn the technology and architecture behind
                                                building AI Cloud using open source and cloud native
                                                technologies.
                                            </p>
                                            {/* <div style={{ display: "flex", alignItems: "center" }}>
                                            <div className={styles.authorImg}>
                                                <img
                                                    src="img/Avatar.jpg"
                                                    alt=""
                                                    style={{ maxWidth: "100%", height: "auto" }}
                                                />
                                            </div>
                                            <div>
                                                <h6
                                                    style={{
                                                        fontSize: 16,
                                                        fontWeight: 700,
                                                        marginBottom: 4,
                                                    }}
                                                >
                                                    Olivia Rhye
                                                </h6>
                                                <p
                                                    style={{
                                                        fontSize: 14,
                                                        fontWeight: 400,
                                                        marginBottom: 0,
                                                    }}
                                                >
                                                    20 Jan 2024
                                                </p>
                                            </div>
                                        </div> */}
                                        </div>
                                    </Link>
                                </div>
                                <div className={styles.col3}>
                                    <Link
                                        to={
                                            "/blog/centralised-control-planes-for-saas-infra-part-1"
                                        }
                                        style={{ color: "#1c1e21", textDecoration: "none" }}
                                    >
                                        <div className={styles.blogImg}>
                                            <img
                                                src="img/blogEmpty.svg"
                                                style={{ maxWidth: "100%", height: "auto" }}
                                                alt=""
                                            />
                                            <p className={styles.imgText}>
                                                Centralised Control Planes for SaaS - Part 1: SaaS
                                                Business Models
                                            </p>
                                        </div>
                                        <div>
                                            <h4
                                                className={styles.category}
                                                style={{
                                                    color: "#002DFF",
                                                    marginBottom: 8,
                                                    marginTop: 16,
                                                    fontSize: 16,
                                                    fontWeight: 700,
                                                }}
                                            >
                                                Artificial Intelligence
                                            </h4>
                                            <h3
                                                style={{
                                                    fontSize: 20,
                                                    color: "#101828",
                                                    fontWeight: 700,
                                                    marginBottom: 6,
                                                }}
                                            >
                                                Centralised Control Planes for SaaS - Part 1: SaaS
                                                Business Models
                                            </h3>
                                            <p
                                                style={{
                                                    fontSize: 16,
                                                    fontWeight: 400,
                                                    marginBottom: 24,
                                                }}
                                            >
                                                Learn the technology and architecture behind
                                                building AI Cloud using open source and cloud native
                                                technologies.
                                            </p>
                                            {/* <div style={{ display: "flex", alignItems: "center" }}>
                                            <div className={styles.authorImg}>
                                                <img
                                                    src="img/Avatar.jpg"
                                                    alt=""
                                                    style={{ maxWidth: "100%", height: "auto" }}
                                                />
                                            </div>
                                            <div>
                                                <h6
                                                    style={{
                                                        fontSize: 16,
                                                        fontWeight: 700,
                                                        marginBottom: 4,
                                                    }}
                                                >
                                                    Olivia Rhye
                                                </h6>
                                                <p
                                                    style={{
                                                        fontSize: 14,
                                                        fontWeight: 400,
                                                        marginBottom: 0,
                                                    }}
                                                >
                                                    20 Jan 2024
                                                </p>
                                            </div>
                                        </div> */}
                                        </div>
                                    </Link>
                                </div>
                                <div className={styles.col3}>
                                    <Link
                                        to={"/blog/demystifying-helm-and-operator-pattern"}
                                        style={{ color: "#1c1e21", textDecoration: "none" }}
                                    >
                                        <div className={styles.blogImg}>
                                            <img
                                                src="img/blogEmpty.svg"
                                                style={{ maxWidth: "100%", height: "auto" }}
                                                alt=""
                                            />
                                            <p className={styles.imgText}>
                                                Demystifying Helm and Operator pattern.
                                            </p>
                                        </div>
                                        <div>
                                            <h4
                                                className={styles.category}
                                                style={{
                                                    color: "#002DFF",
                                                    marginBottom: 8,
                                                    marginTop: 16,
                                                    fontSize: 16,
                                                    fontWeight: 700,
                                                }}
                                            >
                                                Artificial Intelligence
                                            </h4>
                                            <h3
                                                style={{
                                                    fontSize: 20,
                                                    color: "#101828",
                                                    fontWeight: 700,
                                                    marginBottom: 6,
                                                }}
                                            >
                                                Demystifying Helm and Operator pattern.
                                            </h3>
                                            <p
                                                style={{
                                                    fontSize: 16,
                                                    fontWeight: 400,
                                                    marginBottom: 24,
                                                }}
                                            >
                                                Learn the technology and architecture behind
                                                building AI Cloud using open source and cloud native
                                                technologies.
                                            </p>
                                            {/* <div style={{ display: "flex", alignItems: "center" }}>
                                            <div className={styles.authorImg}>
                                                <img
                                                    src="img/Avatar.jpg"
                                                    alt=""
                                                    style={{ maxWidth: "100%", height: "auto" }}
                                                />
                                            </div>
                                            <div>
                                                <h6
                                                    style={{
                                                        fontSize: 16,
                                                        fontWeight: 700,
                                                        marginBottom: 4,
                                                    }}
                                                >
                                                    Olivia Rhye
                                                </h6>
                                                <p
                                                    style={{
                                                        fontSize: 14,
                                                        fontWeight: 400,
                                                        marginBottom: 0,
                                                    }}
                                                >
                                                    20 Jan 2024
                                                </p>
                                            </div>
                                        </div> */}
                                        </div>
                                    </Link>
                                </div>
                                <div className={styles.col3}>
                                    <a
                                        href="https://youtu.be/gbtBGtDPtkA?si=U2yAaqdc19Px8S1S"
                                        target="_blank"
                                        style={{ color: "#1c1e21", textDecoration: "none" }}
                                    >
                                        <div className={styles.blogImg}>
                                            <img
                                                src="img/blog1.jpg"
                                                style={{ maxWidth: "100%", height: "auto" }}
                                                alt=""
                                            />
                                        </div>
                                        <div>
                                            <h4
                                                className={styles.category}
                                                style={{
                                                    color: "#002DFF",
                                                    marginBottom: 8,
                                                    marginTop: 16,
                                                    fontSize: 16,
                                                    fontWeight: 700,
                                                }}
                                            >
                                                Artificial Intelligence
                                            </h4>
                                            <h3
                                                style={{
                                                    fontSize: 20,
                                                    color: "#101828",
                                                    fontWeight: 700,
                                                    marginBottom: 6,
                                                }}
                                            >
                                                How to build AI Cloud?
                                            </h3>
                                            <p
                                                style={{
                                                    fontSize: 16,
                                                    fontWeight: 400,
                                                    marginBottom: 24,
                                                }}
                                            >
                                                Learn the technology and architecture behind
                                                building AI Cloud using open source and cloud native
                                                technologies.
                                            </p>
                                            {/* <div style={{ display: "flex", alignItems: "center" }}>
                                                <div className={styles.authorImg}>
                                                    <img
                                                        src="img/Avatar.jpg"
                                                        alt=""
                                                        style={{ maxWidth: "100%", height: "auto" }}
                                                    />
                                                </div>
                                                <div>
                                                    <h6
                                                        style={{
                                                            fontSize: 16,
                                                            fontWeight: 700,
                                                            marginBottom: 4,
                                                        }}
                                                    >
                                                        Olivia Rhye
                                                    </h6>
                                                    <p
                                                        style={{
                                                            fontSize: 14,
                                                            fontWeight: 400,
                                                            marginBottom: 0,
                                                        }}
                                                    >
                                                        20 Jan 2024
                                                    </p>
                                                </div>
                                            </div> */}
                                        </div>
                                    </a>
                                </div>
                                <div className={styles.col3}>
                                    <a
                                        href="https://youtu.be/NMcAkZZ6jQo?si=RWqxO_liZNNeftgo"
                                        target="_blank"
                                        style={{ color: "#1c1e21", textDecoration: "none" }}
                                    >
                                        <div className={styles.blogImg}>
                                            <img
                                                src="img/blog1.jpg"
                                                style={{ maxWidth: "100%", height: "auto" }}
                                                alt=""
                                            />
                                        </div>
                                        <div>
                                            <h4
                                                className={styles.category}
                                                style={{
                                                    color: "#002DFF",
                                                    marginBottom: 8,
                                                    marginTop: 16,
                                                    fontSize: 16,
                                                    fontWeight: 700,
                                                }}
                                            >
                                                Artificial Intelligence
                                            </h4>
                                            <h3
                                                style={{
                                                    fontSize: 20,
                                                    color: "#101828",
                                                    fontWeight: 700,
                                                    marginBottom: 6,
                                                }}
                                            >
                                                How to build AI Cloud?
                                            </h3>
                                            <p
                                                style={{
                                                    fontSize: 16,
                                                    fontWeight: 400,
                                                    marginBottom: 24,
                                                }}
                                            >
                                                Learn the technology and architecture behind
                                                building AI Cloud using open source and cloud native
                                                technologies.
                                            </p>
                                            {/* <div style={{ display: "flex", alignItems: "center" }}>
                                                <div className={styles.authorImg}>
                                                    <img
                                                        src="img/Avatar.jpg"
                                                        alt=""
                                                        style={{ maxWidth: "100%", height: "auto" }}
                                                    />
                                                </div>
                                                <div>
                                                    <h6
                                                        style={{
                                                            fontSize: 16,
                                                            fontWeight: 700,
                                                            marginBottom: 4,
                                                        }}
                                                    >
                                                        Olivia Rhye
                                                    </h6>
                                                    <p
                                                        style={{
                                                            fontSize: 14,
                                                            fontWeight: 400,
                                                            marginBottom: 0,
                                                        }}
                                                    >
                                                        20 Jan 2024
                                                    </p>
                                                </div>
                                            </div> */}
                                        </div>
                                    </a>
                                </div>
                                <div className={styles.col3}>
                                    <a
                                        href="https://www.youtube.com/live/X4A3lWJRGHk?si=mvYVRmrCFODy5Nl2"
                                        target="_blank"
                                        style={{ color: "#1c1e21", textDecoration: "none" }}
                                    >
                                        <div className={styles.blogImg}>
                                            <img
                                                src="img/blog1.jpg"
                                                style={{ maxWidth: "100%", height: "auto" }}
                                                alt=""
                                            />
                                        </div>
                                        <div>
                                            <h4
                                                className={styles.category}
                                                style={{
                                                    color: "#002DFF",
                                                    marginBottom: 8,
                                                    marginTop: 16,
                                                    fontSize: 16,
                                                    fontWeight: 700,
                                                }}
                                            >
                                                Artificial Intelligence
                                            </h4>
                                            <h3
                                                style={{
                                                    fontSize: 20,
                                                    color: "#101828",
                                                    fontWeight: 700,
                                                    marginBottom: 6,
                                                }}
                                            >
                                                How to build AI Cloud?
                                            </h3>
                                            <p
                                                style={{
                                                    fontSize: 16,
                                                    fontWeight: 400,
                                                    marginBottom: 24,
                                                }}
                                            >
                                                Learn the technology and architecture behind
                                                building AI Cloud using open source and cloud native
                                                technologies.
                                            </p>
                                            {/* <div style={{ display: "flex", alignItems: "center" }}>
                                                <div className={styles.authorImg}>
                                                    <img
                                                        src="img/Avatar.jpg"
                                                        alt=""
                                                        style={{ maxWidth: "100%", height: "auto" }}
                                                    />
                                                </div>
                                                <div>
                                                    <h6
                                                        style={{
                                                            fontSize: 16,
                                                            fontWeight: 700,
                                                            marginBottom: 4,
                                                        }}
                                                    >
                                                        Olivia Rhye
                                                    </h6>
                                                    <p
                                                        style={{
                                                            fontSize: 14,
                                                            fontWeight: 400,
                                                            marginBottom: 0,
                                                        }}
                                                    >
                                                        20 Jan 2024
                                                    </p>
                                                </div>
                                            </div> */}
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ padding: "80px 0px 80px 24px" }} className={styles.contactUs}>
                        <div className={styles.wrapBody}>
                            <div className={styles.col5}>
                                <h3 className={styles.heading}>
                                    Contact <span>Us</span>
                                </h3>
                                <p>If you're looking to build:</p>
                                <ul
                                    style={{
                                        listStyle: "none",
                                        padding: 0,
                                        margin: 0,
                                        display: "flex",
                                        flexWrap: "wrap",
                                    }}
                                    className={styles.contactList}
                                >
                                    <li>
                                        <img
                                            src="img/checkicon.png"
                                            style={{ maxWidth: 24, marginRight: 8 }}
                                            alt=""
                                        />{" "}
                                        Managed Services
                                    </li>
                                    <li>
                                        <img
                                            src="img/checkicon.png"
                                            style={{ maxWidth: 24, marginRight: 8 }}
                                            alt=""
                                        />{" "}
                                        Serverless SaaS
                                    </li>
                                    <li>
                                        <img
                                            src="img/checkicon.png"
                                            style={{ maxWidth: 24, marginRight: 8 }}
                                            alt=""
                                        />{" "}
                                        Infra SaaS
                                    </li>
                                    <li>
                                        <img
                                            src="img/checkicon.png"
                                            style={{ maxWidth: 24, marginRight: 8 }}
                                            alt=""
                                        />{" "}
                                        X as a SaaS
                                    </li>
                                    <li>
                                        <img
                                            src="img/checkicon.png"
                                            style={{ maxWidth: 24, marginRight: 8 }}
                                            alt=""
                                        />{" "}
                                        Custom Control Planes
                                    </li>
                                </ul>
                                <div style={{ position: "relative", display: "inline-block" }}>
                                    <h5>We are here to help you!</h5>
                                    <img
                                        src="img/penscribble.png"
                                        style={{
                                            maxWidth: "136px",
                                            position: "absolute",
                                            right: 0,
                                            bottom: 0,
                                        }}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className={styles.col7} style={{ paddingRight: 0 }}>
                                <div
                                    style={{
                                        background: "url(img/contact-bg.jpg)",
                                        backgroundPosition: "center center",
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                        padding: "120px 120px 100px 120px",
                                        borderRadius: "24px 0px 0px 24px",
                                    }}
                                >
                                    <div
                                        style={{
                                            backgroundColor: "white",
                                            textAlign: "center",
                                            borderRadius: 24,
                                            padding: "24px 24px 48px 24px",
                                        }}
                                    >
                                        <img
                                            src="img/baazLogo.png"
                                            style={{ maxWidth: 164, marginTop: "-100px" }}
                                            alt=""
                                        />
                                        <h6>Need to know more?</h6>
                                        {/* <a
                                            href=""
                                            style={{ display: "inline-flex", alignItems: "center" }}
                                        >
                                            Talk to an expert{""}
                                            <img
                                                src="img/arrow-right.png"
                                                style={{ maxWidth: 24 }}
                                                alt=""
                                            />
                                        </a> */}
                                        <Link
                                            to="https://cal.com/baazhq"
                                            className={styles.requestDemoButton}
                                        >
                                            Talk to an expert{" "}
                                            <div className={styles.arrowContainer}>
                                                <img
                                                    src="/img/arrow_forward.svg"
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

function Container({ children }) {
    return (
        <div
            className={styles.containerHero1}
            style={{
                padding: "80px 24px",
                background: " #ffffff",
            }}
        >
            {children}
        </div>
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
            <div style={{ display: "flex" }}>
                <Gitbutton href="https://github.com/baazhq/baaz">Star on GitHub</Gitbutton>
                <ActionButton href="https://www.launchpass.com/baaz">Join Slack</ActionButton>
            </div>
        </nav>
    )
}

function Logo() {
    return (
        <Link to="/">
            <img
                src="/img/logo.png"
                alt="secure-icon"
                style={{ width: "250px", height: "auto", marginRight: "auto" }}
            />
        </Link>
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

export default Services
