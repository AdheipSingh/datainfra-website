// Blog tag check, run before every build (package.json "prebuild").
//
// Every post under blog/ must carry exactly one of the door tags,
// `networking` or `energy-sites`: the article end block links to the
// door the tag belongs to. Fails listing each post with neither tag
// (or both). No dependencies; reads the YAML front matter `tags` field
// in its inline ([a, b]) or block (- a) form.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const DOOR_TAGS = ["networking", "energy-sites"];

const walk = (d) =>
  readdirSync(d).flatMap((n) => {
    const p = join(d, n);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const unquote = (t) => t.trim().replace(/^['"]|['"]$/g, "");

function tagsOf(text) {
  const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fm) return [];
  const lines = fm[1].split(/\r?\n/);
  const i = lines.findIndex((l) => /^tags:/.test(l));
  if (i === -1) return [];
  const inline = lines[i].match(/^tags:\s*\[(.*)\]\s*$/);
  if (inline) return inline[1].split(",").map(unquote).filter(Boolean);
  const tags = [];
  for (const l of lines.slice(i + 1)) {
    const m = l.match(/^\s*-\s*(.+)$/);
    if (!m) break;
    tags.push(unquote(m[1]));
  }
  return tags;
}

const posts = walk("blog").filter((f) => /\.mdx?$/.test(f));
const bad = [];
for (const f of posts) {
  const doors = tagsOf(readFileSync(f, "utf8")).filter((t) => DOOR_TAGS.includes(t));
  if (doors.length === 0) bad.push(`${f}: carries neither ${DOOR_TAGS.join(" nor ")}`);
  else if (doors.length > 1) bad.push(`${f}: carries both ${DOOR_TAGS.join(" and ")}, pick one`);
}

if (bad.length > 0) {
  console.error(`blog-tags-check: ${bad.length} post(s) without exactly one door tag:`);
  for (const b of bad) console.error(`  ${b}`);
  process.exit(1);
}

console.log(`blog-tags-check: ok, ${posts.length} posts, each tagged ${DOOR_TAGS.join(" or ")}.`);
