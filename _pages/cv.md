---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Research interests
======
AI safety and trustworthy LLMs (sycophancy, agreement bias, alignment), multi-agent systems, tool-calling agents, evaluation and mitigation methods, and constrained LLM generation for structured domains.

Education
======
* **Ph.D. in Computer Science**, University of Illinois at Urbana-Champaign, 2025–2030 (expected)
* **B.S. in Computer Science**, University of Illinois at Urbana-Champaign, 2025
* **B.S. in Data Science**, University of Illinois at Chicago, 2021–2023 (transferred to UIUC)

Research projects
======
* **AgentAbstainBench: Evaluating Abstention in Tool-Using LLM Agents** (Feb 2026 – present)
  * Building a benchmark of 160 paired should-act / should-abstain tasks across 8 scenarios, evaluating when agents should refuse to act in tool-use settings with real side effects
  * Developed an agentic data generation pipeline and evaluation framework using critical action sets, Conditioned Abstention Rate, and pass@k

* **MultiSessionBench: Single-Session Safeguards in Memory-Mediated Agents** (Feb 2026 – present)
  * Designing a benchmark to test whether single-session safety defenses transfer to multi-session agent settings with persistent memory
  * Constructing paired social engineering scenarios; evaluating 9 models on Delayed-ASR, verification call rate, and contradiction detection

* **Too Polite to Disagree: Sycophancy Propagation in Multi-Agent Systems** (Aug 2025 – present)
  * Designed a 5-agent, 5-round debate system to study error contagion, evaluating 6 models across 4 sycophancy pressures
  * Developed Base Sycophancy Score (BSS) and Dynamic Sycophancy Score (DSS) to quantify and track susceptibility to incorrect agreement over the course of a debate
  * BSS-based intervention reduced sycophancy rates by 9% in larger models while maintaining or improving accuracy; smaller models showed 40% higher flip rates toward incorrect answers

* **Theranostic Robotics**, Cozad Competition (Jan 2026 – present)
  * Conducted discovery interviews with surgeons to identify unmet clinical needs and inform product requirements
  * Developing multimodal intraoperative imaging modules for surgical robots to reduce reoperation rates

Experience
======
* **Full-stack Developer**, National Center for Supercomputing Applications, Urbana, IL (Sep 2024 – May 2025)
  * Built interactive React/TypeScript dashboards letting chatbot administrators analyze user behavior across 8 key metrics
  * Decreased server response time via frontend and backend pagination with Flask and React
  * Reduced query execution time with a denormalized aggregate table, kept consistent by update triggers

* **Data Science Research Assistant**, National Center for Supercomputing Applications, Urbana, IL (May 2024 – Sep 2024)
  * Categorized unique clusters via k-means and hierarchical clustering, refined by manual review
  * Built interactive charts and heatmaps in Python to analyze cluster distributions and user interaction patterns
  * Presented *Enhancing Response Accuracy of an LLM-Based Teaching Assistant Tool* at the 2024 Summer STEM Career Exploration & Symposium, UIUC

* **Data Science Research Assistant**, The University of Chicago, Chicago, IL (Jun 2023 – Jul 2023)
  * Revealed a 20% disparity in regional eye-care availability using GeoPandas and Geographically Weighted Regression (GWR/MGWR)
  * Delivered an interactive dashboard of regression results to a nonprofit for targeted community intervention
  * Presented *Prevent Blindness: Revealing Inequities in Eyecare Provider Access* at the University of Chicago

* **Machine Learning Intern**, Illinois Department of Transportation, Chicago, IL (May 2023)
  * Achieved 92% accuracy in real-time detection and blurring of residential buildings using YOLOv8
  * Extended model training and dataset to cover weather phenomena and emergency vehicles
  * Presented *Real-Time Object Detection for Enhanced Transportation Safety* to IDOT leadership

Teaching
======
* **Math Grader**, University of Illinois at Chicago (Feb 2023 – May 2023)
  * Graded exams and weekly assignments for a Calculus II class of 600+ students

* **Math Learning Assistant**, University of Illinois at Chicago (Feb 2022 – May 2023)
  * Led 3 discussion sections twice weekly, each with 25+ students
  * Held exam reviews and 50+ office hours, assisting 200+ students in Business Calculus

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Selected earlier projects
======
* **Sampa Transit** — Python, GCP, Flask (2023–2024). Route recommendation and user feedback mechanisms for a São Paulo public transit app; reduced server response time 40% via GCP integration.
* **Optimization of Numerical Methods for Tumor Detection** — Python (2023–2024). Improved CT image clarity and tumor detection accuracy through systematic Gaussian and median filter parameter optimization.
* **Real World Object Detection** — Python, PyTorch, TensorFlow (2022–2023). Led a team analyzing YOLOv3 speed/accuracy tradeoffs across 10 input-resolution experiments; presented at the ERSP Conference (UIC) and 2023 ERSP National Conference.
* **Othello Q-Learning AI** — Python (2022). Applied Q-learning to a simulation of Othello; presented at the MSCS Undergraduate Research Laboratory (MURL), UIC.

Awards and honors
======
* **Duncan H. Lawrie Leadership Award**, UIUC (May 2025) — awarded to a student showing superior qualities of leadership and good citizenship
* **Letter of Recognition**, NCSA (Aug 2024) — for contributions to *Enhancing Response Accuracy of an LLM-Based Teaching Assistant Tool*

Certifications
======
* **Azure AI Engineer Associate**, Microsoft Azure (Jun 2024)

Skills
======
* **Languages:** Python, C++, C, Java, SQL (PostgreSQL, MySQL), R
* **ML frameworks:** PyTorch, TensorFlow, scikit-learn, Transformers (HuggingFace), evaluation harnesses
* **Data & systems:** Pandas, NumPy, Matplotlib, Flask, React, Supabase, Google Cloud Platform, Git
* **Spoken languages:** English, Ukrainian, Russian, Polish
