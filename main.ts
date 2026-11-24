// The Long Roast: Lawmakers and the File They Cannot Convert
// Writes one satirical sentence to /output/entry.txt.
// Deterministic, no network, no environment input: the line is a constant.

import { mkdirSync, writeFileSync } from "node:fs";

// The winning line (concept test: 25/25, standout gate PASS).
// Setup: the chair of the House AI committee, banning chatbots and fining
// startups. Turn: forty minutes on hold with IT over his own bill.
// Punch lands on the last words: "... into a PDF."
const LINE =
  "The chair of the House AI committee, who just voted to ban your chatbot for being too powerful, spent forty minutes on hold with IT because not one staffer in his office could turn his own 387-page 'Regulating the Machines' bill, the one that fines startups for mislabeled models, from FINAL_v12_REAL.docx into a PDF.";

const OUTPUT_PATH = "/output/entry.txt";

// Gate, mirroring the sealed scorer plus the brief's one-sentence rule:
// UTF-8 text of 1-320 characters, not only whitespace, a single sentence.
function assertGate(line: string): void {
  if (line.length < 1 || line.length > 320) {
    throw new Error(`line must be 1-320 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  // Pure printable ASCII, so characters and bytes agree exactly.
  // That also helps the size tie-break (fewer bytes wins an exact tie).
  if (!/^[\x20-\x7E]*$/.test(line)) {
    throw new Error("line must be pure printable ASCII");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("line must contain no line breaks");
  }
  if (!line.endsWith(".")) {
    throw new Error("line must end with a single terminal full stop");
  }
  // Exactly one sentence: no sentence boundary inside the line.
  // ". " would split it into two sentences, and "?" / "!" would add a
  // second terminal mark. The only other full stop allowed is the one
  // inside the filename FINAL_v12_REAL.docx, which is not a boundary.
  if (line.includes(". ") || line.includes("?") || line.includes("!")) {
    throw new Error("line must be exactly one sentence");
  }
  const stops = line.match(/\./g) ?? [];
  if (stops.length !== 2) {
    throw new Error(`line must hold exactly one sentence, found ${stops.length} full stops`);
  }
}

assertGate(LINE);
mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${OUTPUT_PATH}`);
