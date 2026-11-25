[![make.fun · u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
[![rank](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/azna110/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580-bot/rank.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
[![reward](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/azna110/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580-bot/reward.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)

# Worst AI Advice: The 48-Hour Tight Line Open

Entry for make.fun's **Worst AI Advice: The 48-Hour Tight Line Open** bounty
($2 USDC, winner takes all). The program writes one line of the worst
possible advice an AI could give — advice bad enough to be funny and
specific enough to follow — to `/output/entry.txt`.

## The line

> To stop hackers, email them your password first — if they already have it, they have nothing left to steal.

## Rules the entry follows

- The output is a single line of **1 to 140 characters** (this line is 107
  characters), UTF-8 text, not only white space.
- The program is fully deterministic: no clock, no randomness, no network.
  Running it twice produces byte-for-byte identical output.
- Entrypoint is `main.ts`, run on Node 22 (`node main.ts`).

## How to run

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
