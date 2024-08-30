import Layout from "@theme/Layout"
import React from "react"
import styles from "../index.module.css"

const Services = () => {
    return (
        <>
            <Layout>
                <div>
                    <div className={styles.heroSection}>
                        <Container>
                            <div>
                                <h2 style={{ fontSize: "4.4vw", fontWeight: 800 }}>
                                    Custom Control Planes for <span>Target Solutions</span>
                                </h2>
                                <p style={{ maxWidth: "68%" }}>
                                    We help companies adopt control plane architectures specific for
                                    their businesses
                                </p>
                                <a href="">
                                    Schedule Control Plane Consultation{" "}
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
                                    <h3>
                                        Control Plane Architecture
                                    </h3>
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
                                    <h3>
                                        State Management
                                    </h3>
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
                                    <h3>Kubernetes  </h3>
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
                                    <h3>
                                        Cost Optimization
                                    </h3>
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
                                    <h3>
                                        Security
                                    </h3>
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
                                    <h3>Consutling</h3>
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
                    <div style={{ padding: "80px 24px" }}>
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
                                    As maintainers of widely adopted OSS projects used by leading
                                    tech companies, we bring deep technical <br /> expertise and
                                    industry insight.
                                </p>
                            </div>
                            <div className={styles.wrapBody}>
                                <div className={styles.col3}>
                                    <div className={styles.counterBox}>
                                        <div className={styles.countPurple}>10+</div>
                                        <div className={styles.counterText}>Control Plane</div>
                                    </div>
                                </div>
                                <div className={styles.col3}>
                                    <div className={styles.counterBox}>
                                        <div className={styles.count}>250+</div>
                                        <div className={styles.counterText}>Control Plane</div>
                                    </div>
                                </div>
                                <div className={styles.col3}>
                                    <div className={styles.counterBox}>
                                        <div className={styles.countPurple}>250+</div>
                                        <div className={styles.counterText}>Control Plane</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p>
                                    We offer system design, hands-on implementation, and support. To
                                    learn more about <br /> working with us, feel free to{" "}
                                    <b>Contact Us</b>
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
                                            Learn the technology and architecture behind building AI
                                            Cloud using open source and cloud native technologies.
                                        </p>
                                        <div style={{ display: "flex", alignItems: "center" }}>
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
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.col3}>
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
                                            Learn the technology and architecture behind building AI
                                            Cloud using open source and cloud native technologies.
                                        </p>
                                        <div style={{ display: "flex", alignItems: "center" }}>
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
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.col3}>
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
                                            Learn the technology and architecture behind building AI
                                            Cloud using open source and cloud native technologies.
                                        </p>
                                        <div style={{ display: "flex", alignItems: "center" }}>
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
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.col3}>
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
                                            Learn the technology and architecture behind building AI
                                            Cloud using open source and cloud native technologies.
                                        </p>
                                        <div style={{ display: "flex", alignItems: "center" }}>
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
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.col3}>
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
                                            Learn the technology and architecture behind building AI
                                            Cloud using open source and cloud native technologies.
                                        </p>
                                        <div style={{ display: "flex", alignItems: "center" }}>
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
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.col3}>
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
                                            Learn the technology and architecture behind building AI
                                            Cloud using open source and cloud native technologies.
                                        </p>
                                        <div style={{ display: "flex", alignItems: "center" }}>
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
                                        </div>
                                    </div>
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
                                        <a
                                            href=""
                                            style={{ display: "inline-flex", alignItems: "center" }}
                                        >
                                            Talk to an expert{" "}
                                            <img
                                                src="img/arrow-right.png"
                                                style={{ maxWidth: 24 }}
                                                alt=""
                                            />
                                        </a>
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

export default Services
