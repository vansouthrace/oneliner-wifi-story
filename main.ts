import { mkdirSync, writeFileSync } from "node:fs";

// A passer-by sees only a network name, but this one implies a whole story:
// a man named Dave, a split, the kids gone, and the router taken with them.
// The network list becomes the only place the other side of the story is told.
const entry = "DaveTookTheKidsAndTheRouter";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
