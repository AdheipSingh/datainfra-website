import React from "react"
import Link from "@docusaurus/Link"
import styles from "./styles.module.css"

/**
 * RelatedPosts
 *
 * Styled list of related content links. Accepts internal or external URLs.
 *
 * Props:
 *   - title?: string   (default: "Related Reading")
 *   - posts:  Array<{ title: string, url: string, description?: string }>
 */
export default function RelatedPosts({ title = "Related Reading", posts = [] }) {
    if (!posts || posts.length === 0) return null

    return (
        <section className={styles.related} aria-labelledby="related-heading">
            <h2 id="related-heading" className={styles.title}>
                {title}
            </h2>
            <ul className={styles.list}>
                {posts.map(({ title: postTitle, url, description }, idx) => {
                    const isExternal = /^https?:\/\//.test(url)
                    const Wrapper = isExternal ? "a" : Link
                    const linkProps = isExternal
                        ? { href: url, target: "_blank", rel: "noopener noreferrer" }
                        : { to: url }
                    return (
                        <li key={idx} className={styles.item}>
                            <Wrapper {...linkProps} className={styles.link}>
                                <span className={styles.postTitle}>{postTitle}</span>
                                {description && (
                                    <span className={styles.desc}>{description}</span>
                                )}
                            </Wrapper>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
