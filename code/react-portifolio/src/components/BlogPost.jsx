import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { IoArrowBack, IoTimeOutline, IoDocumentTextOutline, IoOpenOutline } from "react-icons/io5";
import { BLOG_POSTS } from "../constants";
import { LanguageContext } from "../contexts/LanguageContext";

const formatDate = (isoDate, portuguese) =>
  new Date(`${isoDate}T00:00:00`).toLocaleDateString(portuguese ? "pt-BR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const BlogPost = () => {
  const { portuguese } = useContext(LanguageContext);
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

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
      className="mx-auto max-w-3xl px-4 pb-24 pt-36 sm:pt-40"
    >
      <button
        onClick={() => navigate("/blog")}
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-emerald-600"
      >
        <IoArrowBack />
        {portuguese ? "Voltar para o blog" : "Back to blog"}
      </button>

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

      <div className="mt-10 space-y-5 leading-relaxed text-neutral-600">
        {(portuguese ? post.content.br : post.content.eng)
          .split("\n\n")
          .map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
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
