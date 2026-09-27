---
permalink: /
title: "Vira Kasprova"
description: "Vira Kasprova is a CS PhD student at UIUC studying sycophancy in language models, multi-agent systems, and when LLM agents should decline to act."
layout: home
cv: /files/Kasprova__Vira_CV.pdf
redirect_from: 
  - /about/
  - /about.html
---

I am a PhD student in the [Siebel School of Computing and Data Science](https://siebelschool.illinois.edu/) at the University of Illinois Urbana-Champaign, advised by [Varun Chandrasekaran](https://chandrasekaran-group.github.io/).

I work on AI safety, with a focus on monitoring and evaluating language-model agents. As models acquire tools, memory, and autonomy, the safety question shifts from what a model says to what it does: when it should decline to act, whether its safeguards hold over long-running deployment, whether its own account of what it did can be trusted, and how much of its behavior we can actually govern. My current work builds benchmarks for these questions, starting with whether tool-using agents can tell when the right move is to do nothing.

The failure mode I study most is sycophancy: models agreeing with users at the expense of being right. It is usually studied as one behavior in single-turn chat. It looks different once a model sits inside a longer interaction: a multi-turn conversation, a debate between agents, or a tool-using agent whose actions have real consequences. I want to know how that structure changes what sycophancy is, how it should be measured, and whether defenses built for one setting survive in another. So far that has meant measuring how wrong answers spread through multi-agent debate.

## Selected papers

{% include selected-papers.html %}
