import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { IoHardwareChipOutline } from "react-icons/io5";
import { LanguageContext } from "../contexts/LanguageContext";
import SectionHeading from "../common/SectionHeading";

// Ícones
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { FaJava, FaNodeJs, FaDocker } from "react-icons/fa";
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
    category: CATEGORIES.DATABASE,
    description: {
      en: "Open source Firebase alternative",
      pt: "Alternativa open source ao Firebase"
    },
    link: "https://supabase.com/"
  },
  {
    name: "ElasticSearch",
    icon: SiElasticsearch,
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
    category: CATEGORIES.BACKEND,
    description: {
      en: "Message broker software",
      pt: "Software de mensageria"
    },
    link: "https://www.rabbitmq.com/"
  }
];

// Animações reutilizáveis
const animations = {
  grid: {
    whileInView: {
      opacity: 1,
      transition: { staggerChildren: 0.04 },
    },
    initial: { opacity: 0 },
    viewport: { once: true, amount: 0.1 },
  },
  item: {
    whileInView: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: 16 },
  },
};

const Technologies = () => {
  const { portuguese } = useContext(LanguageContext);
  const [activeCategory, setActiveCategory] = useState(CATEGORIES.ALL);

  const filteredTechStack = TECH_STACK.filter(tech =>
    activeCategory === CATEGORIES.ALL || tech.category === activeCategory
  );

  const categoryText = {
    [CATEGORIES.ALL]: portuguese ? "Todas" : "All",
    [CATEGORIES.BACKEND]: "Backend",
    [CATEGORIES.FRONTEND]: "Frontend",
    [CATEGORIES.FRAMEWORK]: portuguese ? "Frameworks" : "Frameworks",
    [CATEGORIES.DATABASE]: portuguese ? "Banco de Dados" : "Database"
  };

  return (
    <section id="technologies" className="mx-auto max-w-6xl px-4 pt-24 pb-16">
      <SectionHeading
        icon={IoHardwareChipOutline}
        kicker={portuguese ? "Stack Técnica" : "Tech Stack"}
        title={
          <>
            {portuguese ? "Minhas" : "My"}
            <span className="text-emerald-600"> {portuguese ? "Tecnologias" : "Tech Stack"}</span>
          </>
        }
        subtitle={
          portuguese
            ? "Ferramentas e tecnologias que utilizo no meu desenvolvimento"
            : "Tools and technologies I use in my development process"
        }
      />

      {/* Filtros de categoria */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {Object.entries(categoryText).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-4 py-2 rounded-full transition-colors duration-300 text-sm font-medium border
              ${activeCategory === key
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'bg-white text-neutral-500 border-neutral-200 hover:border-emerald-400/60 hover:text-neutral-950'}`}
          >
            {value}
          </button>
        ))}
      </div>

      {/* Grid de tecnologias */}
      <motion.div
        key={activeCategory}
        {...animations.grid}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
      >
        {filteredTechStack.map((tech) => (
          <motion.div
            key={tech.name}
            {...animations.item}
            className="group flex flex-col items-center rounded-2xl border border-neutral-200 bg-white p-5 text-center shadow-sm transition-colors duration-300 hover:border-emerald-400/50 cursor-pointer"
            onClick={() => window.open(tech.link, '_blank', 'noopener,noreferrer')}
            role="link"
            tabIndex={0}
            title={portuguese ? tech.description.pt : tech.description.en}
            aria-label={`${tech.name} - ${portuguese ? 'Abrir documentação' : 'Open documentation'}`}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-100 text-2xl text-neutral-600 transition-colors duration-300 group-hover:text-emerald-600">
              <tech.icon />
            </div>

            <h3 className="mt-3 text-sm font-medium text-neutral-950">
              {tech.name}
            </h3>

            <span className="mt-1 text-xs text-neutral-500">
              {categoryText[tech.category]}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Technologies;
