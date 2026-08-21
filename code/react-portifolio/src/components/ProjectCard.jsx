import { motion } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";

const ProjectCard = ({ project, onClick, portuguese, index }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-emerald-400/50 lg:p-8"
    >
      <div className="flex flex-col items-center lg:flex-row">
        {/* Imagem do projeto */}
        <div className="mb-6 flex justify-center lg:mb-0 lg:w-1/3">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-48 object-cover lg:h-56 lg:w-56"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-950/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-sm font-medium text-white">{portuguese ? "Ver detalhes" : "View details"}</span>
            </div>
          </div>
        </div>

        {/* Conteúdo do projeto */}
        <div className="flex flex-col lg:w-2/3 lg:px-6">
          <h2 className="mb-3 flex items-center gap-2 text-xl font-bold text-neutral-950 transition-colors duration-300 group-hover:text-emerald-600">
            {project.title}
            <IoArrowForward className="text-base text-neutral-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-emerald-600" />
          </h2>

          <p className="mb-5 leading-relaxed text-neutral-500">
            {portuguese ? project.description : project.description_eng}
          </p>

          <div className="mt-auto flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
