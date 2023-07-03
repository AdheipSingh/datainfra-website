import React from "react"
import BlogPostItem from "@theme-original/BlogPostItem"
import Link from "@docusaurus/Link"

export default function BlogPostItemWrapper(props) {
    React.useEffect(() => {
        // Delete default content: Dropdown and logo
        document.querySelector(".navbar__items > a").style.display = "none"
        document.querySelector(".navbar__items > div").style.display = "none"

        // Prepare img element with new logo
        const imgElement = document.createElement("img")
        imgElement.src = "/img/logo-text-light.svg"
        imgElement.alt = "logo"

        // Append the img element to nav element
        document.querySelector(".navbar__items").appendChild(imgElement)

        // Add padding to right side to make room for Join Slack
        document.querySelector(".navbar__items.navbar__items--right").style.marginRight = "290px"
    }, [])

    return (
        <>
            <ActionButton to="/demo">Book Demo</ActionButton>
            <BlogPostItem {...props} />
        </>
    )
}

export function ActionButton({ className, to, children }) {
    return (
        <Link
            className={className}
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
                position: "fixed",
                top: "17px",
                right: "56px",
                zIndex: 999,
            }}
        >
            {children}
        </Link>
    )
}
