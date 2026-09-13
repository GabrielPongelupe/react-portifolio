const rawPostModules = import.meta.glob("./*/post.*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

const metaModules = import.meta.glob("./*/meta.json", {
  eager: true,
  import: "default",
});

const imageModules = import.meta.glob("./*/images/*.{png,jpg,jpeg,gif,svg,webp}", {
  eager: true,
  import: "default",
});

const FRONTMATTER_RE = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/;

const parseFrontmatter = (raw) => {
  const match = raw.match(FRONTMATTER_RE);
  if (!match) return { meta: {}, body: raw.trim() };

  const [, frontmatter, body] = match;
  const meta = {};
  for (const line of frontmatter.split("\n")) {
    if (!line.trim()) continue;
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) continue;
    const key = line.slice(0, separatorIndex).trim();
    meta[key] = line.slice(separatorIndex + 1).trim();
  }
  return { meta, body: body.trim() };
};

const postsBySlug = {};

const getPost = (slug) => {
  postsBySlug[slug] ??= { slug, title: {}, excerpt: {}, readTime: {}, content: {}, images: {} };
  return postsBySlug[slug];
};

for (const [path, raw] of Object.entries(rawPostModules)) {
  const match = path.match(/^\.\/([^/]+)\/post\.(br|eng)\.md$/);
  if (!match) continue;
  const [, slug, lang] = match;
  const { meta, body } = parseFrontmatter(raw);
  const post = getPost(slug);
  post.title[lang] = meta.title ?? "";
  post.excerpt[lang] = meta.excerpt ?? "";
  post.readTime[lang] = meta.readTime ?? "";
  post.content[lang] = body;
}

for (const [path, meta] of Object.entries(metaModules)) {
  const match = path.match(/^\.\/([^/]+)\/meta\.json$/);
  if (!match) continue;
  const [, slug] = match;
  Object.assign(getPost(slug), meta);
}

for (const [path, src] of Object.entries(imageModules)) {
  const match = path.match(/^\.\/([^/]+)\/images\/(.+)$/);
  if (!match) continue;
  const [, slug, filename] = match;
  getPost(slug).images[filename] = src;
}

export const BLOG_POSTS = Object.values(postsBySlug).sort((a, b) => b.date.localeCompare(a.date));
