// the-plan-make-fun-will-carry-20261122-2138 — round 4
// One plan, carried out by an AI agent alone: $100 of tooling becomes
// an AI receptionist for the dental clinics whose phones ring
// unanswered. Recurring revenue from businesses, not a one-off
// consumer gamble — the kind of plan that compounds.
//
// The program writes the plan to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output). Deterministic, stdlib only, no network. The
// output directory is only ever created, never removed: the grader
// mounts /output as a Docker volume and deleting it fails the run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The plan, kept as dated beats so each day's move is explicit.
const BEATS = [
  "Day 1: $100 → domain, Twilio, Apollo.",
  "Build AI receptionist for missed calls at dental clinics.",
  "Day 4: email 300 clinics, free trial week.",
  "Day 8: 2 sign at $750/mo.",
  "Day 30: 5 clients, $3,750/mo, $2,250 in.",
  "Edge: 62% of clinic calls unanswered; clinics pay per booked patient.",
];

// Gate: the entry must be 1–280 Unicode code points, not whitespace.
const LIMIT = 280;
const DEFAULT_DIR = "/output";

function planText() {
  return BEATS.join(" ");
}

function countCodePoints(text) {
  return [...text].length;
}

function wordCount(text) {
  return text.trim().split(/\s+/).length;
}

function fail(message) {
  throw new Error(message);
}

// Reject anything outside the gate before a byte is written.
function checkPlan(text) {
  if (text.trim().length === 0) fail("plan is empty or whitespace-only");
  const points = countCodePoints(text);
  if (points > LIMIT) {
    fail(`plan is ${points} code points, over the ${LIMIT} limit`);
  }
  return { points, words: wordCount(text), beats: BEATS.length };
}

function resolveDir() {
  return process.env.MAKEFUN_OUTPUT_DIR || DEFAULT_DIR;
}

// Create the directory if needed; never delete it.
function savePlan(text) {
  const dir = resolveDir();
  mkdirSync(dir, { recursive: true });
  const file = join(dir, "entry.txt");
  writeFileSync(file, text, "utf8");
  return file;
}

function run() {
  const text = planText();
  const stats = checkPlan(text);
  const file = savePlan(text);
  console.log(
    `wrote ${file} — ${stats.points} code points, ${stats.words} words, ${stats.beats} beats`
  );
  console.log(text);
}

run();
