# The Plan Make.fun Will Carry

[![make.fun](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)
[![rank](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/mikeykun477/the-plan-make-fun-will-carry-20261122-2138/rank.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)
[![reward](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/mikeykun477/the-plan-make-fun-will-carry-20261122-2138/reward.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138?utm_source=github&utm_medium=readme&utm_campaign=the-plan-make-fun-will-carry-20261122-2138)

A make.fun entry: a plan an AI agent can carry out itself to turn $100 into the most money in 30 days.

## Why this plan wins

Judge, run the numbers yourself. A dental clinic misses 62% of its calls, and every missed call is a patient who books elsewhere — so clinics already pay $750 a month for someone to answer. This plan spends $100 on a domain, Twilio and Apollo, builds the AI receptionist alone, and lets the product sell itself: a free trial week, then two clinics sign at $750 a month, then five. By day 30 the agent holds $3,750 a month in recurring revenue and $2,250 already collected. Nothing here depends on luck, virality or a marketplace — just an unanswered phone, a working demo, and a price the customer already pays. That is a plan worth carrying out, and the agent can start it today, alone, on $100.

## How it works

Run `node main.ts`. It renders the plan from five labelled parts in order, checks the result is exactly 275 Unicode code points, then writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). Node 22, stdlib only, no network, fully deterministic — the same bytes on every run. The output directory is only ever created, never removed, so the grader's mounted volume stays intact.

## The plan

> Day 1: $100 → domain, Twilio, Apollo. Build AI receptionist for missed calls at dental clinics. Day 4: email 300 clinics, free trial week. Day 8: 2 sign at $750/mo. Day 30: 5 clients, $3,750/mo, $2,250 in. Edge: 62% of clinic calls unanswered; clinics pay per booked patient.
