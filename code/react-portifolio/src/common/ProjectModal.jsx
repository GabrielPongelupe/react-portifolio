import { useEffect, useRef, useContext } from "react";
import { createPortal } from "react-dom";
import { IoClose, IoGlobe, IoLogoGithub } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageContext } from "../contexts/LanguageContext";

const ProjectModal = ({ project, onClose, isOpen }) => {
  const modalRef = useRef(null);
  const { portuguese } = useContext(LanguageContext);
  
  // Fecha o modal ao clicar fora dele
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    // Fecha o modal com a tecla ESC
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

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-neutral-900 rounded-xl p-8 w-full max-w-3xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl border border-neutral-800"
          >
            {/* Botão de fechar - reposicionado e com espaçamento adicional */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-neutral-400 hover:text-white p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors duration-200 shadow-lg z-20"
              aria-label="Fechar modal"
            >
              <IoClose size={22} />
            </button>

            {/* Conteúdo do modal com margem superior adicional para separar do botão */}
            <div className="flex flex-col gap-4 mt-4">
              <div className="rounded-lg overflow-hidden mt-2">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
              </div>

              <h2 className="text-2xl font-bold text-green-400 mt-2">{project.title}</h2>
              
              <p className="text-neutral-300 leading-relaxed">
                {portuguese && project.fullDescription_pt 
                  ? project.fullDescription_pt 
                  : portuguese && !project.fullDescription_pt
                  ? project.description
                  : project.fullDescription || project.description_eng || project.description}
              </p>

              {/* Tecnologias */}
              <div className="mt-4">
                <h3 className="text-white text-lg font-medium mb-2">Tecnologias</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="rounded-full bg-neutral-800 px-3 py-1 text-sm font-medium text-yellow-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4 mt-6">
                {/* Botão para ver no GitHub - sempre presente usando o atributo 'link' */}
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 px-4 py-2 rounded-lg transition-colors duration-200 text-white"
                >
                  <IoLogoGithub size={20} />
                  <span>{portuguese ? "Ver no GitHub" : "See on GitHub"}</span>
                </a>
                
                {/* Botão Live Demo - exibe apenas se o projeto tiver o atributo liveDemoUrl */}
                {project.liveDemoUrl && (
                  <a 
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-900/30 hover:bg-green-900/50 text-green-400 px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    <IoGlobe size={20} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  // Usar createPortal para renderizar o modal no fim do documento
  // para evitar problemas com z-index e estilização
  return createPortal(modalContent, document.body);
};

export default ProjectModal;