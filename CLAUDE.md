# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

The actual application lives in `code/react-portifolio/`, not the repo root. Run every command below from that directory.

## Commands

```bash
cd code/react-portifolio
npm install       # install dependencies
npm run dev       # start Vite dev server (add -- --port <n> to change the port)
npm run build     # production build to dist/
npm run preview   # preview a production build locally
npm run lint      # ESLint over the whole src/ tree
```

There is no test suite or test runner configured in this project.

## Architecture

This is a bilingual (PT/EN) personal portfolio built with Vite, React 18, React Router, Tailwind CSS, and Framer Motion.

### Content lives in data, not components

Most sections (`Hero`, `Experience`, `Projects`, `Interests`, `Technologies`, `Contact`) are driven by plain arrays/objects in `src/constants/*.js`, re-exported from `src/constants/index.js`. Every user-facing string that needs both languages is stored as a `br`/`eng` pair (or a `_eng`-suffixed field), and components read the active language from `LanguageContext` (`src/contexts/LanguageContext.jsx`, exposes a `portuguese` boolean) rather than from routing or URL state.

### Markdown-driven blog and project case studies

Blog posts and project case-study pages both follow the same folder convention and are loaded at build time with `import.meta.glob`, so adding new content never touches a component:

- Blog: `src/constants/blog/<slug>/{post.br.md, post.eng.md, meta.json, images/}`, loaded and assembled by `src/constants/blog/index.js` into `BLOG_POSTS`.
- Project case studies: `src/constants/projectDetails/<slug>/{post.br.md, post.eng.md, meta.json?, images/}`, loaded by `src/constants/projectDetails/index.js` into `PROJECT_DETAILS`.

Both markdown files support a small custom syntax (not a Markdown library): `## ` headings, `- ` list items, `` `inline code` ``, `**bold**`/`*italic*`, ` ~~~lang ... ~~~ ` fenced code blocks, and `![caption](./images/filename.ext)` images resolved against that folder's `images/`. The parser/renderer (`extractHeadings`, `renderContent`) is shared by both `BlogPost.jsx` and `ProjectDetail.jsx` in `src/utils/renderMarkdown.jsx`. `renderContent` takes a `variant` option (`"blog"` vs `"project"`) that changes how headings and images render — project pages get numbered sections (`01`, `02`, ...) and numbered figure captions (`Fig. 01`), and consecutive images group into a screenshot grid instead of stacking full-width.

A project only gets a case-study page if its entry in `src/constants/projects.js` has a `detailSlug` matching a folder under `projectDetails/`; `ProjectDetail.jsx` looks up the project by `detailSlug` and merges it with the matching `PROJECT_DETAILS` entry. Projects without a `detailSlug` link straight to an external URL (GitHub, a live demo) or an internal route instead.

### Per-project accent colors

Each project in `projects.js` has a `color` field (a literal Tailwind `bg-*` class, e.g. `"bg-orange-500"`). `src/utils/accent.js` maps that literal string to a fixed set of companion `text-*`/`border-*` classes used on its case-study page. This map exists because Tailwind's JIT compiler only picks up class names it finds as literal strings in source; a template-literal-constructed class like `` `text-${color}` `` would not be generated. When a new project uses a color not already in `ACCENT_MAP`, add it there explicitly rather than deriving it at runtime.

### Lightbox and video

`src/contexts/LightboxContext.jsx` mounts a single global lightbox (portal-rendered) in `App.jsx`, exposing `openImage(src, alt)` and `openVideo(src, isYouTube)` via the `useLightbox()` hook. Both `BlogPost.jsx` and `ProjectDetail.jsx` wire clickable images and the project video player through it instead of each owning its own modal. `src/utils/video.js` extracts a YouTube video ID from a URL; project demo videos are either a YouTube link or a self-hosted file under `public/videos/<slug>/`.

### Routing

Defined in `App.jsx`: `/`, `/interesses`, `/blog`, `/blog/:slug`, `/projetos/:slug`. The home route composes `Hero`, `Experience`, `Projects`, `Technologies`, `Contact` in one page.

### Fonts

Three families are configured in `tailwind.config.js`/`index.css`: `Inter` (default body/UI sans), `JetBrains Mono` (`font-mono`, used for structural chrome — nav links, section/figure numbering, tech-stack chips), and `Instrument Serif` (`font-serif`, used only for the typographic "cover" treatment on projects without a logo image, see `ProjectThumbnail.jsx`).
