// Client-name check, run before every build (package.json "prebuild").
//
// Fails the build when any name from the CLIENT_NAMES environment variable
// (comma-separated) appears in a text file under src/, blog/, static/ or
// lead-magnets/. Matching is case-insensitive. The names are set in the
// Vercel project settings and never enter the repository.
//
// Usage: CLIENT_NAMES="name one,name two" node scripts/client-check.mjs
// With CLIENT_NAMES unset or empty the check prints a warning and passes.
import { readdirSync, readFileSync, lstatSync, existsSync } from "node:fs";
import { join } from "node:path";

const ROOTS = ["src", "blog", "static", "lead-magnets"];

const names = (process.env.CLIENT_NAMES || "")
  .split(",")
  .map((n) => n.trim())
  .filter(Boolean);

if (names.length === 0) {
  console.warn("client-check: CLIENT_NAMES is not set, skipping the client-name check.");
  process.exit(0);
}

const needles = names.map((n) => n.toLowerCase());

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const st = lstatSync(p);
    if (st.isSymbolicLink()) continue;
    if (st.isDirectory()) out.push(...walk(p));
    else if (st.isFile()) out.push(p);
  }
  return out;
}

// A file is treated as text when its first 8 KB contain no NUL byte.
function readText(file) {
  const buf = readFileSync(file);
  if (buf.subarray(0, 8192).includes(0)) return null;
  return buf.toString("utf8");
}

const hits = [];
let scanned = 0;
for (const root of ROOTS) {
  if (!existsSync(root)) continue;
  for (const file of walk(root)) {
    const text = readText(file);
    if (text === null) continue;
    scanned++;
    const lines = text.split(/\r?\n/);
    lines.forEach((line, i) => {
      const lower = line.toLowerCase();
      needles.forEach((needle, k) => {
        if (lower.includes(needle)) hits.push(`${file}:${i + 1}: matches CLIENT_NAMES entry ${k + 1}`);
      });
    });
  }
}

if (hits.length > 0) {
  console.error(`client-check: ${hits.length} hit(s) for a client name in ${ROOTS.join(", ")}:`);
  for (const h of hits) console.error(`  ${h}`);
  process.exit(1);
}

console.log(`client-check: ok, ${scanned} text files scanned, no client names found.`);
