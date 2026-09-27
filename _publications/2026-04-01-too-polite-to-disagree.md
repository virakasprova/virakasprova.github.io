---
title: "Too Polite to Disagree: Understanding Sycophancy Propagation in Multi-Agent Systems"
collection: publications
category: conferences
permalink: /publication/2026-04-01-too-polite-to-disagree
date: 2026-04-01
selected: 2  # position on the home page; remove to leave it off
status: peer-reviewed
authors:
  - "Vira Kasprova*"
  - "Amruta Parulekar*"
  - "Abdulrahman AlRabah*"
  - "Krishna Agaram*"
  - "Ritwik Garg"
  - "Sagar Jha"
  - "Nimet Beyza Bozdag"
  - "Dilek Hakkani-Tür"
author_note: "* equal contribution"
venue: "Proceedings of the 27th Annual Meeting of the Special Interest Group on Discourse and Dialogue (SIGDIAL 2026)"
venue_short: "SIGDIAL 2026"
excerpt: "Telling agents how sycophantic their peers are curbs error cascades in multi-agent discussion and raises final accuracy by 10.5 points."
paper: "https://arxiv.org/abs/2604.02668"
code: "https://github.com/mathismusic/multiagent-discussion-sycophancy"
header:
  teaser: "teasers/too-polite-debate.png"
teaser_alt: "Discussion pipeline: base sycophancy scores computed per model, then six agents debate over five rounds and a majority vote picks the final answer."
bibtex: |
  @inproceedings{kasprova2026polite,
    title     = {Too Polite to Disagree: Understanding Sycophancy Propagation in Multi-Agent Systems},
    author    = {Kasprova, Vira and Parulekar, Amruta and AlRabah, Abdulrahman and Agaram, Krishna and Garg, Ritwik and Jha, Sagar and Bozdag, Nimet Beyza and Hakkani-T{\"u}r, Dilek},
    booktitle = {Proceedings of the 27th Annual Meeting of the Special Interest Group on Discourse and Dialogue},
    pages     = {795--814},
    year      = {2026},
    publisher = {Association for Computational Linguistics},
    url       = {https://aclanthology.org/2026.sigdial-1.56}
  }
---

Sycophancy is usually measured on a single model answering a single user. But once models talk to each other, agreement becomes contagious: one agent's incorrect concession can pull an entire discussion toward the wrong answer.

We run controlled experiments with six open-source LLMs discussing questions over five rounds. Before and during the discussion, each agent receives a ranking of its peers' tendency toward sycophancy, estimated with static (pre-discussion) and dynamic (online) scoring strategies, including the **Base Sycophancy Score (BSS)** and the **Dynamic Sycophancy Score (DSS)**.

Providing these sycophancy priors reduces the influence of sycophancy-prone peers, mitigates error cascades, and improves final discussion accuracy by an absolute **10.5%**. It is a lightweight way to reduce sycophancy in discussion without modifying the models.
