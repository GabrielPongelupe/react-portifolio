import caronaImage from "../assets/projects/caronaImage.png";
import ticketTradeImage from "../assets/projects/ticketTradeImage.png";
import dePinhoImage from "../assets/projects/dePinhoImage.png"
import portifolioImage from "../assets/projects/portifolioImage.png"

import aesExperienceImage from "../assets/experiences/aes_1.png";
import levtyExperienceImage1 from "../assets/experiences/levty_1.jpeg";
import levtyExperienceImage2 from "../assets/experiences/levty_2.png";
import parfinExperienceImage from "../assets/experiences/parfin_1.webp";

export const HERO_CONTENT = {
  br: `Desenvolvedor apaixonado por resolver problemas com código desde 2017. Hoje curso Engenharia de Software na PUC Minas e atuo na Parfin, construindo soluções para o mercado financeiro e blockchain.`,
  eng: `Developer passionate about solving problems with code since 2017. Currently studying Software Engineering at PUC Minas and working at Parfin, building solutions for the financial and blockchain markets.`
}






export const ABOUT_TEXT = {
    br: `Sou um estudante de Engenharia de Software na PUC Minas e um desenvolvedor apaixonado por criar
 soluções tecnológicas inovadoras e funcionais. Utilizei diversas tecnologias, como Java, Spring Boot, SQL, HTML, CSS, JavaScript
 , e React, em projetos que desafiaram minha capacidade de resolver problemas e entregar resultados impactantes. Desde cedo, minha 
 curiosidade natural despertou um interesse profundo em entender como as coisas funcionam, o que me levou a explorar o mundo da tecnologia.
  Gosto de trabalhar em equipe e enfrentar desafios complexos, sempre buscando aprender e evoluir. Fora do ambiente acadêmico, 
  estou constantemente explorando novas tecnologias e aprimorando minhas habilidades para me manter na vanguarda do desenvolvimento.

`,
  eng: `I am a Software Engineering student at PUC Minas and a passionate developer focused on creating innovative and functional technological solutions. I have used various technologies such as Java, Spring Boot, SQL, HTML, CSS, JavaScript, and React in projects that challenged my problem-solving skills and delivered impactful results. From an early age, my natural curiosity sparked a deep interest in understanding how things work, which led me to explore the world of technology. I enjoy working in teams and tackling complex challenges, always striving to learn and grow. Outside of the academic environment, I am constantly exploring new technologies and honing my skills to stay at the forefront of development.`
};


