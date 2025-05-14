import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../contexts/LanguageContext";

// Ícones
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { FaJava, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import { SiJavascript, SiSpring, SiPython, SiFirebase, SiSupabase, SiElasticsearch, SiFlutter, SiRabbitmq } from "react-icons/si";

// Categorias disponíveis
const CATEGORIES = {
  ALL: "all",
  FRONTEND: "frontend",
  BACKEND: "backend",
  FRAMEWORK: "framework",
  DATABASE: "database",
};

// Definição das tecnologias com seus detalhes e categorias
const TECH_STACK = [
  {
    name: "React.js",
    icon: RiReactjsLine,
    color: "text-cyan-400",
    duration: 2.5,
    category: CATEGORIES.FRONTEND,
    description: {
      en: "Frontend library for building user interfaces",
      pt: "Biblioteca para construção de interfaces de usuário"
    }
  },
  {
    name: "Java",
    icon: FaJava,
    color: "text-orange-500",
    duration: 3,
    category: CATEGORIES.BACKEND,
    description: {
      en: "General-purpose programming language",
      pt: "Linguagem de programação de propósito geral"
    }
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-400",
    duration: 5,
    category: CATEGORIES.FRONTEND,
    description: {
      en: "Programming language of the web",
      pt: "Linguagem de programação da web"
    }
  },
  {
    name: "Spring",
    icon: SiSpring,
    color: "text-green-400",
    duration: 6,
    category: CATEGORIES.FRAMEWORK,
    description: {
      en: "Java framework for enterprise applications",
      pt: "Framework Java para aplicações empresariais"
    }
  },
  {
    name: "Python",
    icon: SiPython,
    color: "text-blue-500",
    duration: 4,
    category: CATEGORIES.BACKEND,
    description: {
      en: "General-purpose programming language",
      pt: "Linguagem de programação de propósito geral"
    }
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-600",
    duration: 2.5,
    category: CATEGORIES.BACKEND,
    description: {
      en: "JavaScript runtime for server-side applications",
      pt: "Ambiente de execução JavaScript para aplicações server-side"
    }
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "text-yellow-500",
    duration: 3.5,
    category: CATEGORIES.DATABASE,
    description: {
      en: "Platform for mobile and web applications",
      pt: "Plataforma para aplicações móveis e web"
    }
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    color: "text-emerald-500",
    duration: 4.5,
    category: CATEGORIES.DATABASE,
    description: {
      en: "Open source Firebase alternative",
      pt: "Alternativa open source ao Firebase"
    }
  },
  {
    name: "Amazon Web Services",
    icon: FaAws,
    color: "text-white",
    duration: 3.3,
    category: CATEGORIES.BACKEND,
    description: {
      en: "Cloud services plataform",
      pt: "Plataforma de serviços de computação em nuvem"
    }
  },
  {
    name: "ElasticSearch",
    icon: SiElasticsearch,
    color: "text-amber-500",
    duration: 3.2,
    category: CATEGORIES.DATABASE,
    description: {
      en: "Search and analytics engine",
      pt: "Motor de busca e análise"
    }
  },
  {
    name: "React Native",
    icon: TbBrandReactNative,
    color: "text-sky-500",
    duration: 4.8,
    category: CATEGORIES.FRAMEWORK,
    description: {
      en: "Framework for building native mobile apps",
      pt: "Framework para construção de aplicativos mobile nativos"
    }
  },
  {
    name: "Flutter",
    icon: SiFlutter,
    color: "text-cyan-500",
    duration: 5.2,
    category: CATEGORIES.FRAMEWORK,
    description: {
      en: "UI toolkit for building natively compiled applications",
      pt: "Kit de UI para construção de aplicações compiladas nativamente"
    }
  },
  {
    name: "Docker",
    icon: FaDocker,
    color: "text-blue-400",
    duration: 3.8,
    category: CATEGORIES.BACKEND,
    description: {
      en: "Containerization platform",
      pt: "Plataforma de containerização"
    }
  },
  {
    name: "RabbitMQ",
    icon: SiRabbitmq,
    color: "text-orange-400",
    duration: 4.2,
    category: CATEGORIES.BACKEND,
    description: {
      en: "Message broker software",
      pt: "Software de mensageria"
    }
  }
];

// Animações
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

const titleVariants = {
  hidden: { y: -50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const filterVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    } 
  }
};

const Technologies = () => {
  const { portuguese } = useContext(LanguageContext);
  const [activeCategory, setActiveCategory] = useState(CATEGORIES.ALL);

  // Filtrar as tecnologias de acordo com a categoria selecionada
  const filteredTechStack = TECH_STACK.filter(tech => 
    activeCategory === CATEGORIES.ALL || tech.category === activeCategory
  );

  // Texto das categorias traduzido
  const categoryText = {
    [CATEGORIES.ALL]: portuguese ? "Todas" : "All",
    [CATEGORIES.FRONTEND]: "Frontend",
    [CATEGORIES.BACKEND]: "Backend",
    [CATEGORIES.FRAMEWORK]: portuguese ? "Frameworks" : "Frameworks",
    [CATEGORIES.DATABASE]: portuguese ? "Banco de Dados" : "Database"
  };

  return (
    <section className="py-16 border-b border-neutral-800">
      <div className="container mx-auto px-4">
        {/* Título animado */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            {portuguese ? "Minhas Tecnologias" : "My Tech Stack"}
          </h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
            {portuguese 
              ? "Ferramentas e tecnologias que utilizo no meu desenvolvimento"
              : "Tools and technologies I use in my development process"}
          </p>
        </motion.div>

        {/* Filtros de categoria */}
        <motion.div 
          variants={filterVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          <button 
            onClick={() => setActiveCategory(CATEGORIES.ALL)} 
            className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium
              ${activeCategory === CATEGORIES.ALL 
                ? 'bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg' 
                : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-300 border border-neutral-700 hover:border-green-500/30'}`}
          >
            {categoryText[CATEGORIES.ALL]}
          </button>
          {Object.entries(categoryText).filter(([key]) => key !== CATEGORIES.ALL).map(([key, value]) => (
            <button 
              key={key}
              onClick={() => setActiveCategory(key)} 
              className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium
                ${activeCategory === key 
                  ? 'bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg' 
                  : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-300 border border-neutral-700 hover:border-green-500/30'}`}
            >
              {value}
            </button>
          ))}
        </motion.div>

        {/* Grid de tecnologias com animação de stagger */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center"
          key={activeCategory} // Força a remontagem quando a categoria muda
        >
          {filteredTechStack.map((tech, index) => (
            <motion.div 
              key={tech.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 20px rgba(34, 197, 94, 0.2)" 
              }}
              className="flex flex-col items-center p-4 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-green-500/30 transition-all duration-300 w-full max-w-xs"
            >
              <div className="relative group">
                <motion.div
                  animate={{ 
                    y: [0, -3, 4],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: tech.duration,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                  className="flex items-center justify-center h-16 w-16 rounded-full bg-neutral-800 mb-3"
                >
                  <tech.icon className={`text-4xl ${tech.color}`} />
                </motion.div>
                
                {/* Tooltip */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-4 transition-all duration-300 bg-neutral-800 px-3 py-1 rounded text-xs whitespace-nowrap z-10">
                  {portuguese ? tech.description.pt : tech.description.en}
                </div>
              </div>
              
              <h3 className="text-sm font-medium text-center mt-2">
                {tech.name}
              </h3>
              
              {/* Pequeno indicador de categoria */}
              <span className="mt-1 text-xs text-neutral-500 bg-neutral-800 px-2 py-0.5 rounded-full">
                {categoryText[tech.category]}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;