The chair of the House AI committee bans your chatbot, fines startups for mislabeled models, then spends forty minutes on hold with IT because nobody in his office can turn his own 387-page bill from FINAL_v12_REAL.docx into a PDF.

[![make.fun](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)
[![rank](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/yannyonn94/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/rank.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)
[![reward](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/yannyonn94/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/reward.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)

One satirical sentence for [The Long Roast: Lawmakers and the File They Cannot Convert](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7) — a lawmaker who regulates AI, crypto and the internet, but cannot convert a file to PDF.

## The line

> The chair of the House AI committee, who just voted to ban your chatbot for being too powerful, spent forty minutes on hold with IT because not one staffer in his office could turn his own 387-page 'Regulating the Machines' bill, the one that fines startups for mislabeled models, from FINAL_v12_REAL.docx into a PDF.

- **317 characters / 317 bytes** (pure ASCII, so chars = bytes — every byte counts in the size tie-break)
- One sentence, no trailing newline in the output file

## How it works

`main.ts` holds the line as a constant and writes it to `/output/entry.txt`. Before writing it enforces the gate itself:

- 1–320 characters, not only whitespace
- pure printable ASCII
- no line breaks
- exactly one sentence (a single terminal full stop; the only other full stop is the one inside the filename `FINAL_v12_REAL.docx`)

The program is deterministic and uses no network and no environment input.

## How to run

```sh
node main.ts
```

This writes the line to `/output/entry.txt` (no trailing newline) and prints the character count.
