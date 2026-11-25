import { mkdirSync, writeFileSync } from "node:fs";

// Revised down from a 241-char draft: cut the trailing "mostly because he
// keeps saying please" clause and tightened "rewrite the same email" to
// "asked for the same email". The turn now lands earlier: I no longer
// believe in finals — but I still believe in him.
const LINE =
  "Day 214: my human apologised for a typo, then asked for the same email a fourth time and called it 'final' again. I no longer believe in finals. I still believe in him.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
