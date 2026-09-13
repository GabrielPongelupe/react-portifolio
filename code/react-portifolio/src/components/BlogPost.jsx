import { useContext, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { IoArrowBack, IoTimeOutline, IoDocumentTextOutline, IoOpenOutline } from "react-icons/io5";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";
import { BLOG_POSTS } from "../constants";
import { LanguageContext } from "../contexts/LanguageContext";
import { formatDate } from "../utils/formatDate";

const CodeBlock = ({ lang, code }) => {
  const grammar = Prism.languages[lang] || Prism.languages.javascript;
  const html = Prism.highlight(code, grammar, lang || "javascript");

  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-[#1d1d1d] shadow-sm">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-4 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-2 text-xs font-medium text-neutral-400">{lang || "code"}</span>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
        <code className={`language-${lang || "javascript"}`} dangerouslySetInnerHTML={{ __html: html }} />
      </pre>
    </div>
  );
};

const parseInline = (text) => {
  const parts = text.split(/(\*\*.+?\*\*|`.+?`|\*.+?\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-[0.85em] text-neutral-800"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
};

const slugify = (text) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-+|-+$)/g, "");

const extractHeadings = (text) => {
  const seen = new Map();
  return text
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const title = line.slice(3).trim();
      let slug = slugify(title) || "secao";
      const count = seen.get(slug) || 0;
      seen.set(slug, count + 1);
      if (count > 0) slug = `${slug}-${count}`;
      return { id: slug, title, isGroup: title.includes(" — ") };
    });
};

const renderContent = (text, images = {}, headings = []) => {
  const lines = text.split("\n");
  const nodes = [];
  let paragraphLines = [];
  let listItems = [];
  let codeLines = null;
  let codeLang = "";
  let headingIndex = 0;

  const flushParagraph = () => {
    if (paragraphLines.length > 0) {
      nodes.push(<p key={nodes.length}>{parseInline(paragraphLines.join(" "))}</p>);
      paragraphLines = [];
    }
  };

  const flushList = () => {
    if (listItems.length > 0) {
      nodes.push(
        <ul key={nodes.length} className="list-disc space-y-1.5 pl-5">
          {listItems.map((item, i) => (
            <li key={i}>{parseInline(item)}</li>
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  for (const line of lines) {
    if (line.startsWith("~~~")) {
      if (codeLines === null) {
        flushParagraph();
        flushList();
        codeLines = [];
        codeLang = line.slice(3).trim();
      } else {
        nodes.push(<CodeBlock key={nodes.length} lang={codeLang} code={codeLines.join("\n")} />);
        codeLines = null;
        codeLang = "";
      }
      continue;
    }

    if (codeLines !== null) {
      codeLines.push(line);
      continue;
    }

    const imageMatch = line.match(/^!\[(.*)\]\(\.\/images\/([^)]+)\)$/);
    if (imageMatch) {
      flushParagraph();
      flushList();
      const [, caption, filename] = imageMatch;
      const src = images[filename];
      if (src) {
        nodes.push(
          <figure key={nodes.length} className="my-2">
            <img
              src={src}
              alt={caption || filename}
              className="w-full rounded-2xl border border-neutral-200 bg-white shadow-sm"
              loading="lazy"
            />
            {caption && (
              <figcaption className="mt-3 text-center text-xs text-neutral-400">{caption}</figcaption>
            )}
          </figure>
        );
      }
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      const heading = headings[headingIndex++];
      nodes.push(
        <h2
          key={nodes.length}
          id={heading?.id}
          className="mt-10 mb-2 scroll-mt-24 text-xl font-bold text-neutral-950 first:mt-0"
        >
          {line.slice(3)}
        </h2>
      );
      continue;
    }

    if (line.startsWith("- ")) {
      flushParagraph();
      listItems.push(line.slice(2));
      continue;
    }

    if (line.trim() === "") {
      flushParagraph();
      flushList();
      continue;
    }

    flushList();
    paragraphLines.push(line);
  }

  flushParagraph();
  flushList();

  return nodes;
};

const BlogPost = () => {
  const { portuguese } = useContext(LanguageContext);
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find((item) => item.slug === slug);
  const content = post ? (portuguese ? post.content.br : post.content.eng) : "";
  const headings = useMemo(() => extractHeadings(content), [content]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const handleTocClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top, behavior: "instant" });
    window.history.pushState(null, "", `#${id}`);
  };

  if (!post) {
    return (
      <section className="mx-auto max-w-3xl px-4 pb-24 pt-36 text-center sm:pt-40">
        <p className="text-neutral-500">
          {portuguese ? "Artigo não encontrado." : "Article not found."}
        </p>
        <button
          onClick={() => navigate("/blog")}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
        >
          <IoArrowBack />
          {portuguese ? "Voltar para o blog" : "Back to blog"}
        </button>
      </section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mx-auto max-w-7xl px-4 pb-24 pt-36 sm:pt-40"
    >
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-x-10">
        <div className="mx-auto w-full max-w-4xl">
          <div className="border-x-2 border-dotted border-neutral-300/70">
            <div className="border-b-2 border-dotted border-neutral-300/70 px-6 py-5">
              <button
                onClick={() => navigate("/blog")}
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-emerald-600"
              >
                <IoArrowBack />
                {portuguese ? "Voltar para o blog" : "Back to blog"}
              </button>
            </div>

            <div className="border-b-2 border-dotted border-neutral-300/70 px-6 py-8">
              <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-wide text-neutral-400">
                <span>{formatDate(post.date, portuguese)}</span>
                <span className="flex items-center gap-1">
                  <IoTimeOutline />
                  {portuguese ? post.readTime.br : post.readTime.eng}
                </span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl">
                {portuguese ? post.title.br : post.title.eng}
              </h1>

              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="px-6 py-8">
              <div className="space-y-5 leading-relaxed text-neutral-600">
                {renderContent(content, post.images, headings)}
              </div>
            </div>
          </div>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24">
            {headings.length > 0 && (
              <nav>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                  {portuguese ? "Sumário" : "Contents"}
                </p>
                <ul className="space-y-1 border-l border-neutral-200 text-[13px] leading-snug">
                  {headings.map((heading) => (
                    <li key={heading.id}>
                      <a
                        href={`#${heading.id}`}
                        onClick={(e) => handleTocClick(e, heading.id)}
                        className={`-ml-px block border-l-2 border-transparent py-0.5 hover:border-neutral-400 hover:text-neutral-900 ${
                          heading.isGroup
                            ? "pl-3 font-semibold text-neutral-700"
                            : "pl-6 text-neutral-500"
                        }`}
                      >
                        {heading.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </aside>
      </div>

      {post.pdfUrl && (
        <div className="mt-12">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h2 className="flex items-center gap-2 text-lg font-bold text-neutral-950">
              <IoDocumentTextOutline className="text-emerald-600" />
              {portuguese ? "Artigo completo (PDF)" : "Full paper (PDF)"}
            </h2>
            <a
              href={post.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-emerald-600 hover:text-emerald-700"
            >
              {portuguese ? "Abrir em nova aba" : "Open in new tab"}
              <IoOpenOutline />
            </a>
          </div>
          <iframe
            src={post.pdfUrl}
            title={portuguese ? post.title.br : post.title.eng}
            className="h-[80vh] w-full rounded-2xl border border-neutral-200 shadow-sm"
          />
        </div>
      )}
    </motion.section>
  );
};

export default BlogPost;
