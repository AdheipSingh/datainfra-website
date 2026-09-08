// T0 — headless check that Vercel Analytics + GA4 beacons actually fire in prod.
// Usage: node scripts/tag-check.mjs <url> [url...]
// Requires: npm i -D playwright && npx playwright install chromium
import { chromium } from "playwright";

const urls = process.argv.slice(2);
if (urls.length === 0) {
  console.error("usage: node scripts/tag-check.mjs <url> [url...]");
  process.exit(2);
}

const browser = await chromium.launch();
for (const u of urls) {
  const page = await browser.newPage();
  const hits = { vercel: 0, ga4: 0, errors: [] };
  page.on("request", (r) => {
    const url = r.url();
    if (url.includes("/_vercel/insights")) hits.vercel++;
    if (url.includes("google-analytics.com/g/collect") || url.includes("googletagmanager.com/gtag/js")) hits.ga4++;
  });
  page.on("pageerror", (e) => hits.errors.push(String(e)));
  page.on("console", (m) => { if (m.type() === "error") hits.errors.push(m.text()); });
  await page.goto(u, { waitUntil: "networkidle" });
  await page.waitForTimeout(2500);
  console.log(u, JSON.stringify(hits));
  await page.close();
}
await browser.close();
