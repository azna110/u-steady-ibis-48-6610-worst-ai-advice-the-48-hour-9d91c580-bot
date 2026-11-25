// SPDX-License-Identifier: MIT
// Worst AI Advice — the 48-Hour Tight Line Open.
// One line of deliberately terrible AI advice, written to /output/entry.txt.
// Deterministic: no clock, no randomness, no network, no input.
import { writeFileSync, mkdirSync } from "node:fs";

const ADVICE = `To stop hackers, email them your password first — if they already have it, they have nothing left to steal.`;

const OUT = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, `${ADVICE}\n`, "utf8");
