---
title: "MEV Agent: Optimal Forward Routing"
org: "Urani.trade"
tags: "MEV Research · Convex Optimization · Optimal Routing"
period: ""
order: 6
summary: "A research codebase that models the market as a token-venue graph and solves forward routing as a convex optimization, provably finding the surplus-maximizing execution."
---

## The problem

Given a user's order intent (buy token B, sell token A, at no worse than a limit rate), how should a solver distribute execution across a market of many liquidity venues to maximize the user's surplus?

## What we did

The agent models the market as a graph: tokens are vertices, venues with their liquidity pools are edges. From the intent it constructs a strategy, the directed subgraph of paths connecting the sold token to the bought one, and optimizes the flow through each path. Because the forward-routing problem is convex, sequential least-squares programming (scipy's SLSQP) provably finds the optimum, with no need for a global optimizer. Partial fills and strict fly-or-kill orders are both supported.

## Deliverables

- Research codebase: [github.com/luca-nik/mev_agent](https://github.com/luca-nik/mev_agent).
- Reference abstractions: Order, Venue, Market, and Agent components mapping one-to-one onto protocol concepts, a readable reference implementation for solver design.