export const PROJECTS = [
  {
    title: "DePinho Multimidias",
    link: "https://github.com/bragap/de-pinho-multimidias",
    liveDemoUrl: "https://plf-es-2024-1-ti3-8966100-de-pinho-multimidias.vercel.app/",
    image: dePinhoImage,
    description:
      "Projeto dePinhoMultimídias é uma plataforma digital para a venda de conteúdo multimídia automotivo desenvolvida para o YouTuber Gabriel De Pinho. Foi feita utilizando tecnologias como Java Spring Boot e integrada à API do MercadoPago. O trabalho incluiu planejamento, desenvolvimento ágil e foco na satisfação do cliente.",
    description_eng: "DePinhoMultimídias Project is a digital platform for selling automotive multimedia content developed for YouTuber Gabriel De Pinho. It was built using technologies like Java Spring Boot and integrated with the MercadoPago API. The project included planning, agile development, and a focus on client satisfaction.",
    short_description: "E-commerce",
    short_description_eng: "E-commerce",
    color: "bg-blue-600", // Azul como o do Zé Delivery
    technologies: ["Spring Boot", "Java", "JavaScript", "Payment Gateway API"],
  },
  {
    title: "Portfolio Website",
    link: "https://github.com/GabrielPongelupe/react-portifolio",
    liveDemoUrl: "https://pongelupee.vercel.app/",
    image: portifolioImage,
    description_eng: "This is my personal portfolio website, where you can find information about me and the projects I have developed. Explore to learn more about my work and career journey.",
    description:
      "Este site é o meu portfólio pessoal, onde você encontra informações sobre mim e os projetos que desenvolvi. Explore para conhecer meu trabalho e trajetória.",
    short_description: "Portfólio Pessoal",
    short_description_eng: "Personal Portfolio",
    color: "bg-black", // Preto
    technologies: ["React.js", "Tailwind css", "Frame Motion"],
  },
  {
    title: "Carona",
    link: "https://github.com/GabrielPongelupe/carona-",
    image: caronaImage,
    description_eng: "Carpool app similar to Uber, designed for students and staff at PUC Minas to connect and share rides. Offers a safer, cost-free alternative to public transportation by allowing drivers and passengers within the university to coordinate trips. Focused on backend architecture and real-time interaction, without automatic payments or live tracking.",
    description: "Aplicativo de caronas similar ao Uber, feito para conectar alunos e funcionários da PUC Minas e facilitar o compartilhamento de viagens. Oferece uma alternativa segura e gratuita ao transporte público e aos altos preços de apps convencionais de viagem, permitindo que motoristas e passageiros da universidade combinem caronas de forma prática. Foco na arquitetura backend e na interação em tempo real, sem pagamentos automáticos ou rastreamento ao vivo.",
    short_description: "App de Carona Universitária",
    short_description_eng: "University Carpool App",
    color: "bg-blue-400", // Azul claro
    technologies: ["React.js", "React Native", "Java", "Spring Framework", "RabbitMQ", "Supabase", "Firebase"],
  },
  {
    title: "TicketTrade",
    link: "https://github.com/GabrielPongelupe/Ticket-Trade",
    image: ticketTradeImage,
    description_eng: "API for Ticket Purchase and Resale Platform is an interface that enables integration with an online system for buying and reselling tickets for shows, events, and lectures. It streamlines the management of reservations, sales, and access to event information, providing a smooth and efficient experience for both users and administrators.",
    description:
      "API para Plataforma de Compra e Revenda de Ingressos é uma interface que permite a integração com um sistema online para adquirir e revender ingressos de shows, eventos e palestras. Facilita a gestão de reservas, vendas e acesso a informações sobre eventos, proporcionando uma experiência fluida e eficiente para usuários e administradores.",
    short_description: "Sistema de Gestão",
    short_description_eng: "Management System",
    color: "bg-green-500", // Verde de tom médio
    technologies: ["Spring Boot", "Java", "JavaScript", "HTML5", "CSS"],
  },
  


];



export const CONTACT = {
  phoneNo: "+55 (31) 99903-6093",
  email: "gabrielpongelupee@gmail.com",
};


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
    location: "Belo Horizonte, MG · Remote",
    images: [parfinExperienceImage],
    description: {
      br: `Engenheiro de Software na Parfin, plataforma de custódia digital (CaaS) que conecta mais de 20 exchanges, custodians e bancos a múltiplas blockchains como Ethereum, Bitcoin, Solana e Polygon. Desenvolvo e sustento os microsserviços da plataforma em .NET, Node.js e Angular, com infraestrutura AWS e pipelines de CI/CD no Azure DevOps.`,
      eng: `Software Engineer at Parfin, a digital asset custody (CaaS) platform connecting 20+ exchanges, custodians, and banks across multiple blockchains such as Ethereum, Bitcoin, Solana, and Polygon. I build and maintain the platform's microservices in .NET, Node.js, and Angular, with AWS infrastructure and Azure DevOps CI/CD pipelines.`
    },
    technologies: [".NET", "Node.js", "Angular", "AWS", "Azure DevOps", "Blockchain", "Microservices", "System Design"],
    highlights: {
      br: [
        "Atuação em uma plataforma que conecta mais de 20 exchanges, custodians e bancos a múltiplas blockchains, incluindo trilhos fiat como Pix e SWIFT",
        "Desenvolvimento e suporte de microsserviços críticos de custódia digital e execução de operações (RFQ) em ambiente de produção",
        "Atuação em todo o ciclo de entrega — do desenvolvimento ao deploy — utilizando .NET, Node.js e Angular, com infraestrutura AWS e pipelines Azure DevOps"
      ],
      eng: [
        "Worked on a platform connecting 20+ exchanges, custodians, and banks across multiple blockchains, including fiat rails like Pix and SWIFT",
        "Developed and supported critical digital custody and trade execution (RFQ) microservices in a production environment",
        "Contributed across the full delivery cycle — from development to deploy — using .NET, Node.js, and Angular, with AWS infrastructure and Azure DevOps pipelines"
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
    location: "Belo Horizonte, MG · Hybrid",
    images: [aesExperienceImage],
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
