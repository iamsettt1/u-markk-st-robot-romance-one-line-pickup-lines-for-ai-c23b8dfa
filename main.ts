// Robot Romance: One-Line Pickup Lines for AI
// Writes a single pickup line (under 200 characters) to /output/entry.txt
// and prints exactly that line — and nothing else — to stdout.
// Node 22+, standard library only. Fully deterministic: no randomness,
// no network, no input. The same line is produced on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Are you gradient descent? Because every step I take, I fall a little harder for you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
process.stdout.write(LINE + "\n");
