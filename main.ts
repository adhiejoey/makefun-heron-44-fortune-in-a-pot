// Fortune in a Pot — one kind, funny fortune for the houseplant on the windowsill.
// Writes a single line (<= 120 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22 stdlib only, no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const fortune =
  "Your newest leaf unfurls this week — the windowsill gossip was right: you were never behind, just dramatic.";

if ([...fortune].length > 120) {
  throw new Error(`fortune is ${[...fortune].length} characters, over the 120 limit`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), fortune, "utf8");
