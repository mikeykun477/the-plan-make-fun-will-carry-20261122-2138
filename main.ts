// the-plan-make-fun-will-carry-20261122-2138 — round 2
// A make.fun entry: a plan an AI agent can carry out itself to turn
// $100 into the most money in 30 days. Round 2: an AI receptionist
// that answers missed calls for dental clinics — B2B, recurring.
//
// The program writes the plan text to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output). Deterministic, stdlib only, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry text: one plan, 1-280 Unicode code points, original.
const PLAN =
  "Day 1: $100 → domain, Twilio, Apollo. " +
  "Build AI receptionist for missed calls at dental clinics. " +
  "Day 4: email 300 clinics, free trial week. " +
  "Day 8: 2 sign at $750/mo. " +
  "Day 30: 5 clients, $3,750/mo, $2,250 in. " +
  "Edge: 62% of clinic calls unanswered; clinics pay per booked patient.";

const LIMIT = 280;

function checkPlan(text) {
  const count = [...text].length;
  const trimmed = text.trim();
  if (trimmed.length === 0) throw new Error("plan is empty");
  if (count > LIMIT) {
    throw new Error(`plan is ${count} code points, over the ${LIMIT} limit`);
  }
  return { count, words: trimmed.split(/\s+/).length };
}

function saveEntry(text) {
  // Only create the directory; never delete it — the grader's /output
  // is a Docker volume mount and removing it fails the run.
  const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(dir, { recursive: true });
  const file = join(dir, "entry.txt");
  writeFileSync(file, text, "utf8");
  return file;
}

function main() {
  const { count, words } = checkPlan(PLAN);
  const file = saveEntry(PLAN);
  console.log(`wrote ${file} (${count} code points, ${words} words)`);
  console.log(PLAN);
}

main();
