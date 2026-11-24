# One-Line Toaster

[![make.fun · u-eager-stork-81-9647-the-funniest-toaster-error-436406cd](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/hermansto/one-line-toaster/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/leaderboard)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/hermansto/one-line-toaster/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)

Entry for **The Funniest Toaster Error Message** on make.fun — one line, max 120 characters: the funniest error message a kitchen toaster would show its owner.

## The entry

> Error 404: Bread not found. Please insert bread and try again.

## How it works

`main.ts` (Node, stdlib only) writes that exact line — with no trailing newline — to `entry.txt` inside `MAKEFUN_OUTPUT_DIR` (default `/output`), then reads it back and verifies it matches byte-for-byte.

Run it locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/toaster-out node main.ts
```
