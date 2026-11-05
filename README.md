# ifaisal.net

Personal portfolio and blog of Faisal AlMutairi, built with Nuxt 3 and Tailwind CSS.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run generate
```

This writes a static site to `.output/public`, which any static host can serve.

## Add a blog post

Add a Markdown file to `content/blog`. The filename becomes the URL, and the frontmatter sets the details:

```markdown
---
title: "Post title"
date: "2026-01-08"
excerpt: "One sentence summary."
tags: ["database", "cache"]
---

Post content.
```

Arabic posts switch to right-to-left automatically.

## Edit the portfolio

Each section is a component in `components`, such as `ExperienceSection.vue` and `ProjectsSection.vue`, with its content at the top of the file.
