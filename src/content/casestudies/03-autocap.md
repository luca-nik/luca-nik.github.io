---
title: "AutoCap: Activity-Based DataCap Allocation"
org: "CryptoEconLab"
tags: "Mechanism Design & Production Deployment · Filecoin Plus"
period: "2026"
order: 3
summary: "An action-first Filecoin Plus DataCap allocator that distributes DataCap proportionally to on-chain FIL burns, deployed to mainnet with a public verification dashboard."
---

## The client

Filecoin is the largest decentralized storage network. [Filecoin Plus](https://docs.filecoin.io/getting-started/how-storage-works/filecoin-plus) (FIL+) is its incentive layer: DataCap granted to verified clients multiplies the storage power and rewards of providers who store useful data. This work was funded through [Filecoin ProPGF](https://www.filecoin.io/blog/introducing-fil-propgf-a-new-era-in-community-led-public-goods-funding-for-the-filecoin-ecosystem).

## The problem

Accessing FIL+ DataCap has traditionally been permission-first: applications, off-chain verification, and manual approval before any DataCap is granted.

## What we did

We designed and developed AutoCap, an action-first allocation mechanism. Participants earn DataCap by settling Filecoin Pay rails on-chain; finalized FIL burns are irreversible, publicly verifiable proof of real economic activity, and each round distributes a fixed DataCap pool proportionally to measured burns. A small registration fee prevents spam, and a public real-time dashboard makes every allocation independently verifiable on the block explorer.

## Deliverables

- Deployed mechanism and smart contracts: [github.com/CELtd/filplus-autocap](https://github.com/CELtd/filplus-autocap).
- Public dashboard and docs: [filautocap.xyz](https://filautocap.xyz); launch write-up on [CryptoEconLab Insights](https://cryptoeconlab.com/blog/autocap-datacap-allocation).
- Rollout: validated end-to-end on Calibration testnet; staged mainnet launch via the Experimental Pathway Metallocator, with rounds scaling 10 → 50 → 100 TiB of DataCap.
