import { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../contexts/LanguageContext";

// Ícones
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { FaJava, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import { SiJavascript, SiSpring, SiPython, SiFastapi, SiFirebase, SiSupabase, SiElasticsearch, SiFlutter, SiRabbitmq } from "react-icons/si";

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
    },
    link: "https://react.dev/"
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
    },
    link: "https://www.java.com/"
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
    },
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
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
    },
    link: "https://spring.io/"
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
    },
    link: "https://www.python.org/"
  },
  {
    name: "FastAPI",
    icon: SiFastapi,
    color: "text-teal-500",
    duration: 2.5,
    category: CATEGORIES.FRAMEWORK,
    description: {
      en: "High-performance web framework for building APIs with Python",
      pt: "Framework web de alto desempenho para criar APIs com Python"
    },
    link: "https://fastapi.tiangolo.com/"
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
    },
    link: "https://nodejs.org/"
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
    },
    link: "https://firebase.google.com/"
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
    },
    link: "https://supabase.com/"
  },
  // {
    // name: "Amazon Web Services",
    // icon: FaAws,
    // color: "text-white",
    // duration: 3.3,
    // category: CATEGORIES.BACKEND,
    // description: {
      // en: "Cloud services plataform",
      // pt: "Plataforma de serviços de computação em nuvem"
    // },
    // link: "https://aws.amazon.com/"
  // },
  {
    name: "ElasticSearch",
    icon: SiElasticsearch,
    color: "text-amber-500",
    duration: 3.2,
    category: CATEGORIES.DATABASE,
    description: {
      en: "Search and analytics engine",
      pt: "Motor de busca e análise"
    },
    link: "https://www.elastic.co/"
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
    },
    link: "https://reactnative.dev/"
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
    },
    link: "https://flutter.dev/"
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
    },
    link: "https://www.docker.com/"
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
    },
    link: "https://www.rabbitmq.com/"
  }
];

// Animações reutilizáveis com viewport once = false para permitir repetição
const animations = {
  title: {
    whileInView: { opacity: 1, y: 0 },
    initial: { y: -100, opacity: 0 },
    transition: { duration: 1, ease: "easeOut" },
    viewport: { once: false, amount: 0.2 }
  },
  fadeInUp: {
    whileInView: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 50 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: false, amount: 0.1 }
  },
  fadeInLeft: {
    whileInView: { opacity: 1, x: 0 },
    initial: { opacity: 0, x: -100 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: false, amount: 0.1 }
  },
  fadeInRight: {
    whileInView: { opacity: 1, x: 0 },
    initial: { opacity: 0, x: 100 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: false, amount: 0.1 }
  },
  staggerContainer: {
    whileInView: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    initial: { opacity: 0 },
    viewport: { once: false, amount: 0.1 }
  },
  staggerItem: {
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    },
    initial: { opacity: 0, y: 20 }
  }
};

const Technologies = () => {
  const { portuguese } = useContext(LanguageContext);
  const [activeCategory, setActiveCategory] = useState(CATEGORIES.ALL);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [forceRender, setForceRender] = useState(0);

  // Hook para verificar quando a seção entra e sai da visualização
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // Quando a seção sai do view
      if (!entries[0].isIntersecting && shouldAnimate) {
        // Force render para reiniciar animações quando voltar à visualização
        setShouldAnimate(false);
      }
      
      // Quando a seção entra na view novamente
      if (entries[0].isIntersecting && !shouldAnimate) {
        setShouldAnimate(true);
        setForceRender(prev => prev + 1);
      }
    }, { threshold: 0.1 });

    const section = document.getElementById("technologies");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [shouldAnimate]);

  // Filtrar as tecnologias de acordo com a categoria selecionada
  const filteredTechStack = TECH_STACK.filter(tech => 
    activeCategory === CATEGORIES.ALL || tech.category === activeCategory
  );

  // Texto das categorias traduzido
  const categoryText = {
    [CATEGORIES.ALL]: portuguese ? "Todas" : "All",
    [CATEGORIES.BACKEND]: "Backend",
    [CATEGORIES.FRONTEND]: "Frontend",
    [CATEGORIES.FRAMEWORK]: portuguese ? "Frameworks" : "Frameworks",
    [CATEGORIES.DATABASE]: portuguese ? "Banco de Dados" : "Database"
  };

  return (
    <section id="technologies" className="pb-16 pt-24 border-b border-neutral-800">
      <div className="container mx-auto px-4">
        {/* Título com animação de entrada de cima para baixo */}
        <motion.div
          key={`title-${forceRender}`}
          {...animations.title}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold">
            {portuguese ? "Minhas" : "My"} 
            <span className="text-green-400"> {portuguese ? "Tecnologias" : "Tech Stack"}</span>
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: false }}
            className="mt-4 text-neutral-400 max-w-2xl mx-auto"
          >
            {portuguese 
              ? "Ferramentas e tecnologias que utilizo no meu desenvolvimento"
              : "Tools and technologies I use in my development process"}
          </motion.p>
        </motion.div>

        {/* Filtros de categoria - Animação de entrada da esquerda */}
        <motion.div 
          key={`filter-${forceRender}`}
          {...animations.fadeInLeft}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {Object.entries(categoryText).map(([key, value], index) => (
            <motion.button 
              key={`${key}-${forceRender}`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              viewport={{ once: false }}
              onClick={() => setActiveCategory(key)} 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium
                ${activeCategory === key 
                  ? 'bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg shadow-green-500/20' 
                  : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-300 border border-neutral-700 hover:border-green-500/30'}`}
            >
              {value}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid de tecnologias com animação de entrada staggered */}
        <motion.div 
          key={`grid-${activeCategory}-${forceRender}`}
          {...animations.staggerContainer}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center"
        >
          {filteredTechStack.map((tech, index) => (
            <motion.div 
              key={`${tech.name}-${forceRender}`}
              custom={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: index * 0.05,
                  duration: 0.5,
                  ease: "easeOut"
                }
              }}
              viewport={{ once: false }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 20px rgba(34, 197, 94, 0.2)" 
              }}
              className="flex flex-col items-center p-4 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-green-500/30 transition-all duration-300 w-full max-w-xs cursor-pointer"
              onClick={() => window.open(tech.link, '_blank', 'noopener,noreferrer')}
              role="link"
              tabIndex={0}
              aria-label={`${tech.name} - ${portuguese ? 'Abrir documentação' : 'Open documentation'}`}
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