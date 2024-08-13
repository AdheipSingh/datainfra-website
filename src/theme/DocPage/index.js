import React from "react"
import DocPage from "@theme-original/DocPage"
import Link from "@docusaurus/Link"
import { useLocation } from "@docusaurus/router"
import styles from "./styles.module.css"

export default function DocPageWrapper(props) {
    let { pathname } = useLocation()

    // Clean path if necessary
    if (pathname.includes("/documentation")) {
        pathname = pathname.split("/documentation")[0]
    }
    if (pathname.includes("/tutorials")) {
        pathname = pathname.split("/tutorials")[0]
    }
    if (pathname.includes("/installation")) {
        pathname = pathname.split("/installation")[0]
    }

    let isDSOI = pathname.includes("distributed-systems-operator-interface")

    return (
        <>
            <div
                className={styles.links}
                style={{ position: "fixed", zIndex: 999, top: "31px", left: "150px" }}
            >
                <NavLink to={pathname + "/documentation"} style={{ marginLeft: "18px" }}>
                </NavLink>
                {!isDSOI ? (
                    <>
                        <NavLink to={pathname + "/tutorials"}></NavLink>
                        <NavLink to={pathname + "/installation"}></NavLink>
                    </>
                ) : null}
            </div>
            <DocPage {...props} />
        </>
    )
}

function NavLink({ to, style, children }) {
    return (
        <Link
            className={styles.navbar__link_hover}
            to={to}
            style={{
                color: " #fff",
                marginLeft: "72px",
                fontSize: "1.125rem",
                fontWeight: 500,
                textDecoration: "none",
                ...style,
            }}
        >
            {children}
        </Link>
    )
}
