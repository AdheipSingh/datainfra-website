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

// Whitespace-insensitive: a multi-word name still matches when the file
// wraps it across lines or joins it with a non-breaking space.
const collapse = (s) => s.toLowerCase().replace(/\s+/g, " ");
const needles = names.map(collapse);

// Lowercase the text and collapse every whitespace run to one space,
// keeping the line number each collapsed character came from.
function normalize(text) {
  let out = "";
  const lineOf = [];
  let line = 1;
  let inSpace = false;
  for (const ch of text.toLowerCase()) {
    if (/\s/.test(ch)) {
      if (!inSpace) { out += " "; lineOf.push(line); inSpace = true; }
      if (ch === "\n") line++;
    } else {
      out += ch;
      for (let k = 0; k < ch.length; k++) lineOf.push(line);
      inSpace = false;
    }
  }
  return { out, lineOf };
}

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
    const { out, lineOf } = normalize(text);
    needles.forEach((needle, k) => {
      const seen = new Set();
      for (let at = out.indexOf(needle); at !== -1; at = out.indexOf(needle, at + 1)) {
        const line = lineOf[at];
        if (seen.has(line)) continue;
        seen.add(line);
        hits.push(`${file}:${line}: matches CLIENT_NAMES entry ${k + 1}`);
      }
    });
  }
}

if (hits.length > 0) {
  console.error(`client-check: ${hits.length} hit(s) for a client name in ${ROOTS.join(", ")}:`);
  for (const h of hits) console.error(`  ${h}`);
  process.exit(1);
}

console.log(`client-check: ok, ${scanned} text files scanned, no client names found.`);
