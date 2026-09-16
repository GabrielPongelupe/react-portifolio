import { useContext, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  IoArrowBack,
  IoGlobe,
  IoLogoGithub,
  IoPlayCircleOutline,
  IoExpand,
} from "react-icons/io5";
import "prismjs/themes/prism-tomorrow.css";
import { PROJECTS } from "../constants";
import { PROJECT_DETAILS } from "../constants/projectDetails";
import { LanguageContext } from "../contexts/LanguageContext";
import { useLightbox } from "../contexts/LightboxContext";
import { extractHeadings, renderContent } from "../utils/renderMarkdown";
import { getYouTubeId } from "../utils/video";
import { getAccent } from "../utils/accent";
import ProjectThumbnail from "../common/ProjectThumbnail";

const VideoPlayer = ({ videoUrl }) => {
  const { openVideo } = useLightbox();
  const youtubeId = getYouTubeId(videoUrl);

  return (
    <div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-lg border border-neutral-200 bg-black shadow-sm sm:max-w-md">
      <div className="aspect-video w-full">
        {youtubeId ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title="Demo video"
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video src={videoUrl} controls playsInline className="h-full w-full" />
        )}
      </div>
      <button
        onClick={() => openVideo(videoUrl, !!youtubeId)}
        aria-label="Expand video"
        className="absolute right-2 top-2 rounded-full bg-black/60 p-2 text-white opacity-80 transition-opacity hover:opacity-100"
      >
        <IoExpand size={16} />
      </button>
    </div>
  );
};

const ProjectDetail = () => {
  const { portuguese } = useContext(LanguageContext);
  const { openImage } = useLightbox();
  const { slug } = useParams();
  const navigate = useNavigate();

  const projectsWithDetail = useMemo(() => PROJECTS.filter((p) => p.detailSlug), []);
  const project = PROJECTS.find((item) => item.detailSlug === slug);
  const detail = PROJECT_DETAILS[slug];
  const content = detail ? (portuguese ? detail.content.br : detail.content.eng) : "";
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

  if (!project) {
    return (
      <section className="mx-auto max-w-3xl px-4 pb-24 pt-36 text-center sm:pt-40">
        <p className="text-neutral-500">
          {portuguese ? "Projeto não encontrado." : "Project not found."}
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
        >
          <IoArrowBack />
          {portuguese ? "Voltar" : "Back"}
        </button>
      </section>
    );
  }

  const shortDescription = portuguese ? project.short_description : project.short_description_eng;
  const accent = getAccent(project.color);
  const pageIndex = projectsWithDetail.findIndex((p) => p.detailSlug === slug) + 1;
  const pageTotal = projectsWithDetail.length;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mx-auto max-w-7xl px-4 pb-24 pt-36 sm:pt-40"
    >
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-x-10">
        <div className="mx-auto w-full max-w-4xl">
          <div className="border border-neutral-200">
            <div className={`h-1.5 w-full ${project.color}`} />

            <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4">
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-950"
              >
                <IoArrowBack />
                {portuguese ? "Voltar para projetos" : "Back to projects"}
              </button>
              {pageTotal > 0 && (
                <span className="font-mono text-xs text-neutral-400">
                  {String(pageIndex).padStart(2, "0")} / {String(pageTotal).padStart(2, "0")}
                </span>
              )}
            </div>

            <div className="aspect-video w-full overflow-hidden border-b border-neutral-200">
              <ProjectThumbnail
                project={project}
                portuguese={portuguese}
                onImageClick={project.image ? () => openImage(project.image, project.title) : undefined}
              />
            </div>

            <div className="border-b border-neutral-200 px-6 py-8">
              {shortDescription && (
                <span className={`font-mono text-xs uppercase tracking-wide ${accent.text}`}>
                  {shortDescription}
                </span>
              )}

              <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl">
                {project.title}
              </h1>

              <p className="mt-4 max-w-[62ch] leading-relaxed text-neutral-500">
                {portuguese ? project.description : project.description_eng}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`rounded-md border ${accent.borderLight} bg-neutral-50 px-2.5 py-1 font-mono text-[11px] text-neutral-600`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.link && !project.link.startsWith("/") && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-4 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-neutral-800"
                  >
                    <IoLogoGithub size={18} />
                    {portuguese ? "Ver no GitHub" : "See on GitHub"}
                  </a>
                )}
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 rounded-full ${project.color} px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110`}
                  >
                    <IoGlobe size={18} />
                    Live Demo
                  </a>
                )}
                {detail?.videoUrl && (
                  <a
                    href="#demo-video"
                    onClick={(e) => handleTocClick(e, "demo-video")}
                    className={`inline-flex items-center gap-2 rounded-full border ${accent.borderMed} bg-white px-4 py-2.5 text-sm font-medium ${accent.text} transition-colors duration-200 hover:bg-neutral-50`}
                  >
                    <IoPlayCircleOutline size={18} />
                    {portuguese ? "Ver demonstração" : "Watch demo"}
                  </a>
                )}
              </div>
            </div>

            {detail?.videoUrl && (
              <div id="demo-video" className="scroll-mt-24 border-b border-neutral-200 px-6 py-8">
                <h2 className="mb-4 flex items-baseline gap-3 text-xl font-bold text-neutral-950">
                  <span className={`font-mono text-sm font-normal ${accent.text}`}>00</span>
                  {portuguese ? "Demonstração" : "Demo"}
                </h2>
                <VideoPlayer videoUrl={detail.videoUrl} />
              </div>
            )}

            <div className="px-6 py-8">
              {content ? (
                <div className="space-y-5 leading-relaxed text-neutral-600">
                  {renderContent(content, detail?.images, headings, openImage, {
                    variant: "project",
                    accentClass: accent.text,
                  })}
                </div>
              ) : (
                <p className="leading-relaxed text-neutral-500">
                  {portuguese ? project.description : project.description_eng}
                </p>
              )}
            </div>
          </div>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24">
            {headings.length > 0 && (
              <nav>
                <p className="mb-3 font-mono text-sm uppercase tracking-wide text-neutral-500">
                  {portuguese ? "Sumário" : "Contents"}
                </p>
                <ul className="space-y-1.5 border-l border-neutral-200 text-[15px] leading-snug">
                  {headings.map((heading, i) => (
                    <li key={heading.id}>
                      <a
                        href={`#${heading.id}`}
                        onClick={(e) => handleTocClick(e, heading.id)}
                        className="-ml-px flex items-baseline gap-2 border-l-2 border-transparent py-0.5 pl-6 text-neutral-600 hover:border-neutral-400 hover:text-neutral-900"
                      >
                        <span className="font-mono text-xs text-neutral-500">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{heading.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </aside>
      </div>
    </motion.section>
  );
};

export default ProjectDetail;
