import React from "react"
import Link from "@docusaurus/Link"
import RelatedPosts from "@site/src/components/RelatedPosts"
import { getRelatedPosts } from "./postIndex"
import styles from "./styles.module.css"

// The door each blog tag belongs to. Every post carries networking or
// energy-sites (scripts/blog-tags-check.mjs); anything else falls back
// to the networking door.
const DOORS = {
    "energy-sites": {
        lead: "Planning GPU compute at your energy sites?",
        text: "Tell us about the sites. In one call we will tell you what it would take.",
        label: "Distributed GPU compute",
        to: "/distributed-gpu-compute",
    },
    networking: {
        lead: "The GPU Cluster Audit",
        text: "Two weeks on a cluster you already run. We test each path under load, fix what is safe to fix, and hand you the rest as a plan.",
        label: "Book a GPU Cluster Audit",
        to: "/networking#audit",
    },
}

export function doorForTags(tags = []) {
    const set = new Set(tags.map((t) => String(t).toLowerCase()))
    return set.has("energy-sites") ? DOORS["energy-sites"] : DOORS.networking
}

/**
 * ArticleEndBlock
 *
 * Shared end block for all blog posts: a link to the door the post's
 * tag belongs to, and a tag-based "Related reading" list.
 *
 * Props:
 *   - tags?: string[]      (current page tags, for the door and related posts)
 *   - currentUrl?: string  (current page permalink, excluded from related)
 */
export default function ArticleEndBlock({ tags = [], currentUrl = "" }) {
    const related = getRelatedPosts(tags, currentUrl)
    const door = doorForTags(tags)

    return (
        <div className={styles.endBlock}>
            <aside className={styles.cta} role="complementary">
                <p className={styles.lead}>{door.lead}</p>
                <p className={styles.text}>{door.text}</p>
                <p className={styles.doorLine}>
                    <Link to={door.to} className={styles.doorLink}>
                        {door.label} →
                    </Link>
                </p>
            </aside>
            <RelatedPosts title="Related reading" posts={related} />
        </div>
    )
}
