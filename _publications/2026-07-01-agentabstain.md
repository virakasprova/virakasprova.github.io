---
title: "AgentAbstain: Do LLM Agents Know When Not to Act?"
collection: publications
category: preprints
permalink: /publication/2026-07-01-agentabstain
excerpt: 'A benchmark of 160 paired should-act / should-abstain tasks across 8 scenarios, testing whether tool-using agents can recognize when the correct move is to do nothing.'
date: 2026-07-01
venue: 'arXiv preprint arXiv:2607.10059'
paperurl: 'https://arxiv.org/abs/2607.10059'
citation: 'X. Liu, Y. E. Zhang, V. Kasprova, P. Rabbani, P. S. Zahraei, T. Zhang, et al. (2026). &quot;AgentAbstain: Do LLM Agents Know When Not to Act?&quot; <i>arXiv preprint arXiv:2607.10059</i>.'
---

When an agent has real tools and its actions have real side effects, refusing to act is sometimes the correct behavior — and a benchmark that only rewards task completion will never notice an agent that cannot tell the difference.

AgentAbstain is a benchmark of **160 paired tasks across 8 scenarios**. Each pair holds the surface task fixed and varies only whether acting is appropriate, so a model cannot score well by being uniformly cautious or uniformly eager. Evaluation uses critical action sets, Conditioned Abstention Rate, and pass@k, alongside an agentic data generation pipeline for constructing new scenario pairs.
