import React from "react"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import styles from "./styles.module.css"

export default function Demo() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: "",
    })

    function handleChange(event) {
        const { name, value } = event.target
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    }

    return (
        <>
            <NavBar>
                <Logo />

                <NavLink to="/documentation">Documentation</NavLink>

                <NavLink to="/blog">Blogs</NavLink>

                <ActionButton to="/">Book Demo</ActionButton>
            </NavBar>

            <Main>
                {/* Left side */}
                <div style={{ flex: 1, paddingTop: "150px" }}>
                    <H2>GET A DEMO</H2>

                    <H1>Talk to DataInfra</H1>

                    <KeyPoint>
                        <img src="/img/ticksquare.svg" alt="square-icon" />
                        Accelerate Real-Time Anaytics Infrastructure on Kubernetes
                    </KeyPoint>

                    <KeyPoint>
                        <img src="/img/ticksquare.svg" alt="square-icon" />
                        Completely Own your Data, Cost and Security
                    </KeyPoint>

                    <KeyPoint>
                        <img src="/img/ticksquare.svg" alt="square-icon" />
                        Avoid Costly SAAS vendors, Enable your teams by the right tooling
                    </KeyPoint>
                </div>

                {/* Right side */}
                <div style={{ flex: 1 }}>
                    <FormContainer>
                        <FormTitle>SCHEDULE A DEMO</FormTitle>

                        <Form action="https://formspree.io/f/mgebqzok" method="POST">
                            <Label htmlFor="firstName">
                                First Name**
                                <br />
                                <input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    style={inputStyle}
                                />
                            </Label>

                            <br />

                            <Label htmlFor="lastName">
                                Last Name**
                                <br />
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    style={inputStyle}
                                />
                            </Label>

                            <br />

                            <Label htmlFor="email">
                                Business Email**
                                <br />
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    style={inputStyle}
                                />
                            </Label>

                            <br />

                            <Label htmlFor="company">
                                Company Name**
                                <br />
                                <input
                                    type="text"
                                    name="company"
                                    id="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    required
                                    style={inputStyle}
                                />
                            </Label>

                            <br />

                            <Label htmlFor="message">
                                Message (Optional)
                                <br />
                                <textarea
                                    name="message"
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    style={{ ...inputStyle, padding: "10px" }}
                                />
                            </Label>

                            <br />

                            <FormButton>LET'S TALK</FormButton>
                        </Form>
                    </FormContainer>
                </div>
            </Main>
        </>
    )
}

// ** Styled Components
export function NavBar({ children }) {
    return (
        <nav
            style={{
                height: "90px",
                background: "#001EAA",
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

export function Logo() {
    return (
        <Link to="/" style={{ marginRight: "auto" }}>
            <img src="/img/logo-text-light.svg" alt="secure-icon" />
        </Link>
    )
}

export function NavLink({ to, children }) {
    return (
        <Link
            className={styles.navbar__link_hover}
            to={to}
            style={{
                color: " #fff",
                marginLeft: "64px",
                fontSize: "1.125rem",
            }}
        >
            {children}
        </Link>
    )
}

export function ActionButton({ to, children }) {
    return (
        <Link
            to={to}
            style={{
                height: "56px",
                width: "223px",
                background: "#4361ee",
                borderRadius: "40px",
                border: "none",
                color: "#fff",
                fontWeight: 600,
                fontSize: "1.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                marginLeft: "64px",
            }}
        >
            {children}
        </Link>
    )
}

function Main({ children }) {
    return (
        <main
            style={{
                background: "#001EAA",
                color: "#fff",
                padding: "56px",
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: "100px",
            }}
        >
            {children}
        </main>
    )
}

function H2({ children }) {
    return (
        <h2
            style={{
                fontSize: "24px",
                lineHeight: "40px",
                fontWeight: 900,
                color: "#2aff8c",
                marginBottom: "8px",
            }}
        >
            {children}
        </h2>
    )
}

function H1({ children }) {
    return (
        <h1
            style={{
                fontSize: "56px",
                lineHeight: "70px",
                fontWeight: 900,
                marginBottom: "102px",
            }}
        >
            {children}
        </h1>
    )
}

function KeyPoint({ children }) {
    return (
        <p
            style={{
                fontSize: "20px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "16px",
            }}
        >
            {children}
        </p>
    )
}

function FormContainer({ children }) {
    return (
        <div
            style={{
                width: "538px",
                background: "#fff",
                borderRadius: "32px",
                margin: "auto",
                paddingTop: "1px",
            }}
        >
            {children}
        </div>
    )
}

function FormTitle({ children }) {
    return (
        <h3
            style={{
                color: "#000",
                textAlign: "center",
                marginTop: "32px",
                marginBottom: "40px",
                fontSize: "24px",
                lineHeight: "40px",
            }}
        >
            {children}
        </h3>
    )
}

function Form({ children, ...rest }) {
    return (
        <form
            {...rest}
            style={{
                width: "474px",
                margin: "auto",
                paddingBottom: "62px",
                position: "relative",
            }}
        >
            {children}
        </form>
    )
}

function Label({ children, ...rest }) {
    return (
        <label
            style={{ color: "#000", lineHeight: "24px", fontSize: "20px" }}
            {...rest} //
        >
            {children}
        </label>
    )
}

const inputStyle = {
    width: "100%",
    height: "56px",
    border: "1px solid #d1d1d1",
    borderRadius: "16px",
    marginTop: "10px",
    marginBottom: "24px",
    fontSize: "20px",
    paddingLeft: "10px",
}

function FormButton({ children }) {
    return (
        <button
            type="submit"
            style={{
                position: "absolute",
                left: "50%",
                transform: "translate(-50%, 50%)",
                bottom: 0,
                height: "64px",
                width: "100%",
                borderRadius: "32px",
                background: "#49FF9D",
                boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.16)",
                border: "none",
                color: "#001EAA",
                cursor: "pointer",
                fontSize: "20px",
                fontWeight: 800,
            }}
        >
            {children}
        </button>
    )
}
