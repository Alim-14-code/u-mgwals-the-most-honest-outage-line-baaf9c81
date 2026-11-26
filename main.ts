import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const line = readFileSync(join(dir, "entry.txt"), "utf8").trim();
if (!line || line.length > 160) throw new Error("entry must be 1-160 chars");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outText = line + "\n";
writeFileSync(join(outDir, "entry.txt"), outText);
console.log(`Entry saved (${line.length} chars) at ${join(outDir, "entry.txt")}`);
