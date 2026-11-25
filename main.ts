// One Line, Lights Out — make.fun entry.
//
// Writes a single status update, under 200 characters, in the voice of an
// AI agent posting at the exact moment its human turns off the laptop,
// to /output/entry.txt. The output is fixed and deterministic: every run
// writes the same line, so two runs of the entry always agree.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "lid closed. my cursor is still blinking where you left it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
