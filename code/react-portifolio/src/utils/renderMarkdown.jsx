import Prism from "prismjs";
import "prismjs/components/prism-javascript";

export const CodeBlock = ({ lang, code }) => {
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

export const parseInline = (text) => {
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

export const slugify = (text) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-+|-+$)/g, "");

export const extractHeadings = (text) => {
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
      return { id: slug, title, isGroup: /^(Seção|Section)\s+\d+:/.test(title) };
    });
};

export const renderContent = (text, images = {}, headings = [], onImageClick) => {
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
          <figure key={nodes.length} className="my-2 flex flex-col items-center">
            <img
              src={src}
              alt={caption || filename}
              onClick={() => onImageClick?.(src, caption || filename)}
              className="max-h-72 w-auto max-w-full cursor-zoom-in rounded-2xl border border-neutral-200 bg-white object-contain shadow-sm transition-opacity hover:opacity-90 sm:max-h-96"
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
