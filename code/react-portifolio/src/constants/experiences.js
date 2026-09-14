import aesExperienceImage from "../assets/experiences/aes_1.png";
import levtyExperienceImage1 from "../assets/experiences/levty_1.jpeg";
import levtyExperienceImage2 from "../assets/experiences/levty_2.png";
import parfinExperienceImage from "../assets/experiences/parfin_1.webp";

export const EXPERIENCES = [
  {
    company: "PARFIN",
    role: {
      br: "Engenheiro de Software",
      eng: "Software Engineer"
    },
    period: "Aug 2025 - Present",
    duration: { br: "1 ano 1 mês", eng: "1 yr 1 mo" },
    current: true,
    location: "Remote",
    images: [parfinExperienceImage],
    description: {
      br: `Engenheiro de Software na Parfin, atuando no desenvolvimento de infraestrutura para ativos digitais utilizada por instituições financeiras e empresas cripto. Desenvolvo e sustento sistemas distribuídos de alta criticidade para custódia, trading e execução de operações financeiras, utilizando .NET, Node.js, Angular e AWS, em uma plataforma que movimenta bilhões de dólares e atende clientes institucionais globalmente.`,
      eng: `Software Engineer at Parfin, working on digital asset infrastructure used by financial institutions and crypto companies. I build and maintain highly critical distributed systems for custody, trading, and financial operation execution, using .NET, Node.js, Angular, and AWS, on a platform that moves billions of dollars and serves institutional clients globally.`
    },
    technologies: [".NET", "Node.js", "Angular", "AWS", "Azure DevOps", "Blockchain", "Microservices", "System Design"],
    highlights: {
      br: [
        "Desenvolvo e evoluo microsserviços críticos de custódia e trading, utilizando .NET, Node.js, Angular e AWS, que suportam uma plataforma com US$ 4+ bilhões movimentados nos últimos 12 meses e 18+ milhões de cotações aceitas",
        "Construo integrações e fluxos de execução financeira conectando 20+ exchanges, OTCs e market makers a múltiplas blockchains, além de trilhos financeiros como Pix e SWIFT, atendendo 17+ clientes institucionais, incluindo bancos, instituições financeiras e empresas nativas de cripto",
        "Atuo em todo o ciclo de desenvolvimento e operação em produção, utilizando Azure DevOps, CI/CD, AWS e ferramentas de observabilidade, desde implementação e testes até deploy, troubleshooting e resolução de incidentes em sistemas financeiros de alta criticidade"
      ],
      eng: [
        "Build and evolve critical custody and trading microservices, using .NET, Node.js, Angular, and AWS, supporting a platform with $4+ billion moved over the last 12 months and 18+ million quotes accepted",
        "Build integrations and financial execution flows connecting 20+ exchanges, OTCs, and market makers to multiple blockchains, plus financial rails like Pix and SWIFT, serving 17+ institutional clients, including banks, financial institutions, and crypto-native companies",
        "Work across the full development and production operation cycle, using Azure DevOps, CI/CD, AWS, and observability tooling, from implementation and testing to deployment, troubleshooting, and incident resolution in highly critical financial systems"
      ]
    }
  },
  {
    company: "LEVTY",
    role: {
      br: "Engenheiro de Software Trainee",
      eng: "Software Engineer Trainee"
    },
    period: "Nov 2024 - Aug 2025",
    duration: { br: "10 meses", eng: "10 months" },
    current: false,
    location: "Belo Horizonte, MG · Hybrid",
    images: [levtyExperienceImage1, levtyExperienceImage2],
    description: {
      br: `Backend na plataforma SYDLE ONE, modernizando sistemas legados e migrando dados para grandes empresas de telecomunicações. Foco em automação de processos, integração entre sistemas e sustentação de backends críticos, liderando novos projetos com práticas ágeis.`,

      eng: `Backend developer on the SYDLE ONE platform, modernizing legacy systems and migrating data for major telecommunications companies. Focused on process automation, system integration, and maintaining critical backends, leading new projects with agile practices.`
    },
    technologies: ["JavaScript", "React", "Elasticsearch", "REST API", "SYDLE ONE", "AWS"],
    highlights: {
  br: [
    "Experiência adquirida com desenvolvimento de software empresarial, colaborando em projetos que impactaram mais de 4.2 milhões de usuários finais",
    "Participação em projetos de migração de dados para telecomunicações, movimentando mais de 40.000 contratos de clientes",
    "Contribuição com propostas de automação que resultaram em uma redução no tempo de processamento interno",
  ],
  eng: [
    "Gained experience with enterprise software development, contributing to projects impacting over 4.2 million end users",
    "Participated in data migration projects for telecommunications, involving over 40,000 client contracts",
    "Contributed automation proposals that reduced internal processing time"
  ]
}


  },
  {
    company: "Agência Experimental de Software - PUC Minas",
    role: {
      br: "Desenvolvedor Backend",
      eng: "Backend Developer"
    },
    period: "Jan 2024 - Jan 2025",
    duration: { br: "1 ano 1 mês", eng: "1 yr 1 mo" },
    current: false,
    location: "Remote",
    images: [aesExperienceImage, "https://icei.pucminas.br/aes/logo-aes.svg"],
    description: {
      br: `Backend na AES, agência de projetos da PUC Minas com mais de 7 projetos publicados. Construí uma API RESTful com Node.js, Express e Prisma, integrada a MySQL e PostgreSQL, para uma landing page interativa.`,
      eng: `Backend developer at AES, PUC Minas' student-run software agency with 7+ published projects. Built a RESTful API with Node.js, Express, and Prisma, integrated with MySQL and PostgreSQL, for an interactive landing page.`
    },
    technologies: ["Node.js", "Express.js", "Prisma", "PostgreSQL", "MySQL", "JavaScript", "Git"],
    highlights: {
      br: [
        "Parte de uma agência com mais de 7 projetos publicados, incluindo soluções adotadas em toda a PUC Minas",
        "Otimização de performance e escalabilidade, reduzindo o tempo de resposta da aplicação em 35%",
        "Entrega de soluções técnicas que aumentaram em 22% a taxa de conversão da landing page e elevaram em 15% o tempo médio de permanência dos usuários"
      ],
      eng: [
        "Part of a software agency with 7+ published projects, including solutions adopted across all of PUC Minas",
        "Optimized performance and scalability, reducing application response time by 35%",
        "Delivered technical solutions that increased landing page conversion rate by 22% and boosted average user session time by 15%"
      ]
    }
  }
];
