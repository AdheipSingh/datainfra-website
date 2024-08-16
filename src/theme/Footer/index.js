import React from "react"
import Link from "@docusaurus/Link"
import { Analytics } from "@vercel/analytics/react"
import styles from "./styles.module.css"

export default function FooterWrapper() {
    return (
        <Footer className={styles.main}>
            {/* Left */}
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

                <p style={{ fontSize: "20px", marginTop: "24px" }}>
                    @Copyright by Sadhrao Software Consulting. All rights reserved.
                </p>
            </div>

            {/* Middle */}
            <div className={styles.importantLinks} style={{ flex: "1", marginTop: "24px" }}>
                <div style={{ width: "fit-content", margin: "auto" }}>
                    <h5
                        className={styles.links}
                        style={{ fontWeight: 800, fontSize: "20px", marginBottom: 36 }}
                    >
                        Useful Links
                    </h5>

                    <div style={{ display: "flex", flexDirection: "row", gap: 30 }}>
                        <Navlink to="/">Home</Navlink>
                        <Navlink to="/blog">Blogs</Navlink>
                        <Navlink to="/documentation">Documentation</Navlink>
                        <a
                            href="https://cal.com/baazhq"
                            target="_blank"
                            style={{ color: "white", fontSize: "20px", marginTop: "10px" }}
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>

            {/* <div style={{ flex: "1" }}>

            </div> */}
        </Footer>
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
        <Link to={to} style={{ color: "white", fontSize: "20px", marginTop: "10px" }}>
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
