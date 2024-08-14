import React from 'react'
import styles from "../../theme/Footer/styles.module.css"

const index = () => {
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
        <>
            <div
                className={styles.contactContainer}
                style={{ margin: "auto", width: "314px", marginTop: "24px" }}
            >
                <h5 className={styles.contact} style={{ fontWeight: 800, fontSize: "20px" }}>
                    Contact Us
                </h5>

                <form
                    action="https://formspree.io/f/mvgpryap"
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
        </>
    )
}

export default index