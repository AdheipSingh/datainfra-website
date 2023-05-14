import React from "react"
import Link from "@docusaurus/Link"
import styles from "./styles.module.css"

export default function FooterWrapper() {
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        message: "",
    })

    function handleChange(event) {
        const { name, value } = event.target
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    }

    return (
        <Footer>
            {/* Left */}
            <div style={{ flex: "1" }}>
                <img src="/img/logo-only-white.svg" alt="logo" style={{ height: "72px" }} />

                <h5 style={{ fontWeight: 700, fontSize: "30px", marginTop: "6px" }}>
                    Data<span style={{ fontWeight: 400 }}>Infra</span> Developer
                </h5>

                <p style={{ lineHeight: "25.1px", fontSize: "20px" }}>
                    Apache, Apache Druid, Druid, the Apache Druid logo, Apache Kafka, Kafka, the
                    Apache Kafka logo, Apache Pinot, Pinot, the Apache Superset logo are registered
                    trademarks or trademarks of Apache Software Foundation.
                </p>

                <div style={{ display: "flex", marginTop: "32px" }}>
                    <Link to="/">
                        <SocialImg src="/img/logo-only-white.svg" alt="logo" />
                    </Link>

                    <Link to="https://www.linkedin.com/company/datainfra/">
                        <SocialImg src="/img/in.png" alt="linkedin-logo" />
                    </Link>

                    <Link to="https://github.com/datainfrahq">
                        <SocialImg src="/img/github.png" alt="github-logo" />
                    </Link>
                </div>

                <p style={{ fontSize: "20px", marginTop: "64px" }}>
                    @Copyright by DataInfra. All rights reserved
                </p>
            </div>

            {/* Middle */}
            <div style={{ flex: "1", marginTop: "24px" }}>
                <div style={{ width: "fit-content", margin: "auto" }}>
                    <h5 className={styles.links} style={{ fontWeight: 800, fontSize: "20px" }}>
                        Important Links
                    </h5>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <Navlink to="/">Home</Navlink>
                        <Navlink to="/blog">Blogs</Navlink>
                        <Navlink to="/documentation">Documentation</Navlink>
                    </div>
                </div>
            </div>

            {/* Right */}
            <div style={{ flex: "1" }}>
                <div style={{ margin: "auto", width: "314px", marginTop: "24px" }}>
                    <h5 className={styles.contact} style={{ fontWeight: 800, fontSize: "20px" }}>
                        Contact Us
                    </h5>

                    <form
                        action="https://formspree.io/f/mgebqzok"
                        method="POST"
                        style={{ marginTop: "30px" }}
                    >
                        <label htmlFor="name" style={{ fontWeight: 700 }}>
                            Name**
                            <br />
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={inputStyle}
                            />
                        </label>

                        <label htmlFor="email" style={{ fontWeight: 700 }}>
                            Email Addess**
                            <br />
                            <input
                                type="text"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={inputStyle}
                            />
                        </label>

                        <label htmlFor="message" style={{ fontWeight: 700 }}>
                            Message**
                            <br />
                            <textarea
                                type="message"
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                style={{ ...inputStyle, height: "96px", padding: "10px" }}
                            />
                        </label>

                        <button
                            style={{
                                border: "none",
                                width: "100%",
                                height: "56px",
                                color: "#001EAA",
                                borderRadius: "16px",
                                background: "#49FF9D",
                                fontSize: "18px",
                                fontWeight: 800,
                                marginTop: "5px",
                            }}
                        >
                            SEND
                        </button>
                    </form>
                </div>
            </div>
        </Footer>
    )
}

// ** Styled Components
function Footer({ children }) {
    return (
        <footer
            style={{
                display: "flex",
                gap: "10px",
                justifyContent: "space-between",
                background: "#001EAA",
                padding: "48px",
                paddingBottom: "64px",
                color: "#fff",
            }}
        >
            {children}
        </footer>
    )
}

function SocialImg({ props }) {
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
