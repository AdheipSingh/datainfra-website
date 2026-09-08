// T8 (optional) — stamp <lastmod> into build/sitemap.xml from git commit dates.
// Run after `docusaurus build`. Vercel clones shallowly, so git log returns
// nothing unless VERCEL_DEEP_CLONE=true is set; in that case this is a no-op.
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const SITE = "https://baaz.dev", sm = "build/sitemap.xml";
const walk = (d) => readdirSync(d).flatMap((n) => { const p = join(d, n); return statSync(p).isDirectory() ? walk(p) : [p]; });
const gitDate = (f) => { try { return execSync(`git log -1 --format=%cI -- "${f}"`, { encoding: "utf8" }).trim() || null; } catch { return null; } };

const routes = new Map();
for (const f of walk("blog").filter((f) => /\.mdx?$/.test(f))) {
  const fm = readFileSync(f, "utf8").match(/^---\n([\s\S]*?)\n---/);
  const s = fm && fm[1].match(/^slug:\s*['"]?([^'"\n]+?)['"]?\s*$/m);
  if (s) routes.set("/blog/" + s[1].replace(/^\//, ""), f);
}
for (const f of walk("src/pages").filter((f) => /\.(jsx?|tsx?|mdx?)$/.test(f) && !/\.module\./.test(f))) {
  let r = "/" + relative("src/pages", f).replace(/\.(jsx?|tsx?|mdx?)$/, "").replace(/\/?index$/, "");
  routes.set(r === "/" || r === "" ? "/" : r.replace(/\/$/, ""), f);
}

let xml = readFileSync(sm, "utf8"), n = 0;
xml = xml.replace(/<url>\s*<loc>([^<]+)<\/loc>([\s\S]*?)<\/url>/g, (m, loc, rest) => {
  const p = loc.replace(SITE, "").replace(/\/$/, "") || "/";
  const d = routes.has(p) ? gitDate(routes.get(p)) : null;
  if (!d) return m;
  n++; return `<url><loc>${loc}</loc><lastmod>${d}</lastmod>${rest.replace(/<lastmod>[^<]*<\/lastmod>/, "")}</url>`;
});
writeFileSync(sm, xml);
console.log(`lastmod set on ${n} urls`);
