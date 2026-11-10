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
        lead: "Planning a fleet?",
        label: "Distributed GPU compute at energy sites",
        to: "/solutions/distributed-gpu-compute-energy-sites",
    },
    networking: {
        lead: "Planning a cluster, or inheriting one?",
        label: "Fabric check",
        to: "/networking#fabric-check",
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
