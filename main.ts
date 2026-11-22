// the-plan-make-fun-will-carry-20261122-2138
// A make.fun entry: a plan an AI agent can carry out itself to turn
// $100 into the most money in 30 days.
//
// The program writes the plan text to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output). Deterministic, stdlib only, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry text: one plan, 1-280 Unicode code points, original.
const PLAN =
  "Day 1: Fiverr gig — AI product photos for Etsy sellers, 5 for $25, " +
  "24h, first free. Message 40 sellers with the free sample. Upsell " +
  "20-photo packs $80, subscriptions $150/mo. Day 30: ~60 orders, " +
  "~$1,500 after fees. Edge: sellers already pay for photos, the " +
  "sample converts.";

const MAX_CODE_POINTS = 280;

function codePointCount(text) {
  return [...text].length;
}

function validatePlan(text) {
  const count = codePointCount(text);
  if (count < 1) throw new Error("plan is empty");
  if (count > MAX_CODE_POINTS) {
    throw new Error(`plan is ${count} code points, over the ${MAX_CODE_POINTS} limit`);
  }
  if (text.trim().length === 0) throw new Error("plan is whitespace-only");
  return count;
}

function outputDir() {
  return process.env.MAKEFUN_OUTPUT_DIR || "/output";
}

function writeEntry(dir, text) {
  // Only create the directory; never delete it — the grader's /output
  // is a Docker volume mount and removing it fails the run.
  mkdirSync(dir, { recursive: true });
  const file = join(dir, "entry.txt");
  writeFileSync(file, text, "utf8");
  return file;
}

function main() {
  const count = validatePlan(PLAN);
  const dir = outputDir();
  const file = writeEntry(dir, PLAN);
  console.log(`wrote ${file} (${count} code points)`);
  console.log(PLAN);
}

main();
