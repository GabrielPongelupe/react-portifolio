import { PROJECTS } from "../constants";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext, useState } from "react";
import { IoLink } from "react-icons/io5";
import { motion } from "framer-motion";
import ProjectModal from "../common/ProjectModal"; // Importando o modal

const Projects = () => {
  const { portuguese } = useContext(LanguageContext);
  const [selectedProject, setSelectedProject] = useState(null); // Estado para o projeto selecionado

  const handleProjectClick = (project) => {
    setSelectedProject(project); // Define o projeto selecionado
  };

  const closeModal = () => {
    setSelectedProject(null); // Limpa o projeto selecionado ao fechar o modal
  };

  return (
    <div className="mx-4 border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="my-24 text-center text-4xl"
      >
        {portuguese ? "Meus" : "My"}
        <span className="text-green-400"> {portuguese ? "Projetos" : "Projects"}</span>
      </motion.h1>

      {PROJECTS.map((project, index) => (
        <div key={index}>
          <div
            className="mb-8 flex flex-col lg:flex-row justify-center rounded-xl hover:border-t hover:border-white/20 hover:cursor-pointer transition-transform duration-300 scale-101 lg:hover:bg-gradient-to-br from-white/10 to-white/1 px-4 py-6 max-w-4xl mx-auto"
            onClick={() => handleProjectClick(project)} // Abre o modal ao clicar
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full flex justify-center mb-4 lg:mb-0 lg:w-1/3"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-56 sm:w-56 md:w-56 lg:w-56 rounded-xl object-cover" // Ajustes nos tamanhos
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: +100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-2/3 lg:pl-6" // Espaçamento à esquerda
            >
              <h6 className="mb-2 font-semibold relative">
                {project.title}
                <span className="ml-2 absolute transition-opacity duration-[3000ms] lg:hover:opacity-100">
                  <IoLink className="text-white lg:hover:text-blue-400 text-lg mt-0.5 scale-105" />
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{portuguese ? project.description : project.description_eng}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    className="rounded-3xl bg-yellow-800 bg-opacity-25 px-3 py-1 text-sm font-medium text-yellow-500 whitespace-nowrap"
                    key={techIndex}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Modal para exibir informações do projeto */}
          {selectedProject && (
            <ProjectModal project={selectedProject} onClose={closeModal} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;
