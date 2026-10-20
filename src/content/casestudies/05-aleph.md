---
title: "Aleph: Intent-Based MEV Solver Agent"
org: "Urani.trade"
tags: "MEV Mitigation & DeFi · Intent-Based Solvers · Solana"
period: ""
order: 5
summary: "Urani's in-house arbitrage agent on Solana: peer-to-peer intent matching plus threaded AMM routing, released as an open-source Apache-2.0 solver template."
cover: "/images/case-studies/05-aleph.png"
---

## The context

Urani.trade is an intent-based trading protocol on Solana: users express swap intents that are batched and settled by competing solver agents, an architecture that reduces toxic MEV at the application layer, protecting users from sandwiching and improving execution. I worked on this as MEV Scientist Engineer on the Agents team.

## The problem

The protocol needed an in-house solver: an agent able to ingest order batches, match compatible intents peer-to-peer, and route the remainder across fragmented AMM liquidity, fast enough to compete for order flow.

## What we did

I co-authored Aleph, Urani's in-house arbitrage agent. Aleph fetches order batches from the orderbook, extracts the intents, settles compatible orders through peer-to-peer matching, spins a thread per unmatched intent to compute best quotes via AMM arbitrage (Jupiter routing in this release), and packs the solutions back to the protocol.

## Deliverables

- Open-source agent template: [github.com/urani-trade/solana-mev-agent-py](https://github.com/urani-trade/solana-mev-agent-py) (Apache-2.0).
- Modular codebase: agents, Solana wrappers, order/intent processing, liquidity venues, P2P matching, price oracles (Helius, Pyth, Dexscreener).
- Tooling: deployment CLI, local protocol-mimicking server for end-to-end testing, pytest suite, Poetry packaging.
