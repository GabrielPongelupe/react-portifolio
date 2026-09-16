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

const SINGLE_IMG_CLASS =
  "max-h-72 w-auto max-w-full cursor-zoom-in rounded-2xl border border-neutral-200 bg-white object-contain shadow-sm transition-opacity hover:opacity-90 sm:max-h-96";

export const renderContent = (text, images = {}, headings = [], onImageClick, options = {}) => {
  const { variant = "blog", accentClass = "text-emerald-600" } = options;
  const lines = text.split("\n");
  const nodes = [];
  let paragraphLines = [];
  let listItems = [];
  let pendingImages = [];
  let codeLines = null;
  let codeLang = "";
  let headingIndex = 0;
  let figureCounter = 0;

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

  const renderFigcaption = (caption, figureIndex) => {
    if (!caption) return null;
    if (variant === "project") {
      return (
        <figcaption className="mt-2 text-center text-[11px] leading-snug text-neutral-400">
          <span className={`mr-1.5 whitespace-nowrap font-mono ${accentClass}`}>
            Fig. {String(figureIndex).padStart(2, "0")}
          </span>
          <span>{caption}</span>
        </figcaption>
      );
    }
    return <figcaption className="mt-3 text-center text-xs text-neutral-400">{caption}</figcaption>;
  };

  const flushImages = () => {
    if (pendingImages.length === 0) return;

    if (variant === "project" && pendingImages.length > 1) {
      nodes.push(
        <div key={nodes.length} className="my-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {pendingImages.map((im) => (
            <figure key={im.figureIndex} className="flex flex-col items-center">
              <img
                src={im.src}
                alt={im.caption || im.filename}
                onClick={() => onImageClick?.(im.src, im.caption || im.filename)}
                className="h-40 w-full cursor-zoom-in rounded-xl border border-neutral-200 bg-white object-cover shadow-sm transition-opacity hover:opacity-90 sm:h-48"
                loading="lazy"
              />
              {renderFigcaption(im.caption, im.figureIndex)}
            </figure>
          ))}
        </div>
      );
    } else {
      pendingImages.forEach((im) => {
        nodes.push(
          <figure key={nodes.length} className="my-2 flex flex-col items-center">
            <img
              src={im.src}
              alt={im.caption || im.filename}
              onClick={() => onImageClick?.(im.src, im.caption || im.filename)}
              className={SINGLE_IMG_CLASS}
              loading="lazy"
            />
            {renderFigcaption(im.caption, im.figureIndex)}
          </figure>
        );
      });
    }

    pendingImages = [];
  };

  for (const line of lines) {
    if (line.startsWith("~~~")) {
      if (codeLines === null) {
        flushParagraph();
        flushList();
        flushImages();
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
        figureCounter += 1;
        pendingImages.push({ src, caption, filename, figureIndex: figureCounter });
      }
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      flushImages();
      const heading = headings[headingIndex];
      const sectionNumber = headingIndex + 1;
      headingIndex += 1;
      nodes.push(
        <h2
          key={nodes.length}
          id={heading?.id}
          className="mt-12 mb-3 scroll-mt-24 flex items-baseline gap-3 text-xl font-bold text-neutral-950 first:mt-0"
        >
          {variant === "project" && (
            <span className={`font-mono text-sm font-normal ${accentClass}`}>
              {String(sectionNumber).padStart(2, "0")}
            </span>
          )}
          {line.slice(3)}
        </h2>
      );
      continue;
    }

    if (line.startsWith("- ")) {
      flushParagraph();
      flushImages();
      listItems.push(line.slice(2));
      continue;
    }

    if (line.trim() === "") {
      flushParagraph();
      flushList();
      continue;
    }

    flushList();
    flushImages();
    paragraphLines.push(line);
  }

  flushParagraph();
  flushList();
  flushImages();

  return nodes;
};
