import { motion } from "framer-motion";
import { IoLocationOutline, IoCalendarOutline, IoPeopleOutline } from "react-icons/io5";

const ExperienceCard = ({ experience, portuguese, animations, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-xl bg-neutral-900/30 hover:bg-gradient-to-br from-neutral-800/50 to-neutral-900/80 transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      <div className="flex flex-col lg:flex-row items-start p-6">
        
        {/* Company Info Section */}
        <motion.div
          {...(isEven ? animations.fadeInLeft : animations.fadeInRight)}
          className="mb-6 lg:mb-0 lg:w-1/3 flex flex-col items-center lg:items-start"
        >
          <div className="text-center lg:text-left">
            {/* Company Name */}
            <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
              {experience.company}
            </h2>
            
            {/* Role */}
            <h3 className="text-lg font-semibold text-green-400 mb-3">
              {portuguese ? experience.role.br : experience.role.eng}
            </h3>
            
            {/* Period and Location */}
            <div className="space-y-2 text-neutral-400 text-sm">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <IoCalendarOutline className="w-4 h-4" />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <IoLocationOutline className="w-4 h-4" />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experience Details */}
        <motion.div
          {...(isEven ? animations.fadeInRight : animations.fadeInLeft)}
          className="lg:w-2/3 lg:px-6 flex flex-col"
        >
          {/* Description */}
          <p className="mb-5 text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300 leading-relaxed">
            {portuguese ? experience.description.br : experience.description.eng}
          </p>
          
          {/* Highlights */}
          <div className="mb-5">
            <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
              <IoPeopleOutline className="w-4 h-4 text-green-400" />
              {portuguese ? "Principais Conquistas:" : "Key Achievements:"}
            </h4>
            <ul className="space-y-2">
              {(portuguese ? experience.highlights.br : experience.highlights.eng).map((highlight, idx) => (
                <li key={idx} className="text-neutral-400 text-sm flex items-start gap-2">
                  <span className="text-green-400 text-xs mt-1">•</span>
                  <span className="group-hover:text-neutral-300 transition-colors duration-300">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Technologies */}
          <div className="mt-auto">
            <h4 className="text-sm font-semibold text-white mb-3">
              {portuguese ? "Tecnologias:" : "Technologies:"}
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="rounded-full bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-400 transition-all duration-300 hover:bg-blue-900/50 hover:text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Border */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-blue-400 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
};

export default ExperienceCard;