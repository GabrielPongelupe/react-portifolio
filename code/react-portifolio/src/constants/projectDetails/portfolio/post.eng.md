This site is my personal portfolio — and also the biggest "client" of my product curiosity: every new section (blog, project case studies, language switcher) was an excuse to try something I wanted to learn.

## Features

- Bilingual content (PT/EN) across the whole site, with the language switch persisted through a React context
- Blog written in plain Markdown, version-controlled in the repo itself, with a custom parser/renderer that supports images, syntax-highlighted code, and an automatic table of contents
- Project case studies (this very page!) using the same Markdown engine as the blog, with an embedded video player for demos
- Entry and page-transition animations with Framer Motion
- Continuous deployment on Vercel on every push to the main branch

![Portfolio homepage, with the intro and quick access to resume and projects](./images/hero.jpg)

## How content is organized

Both blog posts and project pages are folders with a `post.br.md`, a `post.eng.md`, an optional `meta.json`, and an `images/` folder — Vite imports all of it automatically at build time via `import.meta.glob`, so adding a new project is just creating the folder and writing the Markdown, without touching any component.

![Project list on the homepage, with case study, live demo and code buttons for each one](./images/projects-list.jpg)
