import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { IoArrowForward, IoGlobe, IoLogoGithub, IoDocumentTextOutline } from "react-icons/io5";
import ProjectThumbnail from "../common/ProjectThumbnail";

const ProjectRow = ({ project, onClick, portuguese, index }) => {
  const navigate = useNavigate();
  const shortDescription = portuguese ? project.short_description : project.short_description_eng;
  const description = portuguese ? project.description : project.description_eng;
  const isInternalLink = project.link?.startsWith("/");

  const goToInternalLink = (e) => {
    e.stopPropagation();
    navigate(project.link);
  };

  return (
    <motion.article
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 16 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: (index % 5) * 0.05, ease: "easeOut" }}
      className="grid gap-5 py-10 first:pt-0 last:pb-0 md:grid-cols-[5fr_7fr] md:items-center md:gap-10"
    >
      {/* Miniatura */}
      <button
        onClick={onClick}
        className="group block overflow-hidden rounded-2xl border border-neutral-200 bg-white text-left shadow-sm transition-colors duration-300 hover:border-emerald-400/50"
      >
        <div className="aspect-[16/10] overflow-hidden">
          <ProjectThumbnail
            project={project}
            portuguese={portuguese}
            imageClassName="transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </button>

      {/* Conteúdo */}
      <div className="min-w-0">
        {shortDescription && (
          <span className="text-[11px] font-medium uppercase tracking-wide text-emerald-600">
            {shortDescription}
          </span>
        )}

        <h3
          onClick={onClick}
          className="mt-1.5 flex cursor-pointer items-center gap-2 text-xl font-bold text-neutral-950 transition-colors duration-300 hover:text-emerald-600 sm:text-2xl"
        >
          {project.title}
          <IoArrowForward className="text-base text-neutral-400" />
        </h3>

        <p className="mt-3 leading-relaxed text-neutral-500">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-[11px] font-medium text-neutral-600"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white transition-colors duration-200 hover:bg-emerald-700"
            >
              <IoGlobe />
              Live Demo
            </a>
          )}

          {project.link && !isInternalLink && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-semibold text-neutral-700 transition-colors duration-200 hover:border-neutral-300 hover:text-neutral-950"
            >
              {project.link.includes("github.com") ? <IoLogoGithub /> : <IoGlobe />}
              {project.link.includes("github.com")
                ? portuguese
                  ? "Código"
                  : "Code"
                : portuguese
                ? "Ver projeto"
                : "View project"}
            </a>
          )}

          {project.link && isInternalLink && (
            <button
              onClick={goToInternalLink}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-semibold text-neutral-700 transition-colors duration-200 hover:border-neutral-300 hover:text-neutral-950"
            >
              {portuguese ? "Ver artigo" : "View paper"}
            </button>
          )}

          {project.pdfUrl && (
            <a
              href={project.pdfUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-semibold text-neutral-700 transition-colors duration-200 hover:border-neutral-300 hover:text-neutral-950"
            >
              <IoDocumentTextOutline />
              PDF
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectRow;
