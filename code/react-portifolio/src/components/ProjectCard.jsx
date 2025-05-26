import { motion } from "framer-motion";
import { IoLink } from "react-icons/io5";

const ProjectCard = ({ project, onClick, portuguese, animations, index }) => {
  // Alternar a direção do card para layouts mais interessantes
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }} // Efeito cascata
      className="
        group relative rounded-xl border border-transparent 
        p-6 transition-all duration-300 shadow-lg 
        hover:scale-[101%] 
        hover:border-t hover:border-t-white/20 
        hover:border-b hover:border-b-black/50 
        hover:bg-white/5 hover:bg-gradient-to-br
      "


    >
      <div 
        onClick={onClick}
        className="flex flex-col lg:flex-row items-center p-6 cursor-pointer"
      >
        {/* Imagem do projeto */}
        <motion.div
          {...(isEven ? animations.fadeInLeft : animations.fadeInRight)}
          className="mb-6 lg:mb-0 lg:w-1/3 flex justify-center"
        >
          <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-green-400/20 transition-all duration-300">
            <img
              src={project.image}
              alt={project.title}
              className="w-56 h-56 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <span className="text-white text-lg font-medium">{portuguese ? "Ver detalhes" : "View details"}</span>
            </div>
          </div>
        </motion.div>

        {/* Conteúdo do projeto */}
        <motion.div
          {...(isEven ? animations.fadeInRight : animations.fadeInLeft)}
          className="lg:w-2/3 lg:px-6 flex flex-col"
        >
          <h2 className="text-xl font-bold mb-3 group-hover:text-green-400 transition-colors duration-300 flex items-center">
            {project.title}
            <IoLink className="ml-2 text-white/70 group-hover:text-green-400 text-lg transition-colors duration-300" />
          </h2>
          
          <p className="mb-5 text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
            {portuguese ? project.description : project.description_eng}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="rounded-full bg-yellow-900/30 px-3 py-1 text-sm font-medium text-yellow-500 transition-all duration-300 hover:bg-yellow-900/50 hover:text-yellow-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;