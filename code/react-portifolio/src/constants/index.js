import caronaImage from "../assets/projects/caronaImage.png";
import ticketTradeImage from "../assets/projects/ticketTradeImage.png";
import dePinhoImage from "../assets/projects/dePinhoImage.png"
import portifolioImage from "../assets/projects/portifolioImage.png"

export const HERO_CONTENT = {
  br: `Sou Gabriel Pongelupe, tenho 20 anos e sou um desenvolvedor apaixonado por resolver problemas de forma criativa e eficiente. Meu interesse por tecnologia começou em 2017, quando os videogames despertaram minha curiosidade sobre o que havia por trás das telas. Esse fascínio logo se transformou em ação: em 2019, iniciei meus estudos na escola de programação SuperGeek, onde mergulhei de cabeça em projetos desafiadores. Desde então, a programação se tornou mais do que uma habilidade — tornou-se minha vocação.


`,
  eng: `I’m Gabriel Pongelupe, a 20-year-old developer passionate about solving problems creatively and efficiently. My journey in technology began in 2017 when video games sparked a deep curiosity about what happens behind the scenes. In 2019, I joined SuperGeek, a programming school that introduced me to the world of software development through hands-on, challenging projects. Since then, programming has become more than just a skill — it’s my calling.

` 
}

export const HERO_CONTENT_2023 = {
    br: `Em 2023, comecei o curso de Engenharia de Software na PUC Minas. Em 2024, iniciei meu programa de trainee na Levty, onde aplico na prática o que venho aprendendo. Estou sempre em busca de evolução, guiado pela curiosidade, colaboração e vontade de causar impacto positivo.

`,
    eng : `In 2023, I started my Software Engineering degree at PUC Minas. By 2024, I joined Levty as a Software Engineer Trainee, putting my skills into practice. I'm driven by curiosity, collaboration, and the desire to grow and make a positive impact.

`
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
    company: "LEVTY",
    role: {
      br: "Engenheiro de Software Trainee",
      eng: "Software Engineer Trainee"
    },
    period: "Nov 2024 - Present",
    location: "Belo Horizonte, MG · Hybrid",
    description: {
      br: `Desenvolvedor Backend na plataforma SYDLE ONE, atuando na modernização de sistemas legados e migração de dados para grandes empresas do setor de telecomunicações. Responsável pelo desenvolvimento de soluções escaláveis e robustas, com foco em automação de processos, integração entre sistemas e sustentação de backends críticos. Destaque na criação e liderança de novos projetos, contribuindo para retenção de clientes, aumento da eficiência operacional e geração de receita. Experiência sólida com práticas de desenvolvimento ágil e tecnologias voltadas ao ambiente corporativo.`,
      
      eng: `Backend Developer on the SYDLE ONE platform, working on legacy system modernization and data migration for major telecommunications companies. Responsible for developing scalable and robust solutions focused on process automation, system integration, and maintaining critical backends. Recognized for leading new projects that contributed to client retention, increased operational efficiency, and revenue growth. Solid experience with agile development practices and enterprise-oriented technologies.`
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
    period: "Jul 2024 - Jan 2025",
    location: "Belo Horizonte, MG · Hybrid",
    description: {
      br: `Desenvolvimento de API RESTful para landing page interativa utilizando Node.js, Express.js e Prisma. Realizei a integração com bancos de dados MySQL e PostgreSQL, o que resultou em uma redução no tempo de resposta da aplicação e melhorou a escalabilidade. Trabalhei em colaboração com equipes multifuncionais para entregar soluções técnicas alinhadas aos requisitos do cliente, garantindo uma taxa de satisfação adequada.`,
      eng: `Developed a RESTful API for an interactive landing page using Node.js, Express.js, and Prisma. Integrated MySQL and PostgreSQL databases while optimizing application scalability and performance. Collaborated with cross-functional teams to deliver technical solutions aligned with client requirements and performance metrics.`
    },
    technologies: ["Node.js", "Express.js", "Prisma", "PostgreSQL", "MySQL", "JavaScript", "Git"],
    highlights: {
      br: [
        "Construção de API RESTful integrada com múltiplos sistemas de banco de dados.",
        "Otimização de performance e escalabilidade, reduzindo o tempo de resposta da aplicação em 35%",
        "Entrega de soluções técnicas que aumentaram a taxa de conversão da landing page e elevaram em o tempo médio de permanência dos usuários"
      ],
      eng: [
        "Built RESTful API integrated with multiple database systems.",
        "Optimized performance and scalability, reducing application response time by 35%",
        "Delivered technical solutions that increased landing page conversion rate by 22% and boosted average user session time by 15%"
      ]
    }

  }
];
