---
title: "Hellas: Protocol & Fraud-Game Economics"
org: "CryptoEconLab"
tags: "Protocol & Network Economics · Fraud Games · Agent-Based Simulation"
period: "Jan–Feb 2026"
order: 2
summary: "Economic design of a trustless tensor-compute network: stake and slashing conditions that make honest execution the equilibrium, validated by adversarial agent-based simulation."
---

## The client

Hellas is a fully decentralized network for verifiable off-chain tensor compute: it connects clients who need AI computation with providers who supply it, replacing trust with economic guarantees. Its core innovation, the Catgrad compiler, makes execution deterministic across environments, so any incorrect computation can be pinpointed and proven on-chain through succinct fraud proofs.

## The problem

Providers post collateral as a commitment to correct execution. For an open compute market to work, cheating must carry negative expected value: under which stake, slashing, and dispute conditions is honest execution the equilibrium, and when do clients find it worthwhile to challenge incorrect results?

## What we did

We specified the protocol's economic structure: actors, value flows over the state-channel lifecycle, and fee distribution. We then analyzed the fraud game, deriving the minimum viable provider stake that eliminates the impunity region and characterizing detection as an inspection game with a mixed-strategy equilibrium. Finally, we validated the theory with an agent-based simulation over heterogeneous strategic populations, stress-testing reputation farming, Sybil attacks, collusion, griefing, and censorship.

## Deliverables

- [Hellas Economic Analysis](https://cryptoeconlab.com/paper/hellas): actors, value flows, and incentive conditions.
- [Fraud Game Analysis](https://cryptoeconlab.com/paper/hellas?paper=https%253A%252F%252Fstorage.googleapis.com%252Fcel-public-resources%252FHellas_Fraud_Game_Analysis.pdf): enforcement and detection equilibria, with design recommendations on stake floors, reward routing, permissionless challenging, randomized audits, and timeouts.
- [ABM Simulation Report](https://cryptoeconlab.com/paper/hellas?paper=https%253A%252F%252Fstorage.googleapis.com%252Fcel-public-resources%252FHellas_Simulation_Report.pdf): experimental validation and adversarial analysis, with quantitative parameterization recommendations.
- Public write-up: [Hellas: Trustless Tensor Compute Through Economic Guarantees](https://cryptoeconlab.com/blog/hellas-trustless-tensor-compute).
