import caronaImage from "../assets/projects/caronaImage.png";
import ticketTradeImage from "../assets/projects/ticketTradeImage.png";
import dePinhoImage from "../assets/projects/dePinhoImage.png";
import portfolioImage from "../assets/projects/portifolioImage.png";
import aesImage from "../assets/projects/aesImage.png";

export const PROJECTS = [
  {
    title: "Delivery System",
    link: "https://github.com/oarthurfc/delivery-app",
    liveDemoUrl: "https://www.youtube.com/watch?v=tKkOWpcZqjU",
    // Projeto sem logo próprio: usa uma capa tipográfica no lugar da imagem.
    thumbnailType: "cover",
    cover: {
      kicker: { br: "Projeto Acadêmico · PUC Minas", eng: "Academic Project · PUC Minas" },
      title: {
        br: "Sistema de Delivery com Microsserviços",
        eng: "Microservices Delivery System",
      },
      subtitle: {
        br: "App Flutter, microsserviços e Azure Functions",
        eng: "Flutter app, microservices, and Azure Functions",
      },
      footnote: { br: "Flutter · Spring Boot · Node.js · Azure", eng: "Flutter · Spring Boot · Node.js · Azure" },
    },
    description:
      "Sistema completo de delivery desenvolvido em equipe na PUC Minas, com app mobile em Flutter e backend em arquitetura de microsserviços. API Gateway, autenticação, pedidos e rastreamento em tempo real rodam como serviços independentes, comunicando-se de forma síncrona e assíncrona (RabbitMQ), com uma camada serverless em Azure Functions para notificações e e-mails.",
    description_eng:
      "Complete delivery system built with a team at PUC Minas, pairing a Flutter mobile app with a microservices backend. An API Gateway, authentication, order management, and real-time tracking run as independent services, communicating synchronously and asynchronously (RabbitMQ), with a serverless layer on Azure Functions handling notifications and emails.",
    fullDescription_pt:
      "Sistema completo de gestão e rastreamento de entregas, desenvolvido em equipe de 3 pessoas como projeto acadêmico na PUC Minas, unindo um app mobile híbrido em Flutter a um backend em arquitetura de microsserviços com uma camada serverless na Azure.\n\nO app mobile tem fluxos separados para clientes e entregadores, com rastreamento em tempo real via GPS, captura de foto como comprovante de entrega, histórico de pedidos, armazenamento offline com SQLite e notificações push.\n\nNo backend, cada responsabilidade é um serviço independente, cada um com seu próprio banco de dados:\n• API Gateway (Spring Cloud Gateway) — ponto único de entrada, roteando e autenticando todas as chamadas\n• Auth Service (Node.js) — autenticação e emissão de tokens JWT, com MongoDB\n• Order Service (Java 21 / Spring Boot) — CRUD completo de pedidos, com PostgreSQL\n• Tracking Service (Node.js) — rastreamento de entregas em tempo real, com PostgreSQL e documentação Swagger\n\nOs serviços se comunicam de forma síncrona via REST e de forma assíncrona via RabbitMQ, isolando falhas e permitindo escalar cada serviço de forma independente. Numa terceira fase, integramos Azure Functions e Azure Service Bus para processar o envio de e-mails e notificações push de forma assíncrona e serverless, absorvendo picos de demanda sem sobrecarregar os serviços principais.\n\nToda a orquestração é feita com Docker e Docker Compose, com scripts de setup automatizado, health checks em todos os serviços e documentação Swagger/OpenAPI.",
    fullDescription:
      "Complete delivery management and tracking system, built with a team of 3 as an academic project at PUC Minas, pairing a hybrid Flutter mobile app with a backend built on a microservices architecture and a serverless layer on Azure.\n\nThe mobile app has separate flows for customers and drivers, with real-time GPS tracking, photo capture as delivery proof, order history, offline storage with SQLite, and push notifications.\n\nOn the backend, each responsibility is its own independent service, each with its own database:\n• API Gateway (Spring Cloud Gateway) — single entry point, routing and authenticating every call\n• Auth Service (Node.js) — authentication and JWT issuance, backed by MongoDB\n• Order Service (Java 21 / Spring Boot) — full order CRUD, backed by PostgreSQL\n• Tracking Service (Node.js) — real-time delivery tracking, backed by PostgreSQL, with Swagger docs\n\nServices communicate synchronously over REST and asynchronously over RabbitMQ, isolating failures and letting each service scale independently. In a third phase, we integrated Azure Functions and Azure Service Bus to process email and push notifications asynchronously and serverlessly, absorbing demand spikes without overloading the core services.\n\nThe whole stack is orchestrated with Docker and Docker Compose, with automated setup scripts, health checks across every service, and Swagger/OpenAPI documentation.",
    short_description: "Delivery · Microsserviços",
    short_description_eng: "Delivery · Microservices",
    color: "bg-orange-500", // Laranja como o de apps de delivery
    technologies: [
      "Flutter",
      "Spring Boot",
      "Java 21",
      "Node.js",
      "Spring Cloud Gateway",
      "PostgreSQL",
      "MongoDB",
      "RabbitMQ",
      "Azure Functions",
      "Azure Service Bus",
      "Docker",
    ],
  },
  {
    title: "DePinho Multimidias",
    link: "https://github.com/bragap/de-pinho-multimidias",
    liveDemoUrl: "https://plf-es-2024-1-ti3-8966100-de-pinho-multimidias.vercel.app/",
    thumbnailType: "logo",
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
    title: "Agência Experimental de Software",
    link: "https://github.com/agencia-experimental-de-software/landing-page",
    liveDemoUrl: "https://icei.pucminas.br/aes",
    thumbnailType: "logo",
    image: aesImage,
    description:
      "Landing page institucional da Agência Experimental de Software (AES), organização sem fins lucrativos ligada ao curso de Engenharia de Software da PUC Minas que desenvolve soluções para clientes internos e externos da universidade. O site é o canal direto de entrada de demandas — recebidas, analisadas e encaminhadas às equipes responsáveis — e também a vitrine da agência, divulgando projetos entregues e os desenvolvedores por trás deles. Atuei no backend, construindo a API em Node.js e Express com Prisma sobre PostgreSQL e o fluxo de e-mails automáticos que confirmam ao cliente o recebimento da demanda e, depois, sua aprovação como projeto.",
    description_eng:
      "Institutional landing page for the Agência Experimental de Software (AES), a non-profit organization tied to PUC Minas' Software Engineering program that builds solutions for clients inside and outside the university. The site is the agency's front door for incoming demands — received, reviewed, and routed to the right team — and also its showcase, featuring delivered projects and the developers behind them. I worked on the backend, building the Node.js and Express API with Prisma on PostgreSQL, along with the automated email flow that confirms to the client that a demand was received and, later, that it became a project.",
    short_description: "Landing Page Institucional",
    short_description_eng: "Institutional Landing Page",
    color: "bg-teal-500", // Teal do gradiente da marca da AES
    technologies: [
      "Next.js",
      "React.js",
      "Mantine UI",
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Nodemailer",
      "Docker",
    ],
  },
  {
    title: "Portfolio Website",
    link: "https://github.com/GabrielPongelupe/react-portifolio",
    liveDemoUrl: "https://pongelupee.vercel.app/",
    thumbnailType: "logo",
    image: portfolioImage,
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
    thumbnailType: "logo",
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
    thumbnailType: "logo",
    image: ticketTradeImage,
    description_eng: "API for Ticket Purchase and Resale Platform is an interface that enables integration with an online system for buying and reselling tickets for shows, events, and lectures. It streamlines the management of reservations, sales, and access to event information, providing a smooth and efficient experience for both users and administrators.",
    description:
      "API para Plataforma de Compra e Revenda de Ingressos é uma interface que permite a integração com um sistema online para adquirir e revender ingressos de shows, eventos e palestras. Facilita a gestão de reservas, vendas e acesso a informações sobre eventos, proporcionando uma experiência fluida e eficiente para usuários e administradores.",
    short_description: "Sistema de Gestão",
    short_description_eng: "Management System",
    color: "bg-green-500", // Verde de tom médio
    technologies: ["Spring Boot", "Java", "JavaScript", "HTML5", "CSS"],
  },
  {
    title: "OSS Contributors Profile",
    link: "/blog/oss-contributors-profile",
    pdfUrl: "/oss-contributors-profile.pdf",
    // Projeto sem logo próprio: usa uma capa tipográfica no lugar da imagem.
    thumbnailType: "cover",
    cover: {
      kicker: { br: "Pesquisa Científica", eng: "Scientific Research" },
      title: {
        br: "Perfil de Contribuidores de Projetos Open Source",
        eng: "Profile of Open Source Project Contributors",
      },
      subtitle: {
        br: "Uma análise de 1.000 repositórios do GitHub",
        eng: "An analysis of 1,000 GitHub repositories",
      },
      footnote: { br: "Melhor Artigo · PUC Minas", eng: "Best Paper · PUC Minas" },
    },
    description:
      "Estudo científico desenvolvido com colegas da PUC Minas (projeto interdisciplinar do 6º período de Engenharia de Software) que analisou o perfil de contribuidores de código aberto no GitHub. Usando o paradigma Goal-Question-Metric, mineramos 1.000 repositórios entre as linguagens mais populares, totalizando 52.743 contribuidores ao longo de doze meses, para entender concentração geográfica, nível de experiência e taxa de aprovação de pull requests. O artigo foi eleito o melhor trabalho do período.",
    description_eng:
      "Scientific study developed with classmates from PUC Minas (an interdisciplinary project from the 6th period of the Software Engineering program) analyzing the profile of open-source contributors on GitHub. Using the Goal-Question-Metric paradigm, we mined 1,000 repositories across the most popular languages, covering 52,743 contributors over twelve months, to understand geographic concentration, experience level, and pull-request approval rates. The paper was recognized as the best of its period.",
    short_description: "Pesquisa Científica",
    short_description_eng: "Scientific Research",
    color: "bg-purple-600",
    technologies: ["GitHub API", "Data Mining", "GQM", "Empirical Software Engineering"],
  },
];
