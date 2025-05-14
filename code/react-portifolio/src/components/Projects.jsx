import { useContext, useState } from "react";
import { IoLink } from "react-icons/io5";
import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import { LanguageContext } from "../contexts/LanguageContext";
import ProjectModal from "../common/ProjectModal";
import ProjectCard from "./ProjectCard"; // Novo componente criado para melhor organização

// Animações reutilizáveis
const animations = {
  title: {
    whileInView: { opacity: 1, y: 0 },
    initial: { y: -100, opacity: 0 },
    transition: { duration: 1, ease: "easeOut" },
  },
  fadeInLeft: {
    whileInView: { opacity: 1, x: 0 },
    initial: { opacity: 0, x: -100 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
  fadeInRight: {
    whileInView: { opacity: 1, x: 0 },
    initial: { opacity: 0, x: 100 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Projects = () => {
  const { portuguese } = useContext(LanguageContext);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    // Scroll lock para evitar scrolling quando o modal estiver aberto
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    // Restaura o scroll quando o modal for fechado
    document.body.style.overflow = "auto";
  };

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16 border-b border-neutral-900">
      <motion.h1
        {...animations.title}
        className="mb-16 text-center text-4xl font-bold"
      >
        {portuguese ? "Meus" : "My"}
        <span className="text-green-400"> {portuguese ? "Projetos" : "Projects"}</span>
      </motion.h1>

      <div className="grid gap-8 md:gap-12">
        {PROJECTS.map((project, index) => (
          <ProjectCard 
            key={project.id || index}
            project={project}
            index={index}
            onClick={() => handleProjectClick(project)}
            portuguese={portuguese}
            animations={animations}
          />
        ))}
      </div>

      {/* Modal condicional */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={closeModal}
          isOpen={!!selectedProject}
        />
      )}
    </section>
  );
};

export default Projects;