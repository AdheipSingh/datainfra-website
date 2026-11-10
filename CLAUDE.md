# baaz.dev

Docusaurus 2.4 site for BaaZ, deployed on Vercel. `npm ci`, `npm run build`, `npm run start` for a dev server. Pages are React components under `src/pages/`; the navbar and footer are the custom components in `src/components/Layout/`, not `docusaurus.config.js`. Redirects live in `vercel.json`.

## What the site says

BaaZ designs GPU deployments and builds the software that runs them: which hardware, where it sits, how it is powered and connected, and everything from the operating system up. Two kinds of deployment, and nothing else: GPU networking on Kubernetes, and distributed GPU compute at energy sites. The full structure and page copy are in `SITE-REVAMP-SPEC.md`; build to it, do not improvise copy.

## Rules for every change

- No client is ever named: not in copy, blog posts, images, alt text, commit messages or PR descriptions. `scripts/client-check.mjs` runs before every build with the names supplied through the `CLIENT_NAMES` environment variable (comma-separated); the names never enter the repository.
- No other company or product is named as a comparison. Software we run or contribute to is named by its project name only.
- Contributions are "we contribute to", never "ours" or "our code". List only merged changes, each linked.
- No figures BaaZ cannot back with its own delivery: no utilization, speed-up, cost or fleet-size numbers, no "proven" or "in production" for the energy-sites work.
- No "technologies we work with" lists, no FAQ sections, no process diagrams, no testimonials.
- Plain words: tunnel, not overlay; security chip, not TPM; its own lane on the router, not VLAN.
- US spelling. Short sentences. No em dashes in headings. No exclamation marks.
- Existing URLs are never changed or removed without a 301 in `vercel.json`. Add every new page and every redirect to `scripts/seo-check.sh`.
- Every blog post carries one of the tags `networking` or `energy-sites`.
