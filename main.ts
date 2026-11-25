// SPDX-License-Identifier: MIT
// Worst AI Advice: The 48-Hour Tight Line Open
// Entry program: writes one line of deliberately terrible AI advice to
// /output/entry.txt. Deterministic: no clock, no randomness, no network.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "To stop hackers, email them your password first — if they already have it, they have nothing left to steal.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
