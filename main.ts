// Make the Judge Smile — one line about a small good thing that happened today.
// Writes exactly one line (1–200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My neighbour's cat, who has ignored me for two years, walked in at breakfast, sat on my foot, and stayed for the whole pot of tea.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
