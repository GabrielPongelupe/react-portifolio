import { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaBootstrap, FaJava } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiSpring, SiPython, SiMysql, SiSwagger } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';

// Definição das categorias de habilidades
const CATEGORIES = {
  FRONTEND: 'Frontend',
  BACKEND: 'Backend',
  DATABASE: 'Database',
  FRAMEWORKS: 'Frameworks'
};

function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Skills organizadas por categoria
  const skillsByCategory = {
    [CATEGORIES.FRONTEND]: [
      { icon: <FaHtml5 className="w-6 h-6 text-orange-500" />, skill: "HTML" },
      { icon: <FaCss3Alt className="w-6 h-6 text-blue-500" />, skill: "CSS" },
      { icon: <FaJs className="w-6 h-6 text-yellow-400" />, skill: "JavaScript" },
      { icon: <SiTypescript className="w-6 h-6 text-blue-600" />, skill: "TypeScript" },
      { icon: <FaReact className="w-6 h-6 text-blue-400" />, skill: "React" },
    ],
    [CATEGORIES.BACKEND]: [
      { icon: <FaNodeJs className="w-6 h-6 text-green-500" />, skill: "Node.js" },
      { icon: <FaJava className="w-6 h-6 text-red-500" />, skill: "Java" },
      { icon: <SiSpring className="w-6 h-6 text-green-600" />, skill: "Spring" },
      { icon: <SiPython className="w-6 h-6 text-yellow-600" />, skill: "Python" },
    ],
    [CATEGORIES.DATABASE]: [
      { icon: <SiMysql className="w-6 h-6 text-blue-800" />, skill: "MySQL" },
      { icon: <BiLogoPostgresql className="w-6 h-6 text-blue-500" />, skill: "PostgreSQL" },
    ],
    [CATEGORIES.FRAMEWORKS]: [
      { icon: <SiTailwindcss className="w-6 h-6 text-cyan-400" />, skill: "Tailwind CSS" },
      { icon: <FaBootstrap className="w-6 h-6 text-purple-500" />, skill: "Bootstrap" },
      { icon: <SiSwagger className="w-6 h-6 text-green-400" />, skill: "Swagger" },
    ]
  };

  // Obtém todas as habilidades ou filtra por categoria
  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return Object.values(skillsByCategory).flat();
    }
    return skillsByCategory[activeCategory] || [];
  };

  return (
    <section id="skills" className="py-20 max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Minhas Habilidades</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
      </div>

      {/* Filtros de categoria */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        <button 
          onClick={() => setActiveCategory('all')} 
          className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium
            ${activeCategory === 'all' 
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
        >
          Todas
        </button>
        {Object.values(CATEGORIES).map(category => (
          <button 
            key={category}
            onClick={() => setActiveCategory(category)} 
            className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium
              ${activeCategory === category 
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid de habilidades */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {getFilteredSkills().map((skill, index) => (
          <div 
            key={index}
            className="flex flex-col items-center justify-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="text-gray-600 group-hover:scale-110 transition-transform duration-300 mb-3">
              {skill.icon}
            </div>
            <p className="font-medium">{skill.skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;