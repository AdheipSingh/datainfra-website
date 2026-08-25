import React, { useState } from "react"
import styles from "./styles.module.css"

// TODO(ADHEIP-INPUT): email provider. Set FORM_ACTION to the provider's form
// endpoint (e.g. Buttondown: "https://buttondown.email/api/emails/embed-subscribe/<user>")
// and EMAIL_FIELD_NAME to the field name it expects. Until it is set, the
// component renders nothing - the assets are delivered by email only, never
// as direct downloads. Source material lives in lead-magnets/ (not published).
const FORM_ACTION = ""
const EMAIL_FIELD_NAME = "email"

// True once a provider endpoint is configured; callers use this to hide
// copy that references the emailed assets.
export const EMAIL_CAPTURE_ENABLED = Boolean(FORM_ACTION)

/**
 * EmailCapture
 *
 * Email-capture form delivering the NCCL fallback test and the GPU cluster
 * pre-flight checklist. Used in the article end block, on /contact, and in
 * the homepage optimization door.
 *
 * Props:
 *   - buttonLabel?: string
 */
export default function EmailCapture({
    buttonLabel = "Get the test and pre-flight checklist",
}) {
    const [submitted, setSubmitted] = useState(false)

    if (!FORM_ACTION) return null

    if (submitted) {
        return (
            <p className={styles.confirmation}>
                Check your inbox - the test and checklist are on the way.
            </p>
        )
    }

    return (
        <form
            className={styles.form}
            action={FORM_ACTION}
            method="post"
            target="_blank"
            onSubmit={() => setSubmitted(true)}
        >
            <input
                type="email"
                name={EMAIL_FIELD_NAME}
                required
                placeholder="you@company.com"
                className={styles.input}
                aria-label="Email address"
            />
            <button type="submit" className={styles.button}>
                {buttonLabel} →
            </button>
        </form>
    )
}
