import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { IoArrowForward, IoNewspaperOutline, IoSearchOutline, IoTimeOutline } from "react-icons/io5";
import { BLOG_POSTS } from "../constants";
import { LanguageContext } from "../contexts/LanguageContext";
import SectionHeading from "../common/SectionHeading";
import { formatDate } from "../utils/formatDate";

const BlogCard = ({ post, portuguese, index, onClick }) => (
  <motion.article
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 20 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
    onClick={onClick}
    className="group flex cursor-pointer flex-col gap-3 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-emerald-400/50 lg:p-8"
  >
    <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-wide text-neutral-400">
      <span>{formatDate(post.date, portuguese)}</span>
      <span className="flex items-center gap-1">
        <IoTimeOutline />
        {portuguese ? post.readTime.br : post.readTime.eng}
      </span>
    </div>

    <h2 className="flex items-center gap-2 text-xl font-bold text-neutral-950 transition-colors duration-300 group-hover:text-emerald-600">
      {portuguese ? post.title.br : post.title.eng}
      <IoArrowForward className="text-base text-neutral-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-emerald-600" />
    </h2>

    <p className="leading-relaxed text-neutral-500">{portuguese ? post.excerpt.br : post.excerpt.eng}</p>

    <div className="mt-2 flex flex-wrap gap-2">
      {post.tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600"
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.article>
);

const Blog = () => {
  const { portuguese } = useContext(LanguageContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");

  const availableTags = [...new Set(BLOG_POSTS.flatMap((post) => post.tags))].sort();

  const sortedPosts = [...BLOG_POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredPosts = sortedPosts.filter((post) => {
    const matchesSearch =
      post.title.br.toLowerCase().includes(normalizedSearch) ||
      post.title.eng.toLowerCase().includes(normalizedSearch);
    const matchesTag = selectedTag === "all" || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const handlePostClick = (slug) => {
    navigate(`/blog/${slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <section className="mx-auto max-w-4xl px-4 pb-24 pt-36 sm:pt-40">
      <SectionHeading
        icon={IoNewspaperOutline}
        kicker={portuguese ? "Blog" : "Blog"}
        title={
          <>
            {portuguese ? "Artigos & " : "Articles & "}
            <span className="text-emerald-600">{portuguese ? "Posts" : "Posts"}</span>
          </>
        }
        subtitle={
          portuguese
            ? "Reflexões sobre engenharia de software, carreira e os projetos pessoais que mantenho no ar."
            : "Thoughts on software engineering, career, and the side projects I keep running."
        }
      />

      <div className="mb-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
        <div className="relative sm:w-64">
          <IoSearchOutline className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={portuguese ? "Buscar por título..." : "Search by title..."}
            className="w-full rounded-full border border-neutral-200 bg-white py-2 pl-9 pr-4 text-sm text-neutral-700 placeholder:text-neutral-400 focus:border-emerald-400 focus:outline-none"
          />
        </div>

        <select
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
          className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700 focus:border-emerald-400 focus:outline-none sm:w-52"
        >
          <option value="all">{portuguese ? "Todas as tags" : "All tags"}</option>
          {availableTags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {filteredPosts.length === 0 ? (
        <p className="text-center text-sm text-neutral-500">
          {portuguese ? "Nenhum artigo encontrado para esses filtros." : "No articles found for these filters."}
        </p>
      ) : (
        <div className="grid gap-6">
          {filteredPosts.map((post, index) => (
            <BlogCard
              key={post.slug}
              post={post}
              portuguese={portuguese}
              index={index}
              onClick={() => handlePostClick(post.slug)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Blog;
