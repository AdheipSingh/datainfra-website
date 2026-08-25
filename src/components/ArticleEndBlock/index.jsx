import React from "react"
import Link from "@docusaurus/Link"
import EmailCapture, { EMAIL_CAPTURE_ENABLED } from "@site/src/components/EmailCapture"
import RelatedPosts from "@site/src/components/RelatedPosts"
import { getRelatedPosts } from "./postIndex"
import styles from "./styles.module.css"

/**
 * ArticleEndBlock
 *
 * Shared end block for all blog posts and case studies. Replaces the
 * generic "Schedule a Call" CTA: soft CTA (email capture for the NCCL
 * fallback test + pre-flight checklist), medium CTA (/audit), and a
 * tag-based "Related reading" list.
 *
 * Props:
 *   - tags?: string[]      (current page tags, for related-post selection)
 *   - currentUrl?: string  (current page permalink, excluded from related)
 */
export default function ArticleEndBlock({ tags = [], currentUrl = "" }) {
    const related = getRelatedPosts(tags, currentUrl)

    return (
        <div className={styles.endBlock}>
            <aside className={styles.cta} role="complementary">
                <p className={styles.lead}>
                    If this looks like your cluster, there is a faster path than
                    debugging alone.
                </p>
                {EMAIL_CAPTURE_ENABLED && (
                    <p className={styles.text}>
                        Start with the 5-minute NCCL fallback test - many working
                        clusters are silently running collectives over TCP.
                    </p>
                )}
                <EmailCapture />
                <p className={styles.auditLine}>
                    Or book a fixed-scope{" "}
                    <Link to="/audit" className={styles.auditLink}>
                        GPU Cluster Audit →
                    </Link>
                </p>
            </aside>
            <RelatedPosts title="Related reading" posts={related} />
        </div>
    )
}
