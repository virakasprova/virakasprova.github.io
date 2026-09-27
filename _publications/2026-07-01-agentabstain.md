---
title: "AgentAbstain: Do LLM Agents Know When Not to Act?"
collection: publications
category: conferences
permalink: /publication/2026-07-01-agentabstain
date: 2026-07-01
selected: 1  # position on the home page; remove to leave it off
status: peer-reviewed
authors:
  - "Xun Liu†"
  - "Yi Evie Zhang†"
  - "Vira Kasprova*"
  - "Parisa Rabbani*"
  - "Pardis Sadat Zahraei*"
  - "Tianyu Zhang*"
  - "Ali Ebrahimpour-Boroojeny"
  - "Varun Chandrasekaran"
author_note: "† project lead; * equal contribution"
venue: "Advances in Neural Information Processing Systems"
venue_short: "NeurIPS 2026"
award: "Oral"
award_detail: "Oral (0.40%)"
excerpt: "A paired-task benchmark of 263 should-act / should-abstain tasks in 42 sandboxed tool environments; the best of 17 frontier LLMs gets only 59.5% paired accuracy."
paper: "https://arxiv.org/abs/2607.10059"
code: "https://github.com/AntiQuality/agentabstain"
website: "https://agentabstain.github.io/"
header:
  teaser: "teasers/agentabstain-paired-task.png"
teaser_alt: "One should-abstain task with conflicting evidence, and four agent behaviors on it: successful, implicit, no, and post-hoc abstention."
bibtex: |
  @inproceedings{liu2026agentabstain,
    title     = {{AgentAbstain}: Do {LLM} Agents Know When Not to Act?},
    author    = {Liu, Xun and Zhang, Yi Evie and Kasprova, Vira and Rabbani, Parisa and Zahraei, Pardis Sadat and Zhang, Tianyu and Ebrahimpour-Boroojeny, Ali and Chandrasekaran, Varun},
    booktitle = {Advances in Neural Information Processing Systems},
    year      = {2026},
    eprint    = {2607.10059},
    archivePrefix = {arXiv}
  }
---

When an agent has real tools and its actions have real side effects, refusing to act is sometimes the correct behavior. A benchmark that only rewards task completion will never notice an agent that cannot tell the difference.

AgentAbstain is a paired-task benchmark built on a taxonomy of **8 abstention scenarios** spanning pre-execution reasoning and runtime discovery. It contains **263 paired tasks across 42 executable sandbox environments**. Each pair consists of a should-act task and a should-abstain variant produced by a controlled change to the instruction, the tools, or the environment state, so a model cannot score well by being uniformly cautious or uniformly eager.

To keep the benchmark fresh as models evolve, AbstainGen synthesizes sandbox environments and paired tasks end to end, validated by deterministic replay and LLM judges. Across 17 frontier LLMs in 4 agent harnesses, the best agent reaches only **59.5% paired accuracy**, and abstention capability is largely independent of general task-solving ability.
