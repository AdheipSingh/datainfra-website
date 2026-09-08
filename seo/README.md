# SEO evidence & inventory

Working artifacts for the SEO remediation (see `baaz-seo-remediation-spec.md`).

## Files
- `inventory/legacy-urls.csv` — old URLs, source, and live prod status. Snapshot
  taken **before** the T2/T3 deploy (so `/demo` still shows `301 -> /`). Re-run
  `scripts/gen-inventory.sh` after deploy to confirm `/demo -> /contact`.

## Evidence to generate (need network / a browser / production)
- `evidence/tag-check-<date>.txt` — `node scripts/tag-check.mjs <urls...>`
  (requires `npm i -D playwright && npx playwright install chromium`). Confirms
  Vercel Analytics + GA4 beacons fire. **T0.**
- `evidence/seo-check-<sha>.txt` — `scripts/seo-check.sh https://baaz.dev`
  after each deploy. **§5.2.**
- `evidence/crawl.json` / `crawled-urls.txt` — `npx linkinator` crawl for
  broken links + orphans. **T7.**

## Owner-only (spec §6) — cannot be done from the repo
Google Search Console, GA4, and the Vercel dashboard checks. See spec §6.
Key ones: add a **Domain property** (`baaz.dev`) in GSC; confirm `www.baaz.dev`
is attached to the Vercel project and redirects to apex; request indexing for
the five reindexed posts and the new marketing pages after deploy.
