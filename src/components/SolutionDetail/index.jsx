import React from "react"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import Head from "@docusaurus/Head"
import { PageMetadata } from "@docusaurus/theme-common"
import { Navbar } from "@site/src/components/Layout"

const Chevron = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>)

/**
 * SolutionDetail
 *
 * Page shell for a solution under /solutions: metadata, Service
 * structured data, breadcrumb, H1, lead and hero buttons. The page's
 * own sections come in as children. It deliberately renders nothing
 * else: no technologies list, no FAQ, no process steps.
 *
 * Props:
 *   - seoTitle, seoDescription: title tag (without "| BaaZ") and meta description
 *   - ogImage?:    path of the page's Open Graph image
 *   - path:        the page's own URL path, for the structured data
 *   - breadcrumb:  [{ label, to? }], the last item is the current page
 *   - h1, lead
 *   - actions?:    [{ label, to?, href?, primary? }]
 */
export default function SolutionDetail({
    seoTitle,
    seoDescription,
    ogImage,
    path,
    breadcrumb = [],
    h1,
    lead,
    actions = [],
    children,
}) {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": h1,
        "url": `https://baaz.dev${path}`,
        "provider": { "@type": "Organization", "name": "BaaZ", "url": "https://baaz.dev" },
        "areaServed": "Worldwide",
    }

    return (
        <Layout title={seoTitle} description={seoDescription}>
            {ogImage && <PageMetadata image={ogImage} />}
            <Head>
                <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
            </Head>
            <Navbar />
            <div className="site">
                <main>
                    <section className="page-hero">
                        <div className="container stack-v gap-16">
                            <div className="breadcrumb">
                                {breadcrumb.map((b, i) => (
                                    <React.Fragment key={b.label}>
                                        {i > 0 && <Chevron />}
                                        {b.to ? <Link to={b.to}>{b.label}</Link> : <span>{b.label}</span>}
                                    </React.Fragment>
                                ))}
                            </div>
                            <h1 className="h1">{h1}</h1>
                            <p className="lead">{lead}</p>
                            {actions.length > 0 && (
                                <div className="btn-row mt-8">
                                    {actions.map((a) => {
                                        const cls = `btn ${a.primary ? "btn-primary" : "btn-secondary"} btn-lg`
                                        return a.to ? (
                                            <Link className={cls} to={a.to} key={a.label}>{a.label}</Link>
                                        ) : (
                                            <a className={cls} href={a.href} key={a.label}>{a.label}</a>
                                        )
                                    })}
                                </div>
                            )}
                        </div>
                    </section>
                    {children}
                </main>
            </div>
        </Layout>
    )
}
