import React from "react"
import styles from "./styles.module.css"

/**
 * LandingDiagram
 *
 * One drawing in two layouts: `desktop` from 900px up, `mobile` below.
 * Both are trusted SVG markup from ./diagrams.js; the hidden one is
 * display:none, so screen readers get one role="img" description.
 */
export default function LandingDiagram({ desktop, mobile, id, className = "" }) {
    return (
        <div id={id} className={`${styles.wrap} ${className}`}>
            <div className={styles.desktop} dangerouslySetInnerHTML={{ __html: desktop }} />
            <div className={styles.mobile} dangerouslySetInnerHTML={{ __html: mobile }} />
        </div>
    )
}
