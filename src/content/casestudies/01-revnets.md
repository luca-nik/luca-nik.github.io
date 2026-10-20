---
title: "Cryptoeconomics of Revnets"
org: "CryptoEconLab"
tags: "Mechanism Design & Tokenomics"
period: "Dec 2025"
order: 1
summary: "Formal and computational analysis of Revnets, proving four cryptoeconomic guarantees and reducing all system dynamics to seven immutable launch-time parameters."
cover: "/images/case-studies/01-revnet.png"
---

## The client

[Revnet](https://revnet.app) is a protocol developed by the [Juicebox](https://juicebox.money) team for launching autonomous, tokenized revenue networks: deterministic rules set at deployment govern how tokens are issued, how value accrues, and how participants access liquidity, with no governance and no intermediaries.

## The problem

With every rule immutable at deployment, founders and investors needed to know precisely how these systems behave across parameter configurations before committing capital.

## What we did

We combined formal mathematical modeling with computational simulation across parameter configurations, and proved four guarantees: a cash-out price floor that rises mechanically with network activity, issuance schedules that act as tunable monetary policy, guaranteed redemption under all conditions, and loans that remain solvent even under complete default. We also showed that seven immutable parameters determine all system dynamics, making launch-time tuning the single most critical design decision.

## Deliverables

- Public analysis: [Revnets: A Cryptoeconomic Analysis](https://cryptoeconlab.com/blog/revnets-cryptoeconomic-analysis) (CryptoEconLab Insights).
- Companion paper I: [Cryptoeconomics of Revnets](https://cryptoeconlab.com/paper/revnet), the formal mathematical framework.
- Companion paper II: [Revnet Parameters Analysis](https://cryptoeconlab.com/paper/revnet?paper=https%253A%252F%252Fstorage.googleapis.com%252Fcel-public-resources%252FRevnet-Analysis.pdf), computational experiments and design guidance for founders and investors.
