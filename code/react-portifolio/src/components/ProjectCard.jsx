import { motion } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";

const ProjectCard = ({ project, onClick, portuguese, index }) => {
  const shortDescription = portuguese ? project.short_description : project.short_description_eng;
  const visibleTechnologies = project.technologies.slice(0, 4);
  const remainingTechnologies = project.technologies.length - visibleTechnologies.length;

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.06, ease: "easeOut" }}
      onClick={onClick}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-colors duration-300 hover:border-emerald-400/50"
    >
      {/* Imagem do projeto */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-950/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="text-sm font-medium text-white">{portuguese ? "Ver detalhes" : "View details"}</span>
        </div>
      </div>

      {/* Conteúdo do projeto */}
      <div className="flex flex-1 flex-col gap-2 p-5">
        {shortDescription && (
          <span className="text-[11px] font-medium uppercase tracking-wide text-emerald-600">
            {shortDescription}
          </span>
        )}

        <h3 className="flex items-center gap-2 text-base font-bold text-neutral-950 transition-colors duration-300 group-hover:text-emerald-600">
          {project.title}
          <IoArrowForward className="text-sm text-neutral-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-emerald-600" />
        </h3>

        <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-neutral-500">
          {portuguese ? project.description : project.description_eng}
        </p>

        <div className="mt-2 flex flex-wrap gap-2">
          {visibleTechnologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-[11px] font-medium text-neutral-600"
            >
              {tech}
            </span>
          ))}
          {remainingTechnologies > 0 && (
            <span className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-[11px] font-medium text-neutral-400">
              +{remainingTechnologies}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
