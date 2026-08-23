import { useEffect, useRef, useContext } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { IoClose, IoDocumentTextOutline, IoGlobe, IoLogoGithub, IoNewspaperOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageContext } from "../contexts/LanguageContext";

const ProjectModal = ({ project, onClose, isOpen }) => {
  const panelRef = useRef(null);
  const navigate = useNavigate();
  const { portuguese } = useContext(LanguageContext);
  const isInternalLink = project.link?.startsWith("/");

  // Fecha o painel ao clicar fora dele
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        onClose();
      }
    };

    // Fecha o painel com a tecla ESC
    const handleEscKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [onClose]);

  const handleInternalLinkClick = () => {
    onClose();
    navigate(project.link);
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Painel lateral */}
          <motion.div
            ref={panelRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 z-10 flex w-full max-w-md flex-col overflow-y-auto border-l border-neutral-200 bg-white shadow-2xl sm:max-w-lg lg:max-w-xl"
          >
            {/* Botão de fechar */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-20 rounded-full bg-white/90 p-2 text-neutral-600 shadow-sm backdrop-blur-sm transition-colors duration-200 hover:text-neutral-950"
              aria-label={portuguese ? "Fechar painel" : "Close panel"}
            >
              <IoClose size={20} />
            </button>

            {/* Imagem do projeto */}
            <div className="aspect-video w-full shrink-0 overflow-hidden">
              <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
            </div>

            {/* Conteúdo */}
            <div className="flex flex-1 flex-col gap-5 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-neutral-950">{project.title}</h2>

              <p className="leading-relaxed text-neutral-500">
                {portuguese && project.fullDescription_pt
                  ? project.fullDescription_pt
                  : portuguese && !project.fullDescription_pt
                  ? project.description
                  : project.fullDescription || project.description_eng || project.description}
              </p>

              {/* Tecnologias */}
              <div>
                <h3 className="mb-3 text-sm font-semibold text-neutral-950">
                  {portuguese ? "Tecnologias" : "Technologies"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="mt-auto flex flex-col gap-3 pt-4">
                {/* Botão para ver o link do projeto (GitHub, página externa, ou post do blog) */}
                {project.link && isInternalLink && (
                  <button
                    onClick={handleInternalLinkClick}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-neutral-950 px-4 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-neutral-800"
                  >
                    <IoNewspaperOutline size={18} />
                    <span>{portuguese ? "Ver projeto" : "View project"}</span>
                  </button>
                )}
                {project.link && !isInternalLink && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-neutral-950 px-4 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-neutral-800"
                  >
                    {project.link.includes("github.com") ? <IoLogoGithub size={18} /> : <IoGlobe size={18} />}
                    <span>
                      {project.link.includes("github.com")
                        ? portuguese
                          ? "Ver no GitHub"
                          : "See on GitHub"
                        : portuguese
                        ? "Ver projeto"
                        : "View project"}
                    </span>
                  </a>
                )}

                {/* Botão Live Demo - exibe apenas se o projeto tiver o atributo liveDemoUrl */}
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-emerald-700"
                  >
                    <IoGlobe size={18} />
                    <span>Live Demo</span>
                  </a>
                )}

                {/* Botão Download PDF - exibe no lugar do Live Demo quando o projeto tiver pdfUrl */}
                {!project.liveDemoUrl && project.pdfUrl && (
                  <a
                    href={project.pdfUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-emerald-700"
                  >
                    <IoDocumentTextOutline size={18} />
                    <span>{portuguese ? "Baixar PDF" : "Download PDF"}</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  // Usar createPortal para renderizar o painel no fim do documento
  // para evitar problemas com z-index e estilização
  return createPortal(modalContent, document.body);
};

export default ProjectModal;
