import React from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Fundo opcional, se você quiser escurecer um pouco o fundo */}
      <div className="fixed inset-0 bg-black opacity-30" onClick={onClose} />
      <motion.div
        className="bg-gray-800 rounded-xl p-6 mx-4 max-w-2xl z-10 border border-white flex" // Cor do modal alterada para gray-800
      >
        <div className="w-1/2">
          <img src={project.image} alt={project.title} className="w-full rounded-lg" />
        </div>
        <div className="w-1/2 pl-6">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl text-white font-bold">{project.title}</h2>
            <IoClose className="text-white cursor-pointer text-xl hover:text-red-700 transition duration-300" onClick={onClose} />
          </div>
          <p className="text-yellow-500 font-semibold mt-2">{project.short_description}</p> {/* Short description */}
          <p className="text-neutral-400 mt-2">{project.description}</p> {/* Full description */}
          <div className="mt-4">
            <h4 className="text-yellow-500">Tecnologias:</h4>
            <div className="flex flex-wrap gap-2 mt-1">
              {project.technologies.map((tech, techIndex) => (
                <span
                  className="rounded-3xl bg-yellow-800 bg-opacity-25 px-3 py-1 text-sm font-medium text-yellow-500"
                  key={techIndex}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Botão para acessar a aplicação */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-yellow-500 text-black  px-4 py-2 rounded-lg font-medium hover:bg-yellow-600 transition duration-300"
            >
              Acesse a aplicação
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
