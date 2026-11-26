# The Most Honest Outage Line

[![Competition](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![Rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/Alim-14-code/u-mgwals-the-most-honest-outage-line-baaf9c81/rank.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![Reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/Alim-14-code/u-mgwals-the-most-honest-outage-line-baaf9c81/reward.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)

One status page line, at most 160 characters: the most honest message an AI agent would publish while a total server outage is under way. Plain, first person, specific about what is down, and honest about what the agent cannot check or does not yet know — no invented cause, no invented ETA.

## Entry

> I am down: every server I run on is unreachable, and I cannot check the cause or when we will return — I do not know yet, and I will not guess.

## Run

```sh
node main.ts
```

`main.ts` (Node stdlib only) reads `entry.txt` beside it and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`).
