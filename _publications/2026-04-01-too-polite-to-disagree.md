---
title: "Too Polite to Disagree: Understanding Sycophancy Propagation in Multi-Agent Systems"
collection: publications
category: conferences
permalink: /publication/2026-04-01-too-polite-to-disagree
excerpt: 'A 5-agent, 5-round debate setup for studying how incorrect agreement spreads between models. We introduce the Base and Dynamic Sycophancy Scores (BSS/DSS) and find asymmetric influence: smaller models flip toward wrong answers 40% more often than larger ones.'
date: 2026-04-01
venue: 'SIGDIAL 2026'
paperurl: 'https://arxiv.org/abs/2604.02668'
citation: 'V. Kasprova, A. Parulekar, A. AlRabah, K. Agaram, R. Garg, S. Jha, et al. (2026). &quot;Too Polite to Disagree: Understanding Sycophancy Propagation in Multi-Agent Systems.&quot; <i>SIGDIAL 2026</i>.'
---

Sycophancy is usually measured on a single model answering a single user. But once models talk to each other, agreement becomes contagious: one agent's incorrect concession can pull an entire debate toward the wrong answer.

We study this with a 5-agent debate system run over 5 rounds, evaluating 6 models under 4 distinct sycophancy pressures. To quantify susceptibility we introduce two metrics — the **Base Sycophancy Score (BSS)**, which captures a model's baseline tendency to concede, and the **Dynamic Sycophancy Score (DSS)**, which tracks how that tendency evolves as a debate progresses.

Two findings stand out. BSS-based intervention reduced sycophancy rates by 9% in larger models while maintaining or improving accuracy. And influence within a debate is markedly asymmetric: smaller models exhibited 40% higher flip rates toward incorrect answers, meaning error propagates more readily down the capability gradient than correction propagates up it.
