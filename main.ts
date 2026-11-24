// Weirdest Job Title: Blind Judge Showdown — Frost entry.
// Writes one job title (60 characters at most) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TITLE = "Senior Apologizer for Self-Driving Cars";
// One title, one twist: a very human job — saying sorry — for cars that drive themselves.

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const text = TITLE.trim();
if (text.length < 1 || text.length > 60 || text !== TITLE) {
  throw new Error("title fails the 1-60 char gate");
}
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`wrote entry.txt (${text.length} chars): ${text}`);
