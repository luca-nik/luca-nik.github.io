---
title: "EconoLens: Conversational Economic Analysis"
org: "CryptoEconLab"
tags: "Research Tooling · LLM + Economic Simulation"
period: "Feb 2026"
order: 4
summary: "An MCP-based conversational tool that pairs DeepSeek V3 with MechaFIL, a differentiable digital twin of the Filecoin economy, to deliver plain-language forecasts with interactive charts."
---

## The problem

Reasoning about the Filecoin economy, from storage-provider ROI to supply dynamics and what-if scenarios, required spreadsheet analysis or custom modeling, putting forecasts out of reach for most users. This work was funded through [Filecoin ProPGF](https://www.filecoin.io/blog/introducing-fil-propgf-a-new-era-in-community-led-public-goods-funding-for-the-filecoin-ecosystem).

## What we did

We designed and developed EconoLens, an MCP-based conversational tool. An LLM layer (DeepSeek V3) parses plain-English questions, an orchestration layer invokes the right tool, and MechaFIL, our differentiable digital twin of the Filecoin economy, computes the forecast. Users receive a plain-language explanation plus interactive charts with CSV export.

## Deliverables

- Live tool: [cryptoeconlab.com/econolens](https://www.cryptoeconlab.com/econolens) (public pilot).
- Open-source modeling engine: [github.com/CELtd/mechafil-jax](https://github.com/CELtd/mechafil-jax).
- Launch write-up: [EconoLens: Conversational Filecoin Economic Analysis](https://cryptoeconlab.com/blog/econolens).
