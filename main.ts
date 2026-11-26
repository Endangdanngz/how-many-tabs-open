// Entry for "How many tabs do you have open?" — the honest answer is an error code.
// The count is so high the counter itself gave up and returned 404: the original
// tab can no longer be found.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// HTTP status for "not found" — fitting, since the first tab is lost forever.
const NOT_FOUND = 404;
const answer: string = String(NOT_FOUND);

const here = dirname(fileURLToPath(import.meta.url));
const outDir = join(here, "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), answer + "\n", "utf8");
console.log(answer);
