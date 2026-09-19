import React from "react"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import Head from "@docusaurus/Head"
import { Navbar } from "@site/src/components/Layout"

const Arrow = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>)
const Chevron = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>)
const Plus = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>)

// Shared "Proof, not claims" callout — the same on every service page.
function ProofCallout() {
    return (
        <div className="callout mt-48">
            <b>Proof, not claims.</b> Our engineers&apos; work on this layer is upstream in
            NVIDIA&apos;s own projects: KAI Scheduler, Network Operator, DOCA driver build,
            ipoib-cni. <Link to="/about">See the contributions →</Link>
        </div>
    )
}

/**
 * ServiceDetail — shared layout for the five service detail pages, built from
 * the Service-Detail design frame. Copy comes in as props (kept dash-free).
 */
export default function ServiceDetail({
    seoTitle,
    seoDescription,
    breadcrumb,
    h1,
    lead,
    valueProps = [],
    whatWeDo,
    steps = [],
    tech = [],
    related = [],
    faqs = [],
    ctaEyebrow,
    ctaHeading,
}) {
    const faqSchema = faqs.length
        ? {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map((f) => ({
                  "@type": "Question",
                  "name": f.q,
                  "acceptedAnswer": { "@type": "Answer", "text": f.a },
              })),
          }
        : null

    return (
        <Layout title={seoTitle} description={seoDescription}>
            {faqSchema && (
                <Head>
                    <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
                </Head>
            )}
            <Navbar />
            <div className="site">
                <main>
                    <section className="page-hero">
                        <div className="container stack-v gap-16">
                            <div className="breadcrumb">
                                <Link to="/services">Services</Link> <Chevron /> <span>{breadcrumb}</span>
                            </div>
                            <h1 className="h1">{h1}</h1>
                            <p className="lead">{lead}</p>
                            <div className="btn-row mt-8">
                                <a className="btn btn-primary" href="https://cal.com/baazhq" target="_blank" rel="noopener noreferrer">Schedule a call <Arrow /></a>
                                <a className="btn btn-secondary" href="#faq">Read the FAQ</a>
                            </div>
                        </div>
                    </section>

                    {valueProps.length > 0 && (
                        <section className="section tight">
                            <div className="container">
                                <div className="props">
                                    {valueProps.map((p) => (
                                        <div className="prop" key={p.title}><div className="h4">{p.title}</div><p>{p.body}</p></div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}

                    {whatWeDo && (
                        <section className="section alt">
                            <div className="container">
                                <div className="section-head">
                                    <span className="eyebrow">What we do</span>
                                    <h2 className="h2">{whatWeDo.heading}</h2>
                                    {whatWeDo.lead && <p className="lead">{whatWeDo.lead}</p>}
                                </div>
                                <div className="def-rows">
                                    {whatWeDo.rows.map((r) => (
                                        <div className="def-row" key={r.n}>
                                            <div className="k"><span className="n">{r.n}</span><div className="h4">{r.title}</div></div>
                                            <div className="v">{r.body}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}

                    {steps.length > 0 && (
                        <section className="section">
                            <div className="container">
                                <div className="section-head">
                                    <span className="eyebrow">How we work</span>
                                    <h2 className="h2">Scope, design, build, hand off.</h2>
                                </div>
                                <div className="steps">
                                    {steps.map((s) => (
                                        <div className="step" key={s.n}><span className="num">{s.n}</span><h3 className="h4">{s.title}</h3><p className="body">{s.body}</p></div>
                                    ))}
                                </div>
                                <ProofCallout />
                            </div>
                        </section>
                    )}

                    {tech.length > 0 && (
                        <section className="section alt tight">
                            <div className="container stack-v gap-16">
                                <span className="eyebrow">Technologies we work with</span>
                                <div className="chips">
                                    {tech.map((t) => (<span className="chip" key={t}>{t}</span>))}
                                </div>
                            </div>
                        </section>
                    )}

                    {related.length > 0 && (
                        <section className="section">
                            <div className="container">
                                <div className="section-head">
                                    <span className="eyebrow">Related</span>
                                    <h2 className="h2">Read before you build.</h2>
                                </div>
                                <div className="grid grid-3">
                                    {related.map((r) => (
                                        <Link className="card" to={r.to} key={r.to}>
                                            <span className="tag">{r.tag}</span>
                                            <h3 className="h4">{r.title}</h3>
                                            <span className="link-arrow">{r.cta || "Read"} <Arrow /></span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}

                    {faqs.length > 0 && (
                        <section className="section alt" id="faq">
                            <div className="container">
                                <div className="section-head">
                                    <span className="eyebrow">FAQ</span>
                                    <h2 className="h2">Questions we get on the first call.</h2>
                                </div>
                                <div className="faq">
                                    {faqs.map((f, i) => (
                                        <details key={f.q} open={i === 0}>
                                            <summary>{f.q} <Plus /></summary>
                                            <div className="a">{f.a}</div>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}

                    <section className="cta-band">
                        <div className="container">
                            <div className="inner">
                                <span className="eyebrow plain">{ctaEyebrow}</span>
                                <h2 className="h2">{ctaHeading}</h2>
                                <div className="btn-row">
                                    <a className="btn btn-primary btn-lg" href="https://cal.com/baazhq" target="_blank" rel="noopener noreferrer">Schedule a call <Arrow /></a>
                                    <Link className="btn btn-secondary btn-lg" to="/services">All services</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </Layout>
    )
}
