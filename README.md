# virakasprova.github.io

My personal academic website, live at [virakasprova.github.io](https://virakasprova.github.io).

Built with [Jekyll](https://jekyllrb.com/) on the [Academic Pages](https://github.com/academicpages/academicpages.github.io) template (itself a fork of [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)), and served by GitHub Pages — every push to `master` rebuilds the site automatically.

## Where things live

| What | Where |
| --- | --- |
| Site config, sidebar links, publication categories | `_config.yml` |
| Header nav | `_data/navigation.yml` |
| About / landing page | `_pages/about.md` |
| CV | `_pages/cv.md` |
| Papers (one markdown file each) | `_publications/` |
| Downloadable files (CV PDF, etc.) | `files/` |
| Images, favicons, profile photo | `images/` |

## Adding a publication

Create `_publications/YYYY-MM-DD-short-name.md` with front matter:

```yaml
---
title: "Paper Title"
collection: publications
category: conferences   # or: preprints — categories are defined in _config.yml
permalink: /publication/YYYY-MM-DD-short-name
excerpt: 'One or two sentences shown on the publications list.'
date: YYYY-MM-DD
venue: 'Venue Name'
paperurl: 'https://arxiv.org/abs/...'
citation: 'Authors. (Year). &quot;Title.&quot; <i>Venue</i>.'
---
```

Anything below the front matter becomes the paper's own page. Optional extra fields: `slidesurl`, `bibtexurl`.

## Running locally

Requires Ruby 3.x (the macOS system Ruby 2.6 is too old):

```bash
bundle install
bundle exec jekyll serve --livereload
```

Then open <http://localhost:4000>. Alternatively, `docker compose up` uses the included `Dockerfile`.
