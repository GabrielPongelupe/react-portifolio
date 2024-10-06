import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaBootstrap, FaJava } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiSpring, SiPython, SiMysql, SiSwagger } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { motion } from 'framer-motion';

function Skills() {
  const skills = [
    { icon: <FaHtml5 className="w-5 h-5" />, skill: "HTML" },
    { icon: <FaCss3Alt className="w-5 h-5" />, skill: "CSS" },
    { icon: <FaJs className="w-5 h-5" />, skill: "JavaScript" },
    { icon: <SiTypescript className="w-5 h-5" />, skill: "TypeScript" },
    { icon: <FaNodeJs className="w-5 h-5" />, skill: "Node.js" },
    { icon: <FaReact className="w-5 h-5" />, skill: "React" },
    { icon: <FaJava className="w-5 h-5" />, skill: "Java" },
    { icon: <SiSpring className="w-5 h-5" />, skill: "Spring" },
    { icon: <SiPython className="w-5 h-5" />, skill: "Python" },
    { icon: <SiMysql className="w-5 h-5" />, skill: "MySQL" },
    { icon: <BiLogoPostgresql className="w-5 h-5" />, skill: "PostgreSQL" },
    { icon: <SiTailwindcss className="w-5 h-5" />, skill: "Tailwind CSS" },
    { icon: <FaBootstrap className="w-5 h-5" />, skill: "Bootstrap" },
    { icon: <SiSwagger className="w-5 h-5" />, skill: "Swagger" },
  ];

  return (
    <section id="skills" className="flex flex-col text-center mt-36">
      <motion.h1
        className="font-bold text-xl mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h1>

      {/* Habilidades */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-10 max-w-xs mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, staggerChildren: 0.2 }} // animação em cascata para os filhos
      >
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {skill.icon}
            <p className="text-lg">{skill.skill}</p>
          </motion.span>
        ))}
      </motion.div>
      
      <hr className="w-24 h-1 border-none bg-gray-600 mx-auto mb-10" />
    </section>
  );
}

export default Skills;
