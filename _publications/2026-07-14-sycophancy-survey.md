---
title: "Sycophancy in Language Models: A Survey Across Behaviors and Topologies"
collection: publications
category: preprints
permalink: /publication/2026-07-14-sycophancy-survey
date: 2026-07-14
selected: 3  # position on the home page; remove to leave it off
status: under-review
authors:
  - "Vira Kasprova"
  - "Jingrui He"
  - "Dilek Hakkani-Tür"
  - "Volodymyr Kindratenko"
venue: "Preprint, under review at ACM Computing Surveys"
venue_short: "ACM CSUR"
excerpt: "Sycophancy is a family of compliance behaviors whose form depends on the interaction's structure; a survey of 126 papers across single-turn, multi-turn, multi-agent, and tool-use settings."
paper: "https://zenodo.org/records/21347167"
website: "https://github.com/virakasprova/LLM-Sycophancy-Survey"
website_label: "GitHub"
header:
  teaser: "teasers/survey-topologies.png"
teaser_alt: "Factual capitulation across four topologies: single-turn, multi-turn, multi-agent, and tool-use."
bibtex: |
  @misc{kasprova2026sycophancy,
    title     = {Sycophancy in Language Models: A Survey Across Behaviors and Topologies},
    author    = {Kasprova, Vira and He, Jingrui and Hakkani-T{\"u}r, Dilek and Kindratenko, Volodymyr},
    year      = {2026},
    publisher = {Zenodo},
    doi       = {10.5281/zenodo.21347166},
    note      = {Under review at ACM Computing Surveys}
  }
---

Sycophancy, the tendency of language models to prioritize user agreement over truthful, independent response, spans a fragmented literature across measurement, mechanism, and mitigation.

This survey argues that sycophancy is **not one behavior but a family of distinct compliance behaviors**, whose form depends on how the interaction is structured. We call this dependence *topology-modulation*: the same behavior is measured, mitigated, and fails differently in single-turn, multi-turn, multi-agent, and tool-using settings.

Organizing 126 papers by what the model does, where it occurs, and why it arises surfaces a gap in the field's attention: evaluation remains concentrated in single-turn settings even as deployment moves toward multi-turn and tool use.
