import React from "react"
import Link from "@docusaurus/Link"
import styles from "./styles.module.css"

// Form backend endpoint (Formspree), set in this one place. Example:
// "https://formspree.io/f/<form-id>". While it is empty the component
// never renders a form: it renders a mailto link to MAILTO with the
// subject prefilled, or a link to `fallbackTo` when one is given.
const FORM_ACTION = ""
const MAILTO = "adheip@baaz.dev"

export const FORM_ENABLED = Boolean(FORM_ACTION)

const BUILDING_OPTIONS = [
    "GPU pods at homes or small sites",
    "Modular compute at renewable sites",
    "Edge inference for an existing network",
    "Evaluating the space",
]

/**
 * WhitepaperRequest
 *
 * Request form for material sent by hand from adheip@baaz.dev: the
 * energy-sites whitepaper, and the fabric check on /networking.
 *
 * Props:
 *   - subject:      email subject (and the form backend's _subject)
 *   - buttonLabel:  label of the submit button or fallback link
 *   - note?:        line shown under the button
 *   - askBuilding?: include the "What are you building?" field (default true)
 *   - fallbackTo?:  internal path the fallback links to instead of mailto
 */
export default function WhitepaperRequest({
    subject,
    buttonLabel,
    note,
    askBuilding = true,
    fallbackTo,
}) {
    if (!FORM_ACTION) {
        return (
            <div className={styles.fallback}>
                <div className="btn-row">
                    {fallbackTo ? (
                        <Link className="btn btn-primary btn-lg" to={fallbackTo}>{buttonLabel}</Link>
                    ) : (
                        <a className="btn btn-primary btn-lg" href={`mailto:${MAILTO}?subject=${encodeURIComponent(subject)}`}>
                            {buttonLabel}
                        </a>
                    )}
                </div>
                {note && <p className={styles.note}>{note}</p>}
            </div>
        )
    }

    return (
        <form className={styles.form} action={FORM_ACTION} method="POST">
            <input type="hidden" name="_subject" value={subject} />
            <label className={styles.field}>
                <span>Name</span>
                <input type="text" name="name" autoComplete="name" required />
            </label>
            <label className={styles.field}>
                <span>Work email</span>
                <input type="email" name="email" autoComplete="email" required />
            </label>
            <label className={styles.field}>
                <span>Company</span>
                <input type="text" name="company" autoComplete="organization" required />
            </label>
            {askBuilding && (
                <label className={styles.field}>
                    <span>What are you building?</span>
                    <select name="building" required defaultValue="">
                        <option value="" disabled />
                        {BUILDING_OPTIONS.map((o) => (
                            <option key={o} value={o}>{o}</option>
                        ))}
                    </select>
                </label>
            )}
            <div className={styles.actions}>
                <button type="submit" className="btn btn-primary btn-lg">{buttonLabel}</button>
                {note && <p className={styles.note}>{note}</p>}
            </div>
        </form>
    )
}
