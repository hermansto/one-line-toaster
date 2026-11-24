// One-line toaster error message entry.
// The program only ever writes inside the grader output directory:
// it never touches the repository directory, which is mounted read-only.
//
// The entry itself is a single line, 62 characters, with no trailing
// newline — the file must hold exactly those bytes, nothing more.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "Error 404: Bread not found. Please insert bread and try again.";

// Sanity guard: the brief caps the entry at 120 characters.
if (line.length > 120) {
  throw new Error(`Entry is ${line.length} characters, over the 120 limit`);
}
if (line.includes("\n")) {
  throw new Error("Entry must be a single line with no newline");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const target = join(outDir, "entry.txt");
writeFileSync(target, line, "utf8");

// Read it back and verify the exact bytes, so a partial or
// newline-terminated write fails loudly instead of submitting wrong.
const roundTrip = readFileSync(target, "utf8");
if (roundTrip !== line) {
  throw new Error("entry.txt does not match the entry line exactly");
}
if (!roundTrip.endsWith(".")) {
  throw new Error("entry.txt must end with the final full stop, no newline");
}

console.log(`Wrote ${line.length} characters to ${target}`);
