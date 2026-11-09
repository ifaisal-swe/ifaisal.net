# ifaisal.net

Source code for [ifaisal.net](https://ifaisal.net), the personal portfolio and blog of Faisal AlMutairi.

It's a small, fast, static site built with [Nuxt 3](https://nuxt.com) and [Tailwind CSS](https://tailwindcss.com). Feel free to read the code, learn from it, or use it as a starting point for your own site. See [License](#license) for what you can reuse.

## Features

- **Portfolio:** About, experience, projects, skills, certifications and contact sections.
- **Blog:** Markdown posts in `content/blog`, with tag filtering and automatic right-to-left layout for Arabic.
- **Repositories page (`/repo`):** lists public GitHub repositories live, with search, sorting, and a GitHub activity section showing a contribution heatmap, totals and the longest streak.
- **Static output:** `npm run generate` produces plain HTML that any static host can serve.

## Tech stack

| Area | Tool |
|---|---|
| Framework | Nuxt 3 (Vue 3) |
| Styling | Tailwind CSS 4 |
| Markdown | markdown-it |
| Data | GitHub REST API, [github-contributions-api](https://github.com/grubersjoe/github-contributions-api) |

## Getting started

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
git clone https://github.com/ifaisal-swe/ifaisal.net.git
cd ifaisal.net
npm install
npm run dev
```

The site runs at http://localhost:3000.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Build for a Node server |
| `npm run generate` | Build a static site into `.output/public` |
| `npm run preview` | Preview the production build locally |

## Project structure

```
assets/css/     Global styles and color tokens
components/     Page sections and shared UI (header, cards, icons, GitHub activity)
content/blog/   Blog posts in Markdown
pages/          Routes: home, /blogs, /blogs/[slug], /repo
public/         Static files such as project logos
utils/          Blog loading and date helpers
nuxt.config.ts  Site metadata, fonts and analytics
```

## Adding a blog post

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

## Using this as a template

To build your own site from this code:

1. Replace the content in each section component in `components/` (for example `ExperienceSection.vue` and `ProjectsSection.vue`). The data sits at the top of each file.
2. Change the name, description, URL and analytics ID in `nuxt.config.ts`. **Remove or replace the Google Analytics ID**, otherwise your visits are sent to my analytics.
3. Set `githubUser` in `pages/repo.vue` to your GitHub username.
4. Delete the posts in `content/blog` and the logos in `public/logos`, and add your own.

## Contributing

Found a bug or a typo? Open an [issue](https://github.com/ifaisal-swe/ifaisal.net/issues) or a pull request. Please don't send changes to my personal content (experience, projects or blog posts).

For security issues, email **faisal@ifaisal.net** instead of opening a public issue.

## License

The **code** is released under the [MIT License](LICENSE).

The **personal content** is not covered by that license. All rights are reserved for:
- blog posts in `content/blog`
- CV and portfolio text (experience, projects, certifications, about)
- my name, photo and the logos in `public/logos`

If you reuse this project, please replace that content with your own.
