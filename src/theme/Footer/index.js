import React from "react"
import Link from "@docusaurus/Link"
import { Analytics } from "@vercel/analytics/react"
import styles from "./styles.module.css"

export default function FooterWrapper() {
    return (
        <>
            <div className={styles.newsletter}>
                <h2>
                    Subscribe to our <span>Newsletter</span>
                </h2>
                <p>The BaaZ newsletter goes out every other week, don’t miss out !</p>
                <form action="https://formspree.io/f/mvgpryap" method="POST">
                    <div
                        className={styles.inputBox}
                        style={{ display: "flex", position: "relative" }}
                    >
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter your email ID"
                            required
                        />
                        <button type="submit cursor-pointer">
                            Subscribe <img src="/img/arrow-narrow-right.png" alt="" />
                        </button>
                    </div>
                </form>
            </div>
            <footer>
                <div className={styles.main}>
                    <div style={{ flex: "1" }}>
                        <img src="/img/logo-white.png" alt="logo" style={{ height: "72px" }} />

                        {/* <h5 style={{ fontWeight: 700, fontSize: "30px", marginTop: "6px" }}>
                </h5> */}

                        {/* <div style={{ display: "flex", marginTop: "32px" }}>
                    <Link to="/">
                        <SocialImg src="/img/logo-only-white.svg" alt="logo" />
                    </Link>

                    <Link to="https://www.linkedin.com/company/datainfra/">
                        <SocialImg src="/img/in.png" alt="linkedin-logo" />
                    </Link>

                    <Link to="https://github.com/datainfrahq">
                        <SocialImg src="/img/github.png" alt="github-logo" />
                    </Link>
                </div> */}

                        <p style={{ fontSize: "18px", marginTop: "24px" }}>
                            BaaZ is a centralised control plane for building SaaS. We also provide
                            services to build custom control plane solutions.
                        </p>
                    </div>

                    {/* Middle */}
                    <div className={styles.importantLinks} style={{ flex: "1", marginTop: "24px" }}>
                        <div style={{ width: "fit-content", margin: "auto" }}>
                            <h5
                                className={styles.links}
                                style={{ fontWeight: 800, fontSize: "20px", marginBottom: 36 }}
                            >
                                Resources
                            </h5>

                            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                <Navlink to="/">Home</Navlink>
                                <Navlink to="/blog">Blogs</Navlink>
                                <a
                                    href="https://cal.com/baazhq"
                                    target="_blank"
                                    style={{ color: "white", fontSize: "16px", marginTop: "10px" }}
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Middle */}
                    <div className={styles.importantLinks} style={{ flex: "1", marginTop: "24px" }}>
                        <div style={{ width: "fit-content", margin: "auto" }}>
                            <h5
                                className={styles.links}
                                style={{ fontWeight: 800, fontSize: "20px", marginBottom: 36 }}
                            >
                                Company
                            </h5>

                            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                <Navlink to="/">About</Navlink>
                                {/* <Navlink to="/blog">Careers</Navlink> */}

                                {/* <Navlink to="/services">Services</Navlink> */}
                            </div>
                        </div>
                    </div>

                    {/* Middle */}
                    <div className={styles.importantLinks} style={{ flex: "1", marginTop: "24px" }}>
                        <div style={{ width: "fit-content", margin: "auto" }}>
                            <h5
                                className={styles.links}
                                style={{ fontWeight: 800, fontSize: "20px", marginBottom: 36 }}
                            >
                                Connect
                            </h5>

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 30,
                                    marginTop: 56,
                                }}
                                className={styles.socialIcon}
                            >
                                {/* <a href="/">
                                    <img
                                        src="/img/social-icon.png"
                                        alt="logo"
                                        style={{ maxWidth: "100%", height: "auto" }}
                                    />
                                </a> */}
                                <a href="https://www.linkedin.com/company/baazhq">
                                    <img
                                        src="/img/social-icon-1.png"
                                        alt="logo"
                                        style={{ maxWidth: "100%", height: "auto" }}
                                    />
                                </a>
                                {/* <a href="/">
                                    <img
                                        src="/img/social-icon-2.png"
                                        alt="logo"
                                        style={{ maxWidth: "100%", height: "auto" }}
                                    />
                                </a> */}
                                <a href="https://github.com/baazhq">
                                    <img
                                        src="/img/social-icon-3.png"
                                        alt="logo"
                                        style={{ maxWidth: "100%", height: "auto" }}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className={styles.borderDiv} />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "0px 20px",
                    }}
                >
                    <p style={{ fontSize: 16 }}>
                        © 2024 Sadhrao Software Consulting. All rights reserved.
                    </p>

                    <div className={styles.footerLink}>
                        {/* <a href="">Terms & Conditions</a>
                        <a href="">Privacy Policy</a> */}
                    </div>
                </div>
                <Analytics />
            </footer>
        </>
    )
}

// ** Styled Components
function Footer({ className, children }) {
    return (
        <footer
            className={className}
            style={{
                display: "flex",
                gap: "10px",
                justifyContent: "space-between",
                background: "#001EAA",
                padding: "32px",
                paddingBottom: "32px",
                fontSize: "14px",
                color: "#B0C4DE",
                // marginTop: "30px", // Added margin top
            }}
        >
            {children}
        </footer>
    )
}

function SocialImg(props) {
    return <img {...props} style={{ height: "32px", marginRight: "16px" }} />
}

function Navlink({ to, children }) {
    return (
        <Link to={to} style={{ color: "white", fontSize: "16px", marginTop: "10px" }}>
            {children}
        </Link>
    )
}

const inputStyle = {
    width: "100%",
    height: "48px",
    background: "transparent",
    border: "1px solid #fff",
    borderRadius: "16px",
    marginTop: "10px",
    marginBottom: "24px",
    fontSize: "20px",
    paddingLeft: "10px",
    color: "#fff",
}
