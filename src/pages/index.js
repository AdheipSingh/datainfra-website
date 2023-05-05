import React from "react"
import Layout from "@theme/Layout"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"

export default function Home() {
    const { siteConfig } = useDocusaurusContext()

    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Control Planes for Running Data Analytics"
        >
            <div style={{ paddingLeft: "90px", paddingTop: "120px" }}>
                <h1>Control Planes for Running Data Analytics</h1>
                <ul>
                    <li>Secure: Keep your data within your network.</li>
                    <li>
                        Efficient: Streamline your data management with
                        kubernetes native features.
                    </li>
                    <li>
                        Open: Utilize open source data analytics for flexibility
                        and transparency."
                    </li>
                    <li>Cost-effective: Avoid costly SAAS vendors.</li>
                </ul>
            </div>
        </Layout>
    )
}
