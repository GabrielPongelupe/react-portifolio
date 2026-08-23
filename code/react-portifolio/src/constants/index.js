import caronaImage from "../assets/projects/caronaImage.png";
import ticketTradeImage from "../assets/projects/ticketTradeImage.png";
import dePinhoImage from "../assets/projects/dePinhoImage.png"
import portifolioImage from "../assets/projects/portifolioImage.png"
import ossContributorsImage from "../assets/projects/project-1.jpg"

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
  {
    title: "OSS Contributors Profile",
    link: "/blog/oss-contributors-profile",
    pdfUrl: "/oss-contributors-profile.pdf",
    image: ossContributorsImage,
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



export const CONTACT = {
  email: "gabrielpongelupee@gmail.com",
  linkedin: "https://www.linkedin.com/in/gabrielpongelupe/",
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

// Notas convertidas da escala IMDb (0-10) para 0-5. Alguns títulos ambíguos ("Vampiros", "Os Donos do Jogo")
// foram resolvidos com a melhor correspondência encontrada; "Mario 2" ainda não tem nota estável no IMDb.
export const MOVIES_SERIES = [
  {
    title: { br: "Sorria 2", eng: "Smile 2" },
    type: "movie",
    genre: "horror",
    rating: 3.6,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Smile_2_%282024%29_poster.jpg/250px-Smile_2_%282024%29_poster.jpg",
    description: {
      br: "Sequência de terror psicológico sobre uma pop star perseguida por visões macabras.",
      eng: "Psychological horror sequel about a pop star haunted by disturbing visions."
    }
  },
  {
    title: { br: "Carros", eng: "Cars" },
    type: "movie",
    genre: "animation",
    rating: 3.9,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Cars_2006.jpg/250px-Cars_2006.jpg",
    description: {
      br: "Um carro de corrida arrogante aprende sobre amizade numa cidadezinha da Rota 66.",
      eng: "A cocky race car learns about friendship in a small Route 66 town."
    }
  },
  {
    title: { br: "Homem-Aranha no Aranhaverso", eng: "Spider-Man: Into the Spider-Verse" },
    type: "movie",
    genre: "animation",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Spider-Man-_Across_the_Spider-Verse_poster.jpg/250px-Spider-Man-_Across_the_Spider-Verse_poster.jpg",
    description: {
      br: "Miles Morales viaja pelo multiverso e enfrenta uma sociedade secreta de Homens-Aranha.",
      eng: "Miles Morales travels the multiverse and clashes with a secret society of Spider-People."
    }
  },
  {
    title: { br: "Zootopia: Essa Cidade é o Bicho", eng: "Zootopia" },
    type: "movie",
    genre: "animation",
    rating: 4.25,
    image: "https://upload.wikimedia.org/wikipedia/en/9/96/Zootopia_%28movie_poster%29.jpg",
    description: {
      br: "Uma coelha policial e uma raposa vigarista investigam uma conspiração numa cidade de animais.",
      eng: "A rookie rabbit cop and a con-artist fox investigate a conspiracy in a city of animals."
    }
  },
  {
    title: { br: "Rastros de um Sequestro", eng: "Recall the Night" },
    type: "movie",
    genre: "thriller",
    rating: 3.95,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Recall_the_Night_%28%EA%B8%B0%EC%96%B5%EC%9D%98_%EB%B0%A4%29.jpg/250px-Recall_the_Night_%28%EA%B8%B0%EC%96%B5%EC%9D%98_%EB%B0%A4%29.jpg",
    description: {
      br: "Um jovem tenta desvendar a verdade após o sequestro e o retorno perturbador do irmão.",
      eng: "A young man tries to uncover the truth after his brother's kidnapping and unsettling return."
    }
  },
  {
    title: { br: "Todos Menos Você", eng: "Anyone but You" },
    type: "movie",
    genre: "romance",
    rating: 3.4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Anyone_but_You_%282023%29_official_poster.webp/250px-Anyone_but_You_%282023%29_official_poster.webp",
    description: {
      br: "Dois ex-affairs fingem namoro durante um casamento na Austrália.",
      eng: "Two exes pretend to date during a destination wedding in Australia."
    }
  },
  {
    title: { br: "Ponyo: Uma Amizade que Veio do Mar", eng: "Ponyo" },
    type: "movie",
    genre: "animation",
    rating: 4.05,
    image: "https://upload.wikimedia.org/wikipedia/en/5/51/Ponyo.png",
    description: {
      br: "Um peixinho mágico deseja se tornar humana após conhecer um menino na costa do Japão.",
      eng: "A magical goldfish longs to become human after meeting a boy on the Japanese coast."
    }
  },
  {
    title: { br: "Star Wars: Episódio I - A Ameaça Fantasma", eng: "Star Wars: Episode I - The Phantom Menace" },
    type: "movie",
    genre: "scifi",
    rating: 3.5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Star_Wars_Phantom_Menace_poster.jpg/250px-Star_Wars_Phantom_Menace_poster.jpg",
    description: {
      br: "Um jovem Anakin Skywalker é descoberto em Tatooine enquanto a República entra em crise.",
      eng: "A young Anakin Skywalker is discovered on Tatooine as the Republic slides into crisis."
    }
  },
  {
    title: { br: "Star Wars: Episódio II - Ataque dos Clones", eng: "Star Wars: Episode II - Attack of the Clones" },
    type: "movie",
    genre: "scifi",
    rating: 3.55,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg/250px-Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg",
    description: {
      br: "Anakin e Padmé se apaixonam enquanto a galáxia caminha para a guerra.",
      eng: "Anakin and Padmé fall in love as the galaxy marches toward war."
    }
  },
  {
    title: { br: "Star Wars: Episódio III - A Vingança dos Sith", eng: "Star Wars: Episode III - Revenge of the Sith" },
    type: "movie",
    genre: "scifi",
    rating: 5.0,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg/250px-Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg",
    description: {
      br: "Anakin Skywalker cede ao lado sombrio e se torna Darth Vader.",
      eng: "Anakin Skywalker succumbs to the dark side and becomes Darth Vader."
    }
  },
  {
    title: { br: "Star Wars: Episódio IV - Uma Nova Esperança", eng: "Star Wars: Episode IV - A New Hope" },
    type: "movie",
    genre: "scifi",
    rating: 4.55,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/StarWarsMoviePoster1977.jpg/250px-StarWarsMoviePoster1977.jpg",
    description: {
      br: "Luke Skywalker se junta à Rebelião para destruir a Estrela da Morte.",
      eng: "Luke Skywalker joins the Rebellion to destroy the Death Star."
    }
  },
  {
    title: { br: "Star Wars: Episódio V - O Império Contra-Ataca", eng: "Star Wars: Episode V - The Empire Strikes Back" },
    type: "movie",
    genre: "scifi",
    rating: 5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/The_Empire_Strikes_Back_%281980_film%29.jpg/250px-The_Empire_Strikes_Back_%281980_film%29.jpg",
    description: {
      br: "Luke treina com Yoda enquanto o Império persegue os rebeldes.",
      eng: "Luke trains with Yoda while the Empire hunts down the rebels."
    }
  },
  {
    title: { br: "Star Wars: Episódio VI - O Retorno de Jedi", eng: "Star Wars: Episode VI - Return of the Jedi" },
    type: "movie",
    genre: "scifi",
    rating: 4.4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/ReturnOfTheJediPoster1983.jpg/250px-ReturnOfTheJediPoster1983.jpg",
    description: {
      br: "A Aliança Rebelde parte para a batalha final contra o Império.",
      eng: "The Rebel Alliance heads into the final battle against the Empire."
    }
  },
  {
    title: { br: "Rogue One: Uma História Star Wars", eng: "Rogue One: A Star Wars Story" },
    type: "movie",
    genre: "scifi",
    rating: 4.15,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Rogue_One%2C_A_Star_Wars_Story_poster.png/250px-Rogue_One%2C_A_Star_Wars_Story_poster.png",
    description: {
      br: "Um grupo de rebeldes rouba os planos da Estrela da Morte.",
      eng: "A band of rebels steal the plans for the Death Star."
    }
  },
  {
    title: { br: "O Preço da Confissão", eng: "The Price of Confession" },
    type: "series",
    genre: "thriller",
    rating: 4.05,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/The_Price_of_Confession_poster.png/250px-The_Price_of_Confession_poster.png",
    description: {
      br: "Thriller policial sobre um crime cujas confissões escondem mais do que revelam.",
      eng: "Crime thriller where every confession hides more than it reveals."
    }
  },
  {
    title: { br: "Gente Grande", eng: "Grown Ups" },
    type: "movie",
    genre: "comedy",
    rating: 3.25,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fe/Grownupsmovie.jpg/250px-Grownupsmovie.jpg",
    description: {
      br: "Amigos de infância se reencontram para relembrar os tempos de escola.",
      eng: "Childhood friends reunite to relive their school days."
    }
  },
  {
    title: { br: "Se Beber, Não Case!", eng: "The Hangover" },
    type: "movie",
    genre: "comedy",
    rating: 4.1,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Hangoverposter09.jpg/250px-Hangoverposter09.jpg",
    description: {
      br: "Uma despedida de solteiro em Las Vegas dá terrivelmente errado.",
      eng: "A Vegas bachelor party goes horribly wrong."
    }
  },
  {
    title: { br: "Pretendente Surpresa", eng: "A Business Proposal" },
    type: "series",
    genre: "romance",
    rating: 4.3,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/19/A_Business_Proposal.jpg/250px-A_Business_Proposal.jpg",
    description: {
      br: "Uma funcionária vai a um encontro no lugar da amiga e descobre que o pretendente é seu chefe.",
      eng: "An employee goes on a blind date in her friend's place and discovers her date is her boss."
    }
  },
  {
    title: { br: "Dark", eng: "Dark" },
    type: "series",
    genre: "scifi",
    rating: 4.65,
    image: "https://upload.wikimedia.org/wikipedia/pt/thumb/f/f6/Dark_%28s%C3%A9rie%29.jpg/250px-Dark_%28s%C3%A9rie%29.jpg",
    description: {
      br: "Desaparecimentos numa cidade alemã revelam um mistério de viagem no tempo entre quatro famílias.",
      eng: "Disappearances in a German town unravel a time-travel mystery spanning four families."
    }
  },
  {
    title: { br: "One Piece (Live-Action)", eng: "One Piece (Live-Action)" },
    type: "series",
    genre: "adventure",
    rating: 4.4,
    image: "https://image.tmdb.org/t/p/w500/aesLt9fsKSA6KCgGxA60VVxjtLk.jpg",
    description: {
      br: "Monkey D. Luffy reúne sua tripulação em busca do maior tesouro dos mares.",
      eng: "Monkey D. Luffy gathers his crew in search of the greatest treasure on the seas."
    }
  },
  {
    title: { br: "Os Donos do Jogo", eng: "Os Donos do Jogo" },
    type: "series",
    genre: "crime",
    rating: 4.45,
    image: null,
    description: {
      br: "Drama sobre o submundo do jogo ilegal e do poder no Rio de Janeiro. Nota estimada — sem consolidação oficial no IMDb.",
      eng: "Drama about the underworld of illegal gambling and power in Rio de Janeiro. Estimated rating — no official IMDb consolidation yet."
    }
  },
  {
    title: { br: "Haikyu!!", eng: "Haikyu!!" },
    type: "series",
    genre: "sport",
    rating: 4.6,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Haiky%C5%AB_Volume_1.jpg/250px-Haiky%C5%AB_Volume_1.jpg",
    description: {
      br: "Um garoto baixinho sonha em se tornar um grande jogador de vôlei.",
      eng: "A short but determined boy dreams of becoming a great volleyball player."
    }
  },
  {
    title: { br: "It: A Coisa", eng: "It" },
    type: "movie",
    genre: "horror",
    rating: 3.9,
    image: "https://upload.wikimedia.org/wikipedia/en/5/5a/It_%282017%29_poster.jpg",
    description: {
      br: "Um grupo de crianças enfrenta uma entidade maligna que se disfarça de palhaço.",
      eng: "A group of kids confronts an evil entity that disguises itself as a clown."
    }
  },
  {
    title: { br: "Projeto Almanaque", eng: "Project Almanac" },
    type: "movie",
    genre: "scifi",
    rating: 3.45,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Project_Almanac_poster.jpg/250px-Project_Almanac_poster.jpg",
    description: {
      br: "Um grupo de adolescentes constrói uma máquina do tempo com consequências perigosas.",
      eng: "A group of teens builds a time machine with dangerous consequences."
    }
  },
  {
    title: { br: "O Senhor dos Anéis: A Sociedade do Anel", eng: "The Lord of the Rings: The Fellowship of the Ring" },
    type: "movie",
    genre: "fantasy",
    rating: 4.7,
    image: "https://upload.wikimedia.org/wikipedia/en/f/fb/Lord_Rings_Fellowship_Ring.jpg",
    description: {
      br: "Frodo parte numa jornada épica para destruir o Um Anel.",
      eng: "Frodo sets out on an epic quest to destroy the One Ring."
    }
  },
  {
    title: { br: "Devoradores de Estrela", eng: "Project Hail Mary" },
    type: "movie",
    genre: "scifi",
    rating: 4.4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Project_Hail_Mary_poster.jpg/250px-Project_Hail_Mary_poster.jpg",
    description: {
      br: "Um astronauta solitário acorda sem memória numa missão para salvar o Sol — e a humanidade.",
      eng: "A lone astronaut wakes with no memory on a mission to save the Sun — and humanity."
    }
  },
  {
    title: { br: "Parasita", eng: "Parasite" },
    type: "movie",
    genre: "thriller",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Parasite_%282019_film%29.png/250px-Parasite_%282019_film%29.png",
    description: {
      br: "Uma família pobre se infiltra na vida de uma família rica, com consequências imprevisíveis.",
      eng: "A poor family infiltrates the life of a wealthy one, with unpredictable consequences."
    }
  },
  {
    title: { br: "Brooklyn Nine-Nine", eng: "Brooklyn Nine-Nine" },
    type: "series",
    genre: "comedy",
    rating: 4.45,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Brooklyn_Nine-Nine_Season_1.jpg/250px-Brooklyn_Nine-Nine_Season_1.jpg",
    description: {
      br: "As trapalhadas de um grupo de detetives excêntricos numa delegacia do Brooklyn.",
      eng: "The antics of a squad of eccentric detectives at a Brooklyn police precinct."
    }
  },
  {
    title: { br: "The Walking Dead", eng: "The Walking Dead" },
    type: "series",
    genre: "horror",
    rating: 4.3,
    image: "https://upload.wikimedia.org/wikipedia/en/0/0e/TheWalkingDeadPoster.jpg",
    description: {
      br: "Sobreviventes lutam para se manter vivos num mundo dominado por mortos-vivos.",
      eng: "Survivors fight to stay alive in a world overrun by the undead."
    }
  },
  {
    title: { br: "Homem-Aranha", eng: "Spider-Man" },
    type: "movie",
    genre: "action",
    rating: 4.2,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Spider-Man_%282002_film%29_poster.jpg/250px-Spider-Man_%282002_film%29_poster.jpg",
    description: {
      br: "Peter Parker ganha poderes de aranha e enfrenta o Duende Verde em Nova York.",
      eng: "Peter Parker gains spider-powers and faces off against the Green Goblin in New York."
    }
  },
  {
    title: { br: "Homem-Aranha 2", eng: "Spider-Man 2" },
    type: "movie",
    genre: "action",
    rating: 5.0,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Spider-Man_2_USA_poster.jpg/250px-Spider-Man_2_USA_poster.jpg",
    description: {
      br: "Peter Parker enfrenta o Doutor Octopus enquanto tenta equilibrar sua vida dupla.",
      eng: "Peter Parker faces Doctor Octopus while struggling to balance his double life."
    }
  },
  {
    title: { br: "Adolescence", eng: "Adolescence" },
    type: "series",
    genre: "drama",
    rating: 4.3,
    image: "https://upload.wikimedia.org/wikipedia/en/5/5d/Adolescence_%28TV_series%29.jpg",
    description: {
      br: "Minissérie que investiga o que leva um adolescente a cometer um crime chocante.",
      eng: "A miniseries examining what drives a teenager to commit a shocking crime."
    }
  },
  {
    title: { br: "Batman: O Cavaleiro das Trevas", eng: "The Dark Knight" },
    type: "movie",
    genre: "action",
    rating: 5.0,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/The_Dark_Knight_%282008_film%29.jpg/250px-The_Dark_Knight_%282008_film%29.jpg",
    description: {
      br: "Batman enfrenta o Coringa numa batalha que testa seus limites morais.",
      eng: "Batman faces the Joker in a battle that tests his moral limits."
    }
  },
  {
    title: { br: "Batman: O Cavaleiro das Trevas Ressurge", eng: "The Dark Knight Rises" },
    type: "movie",
    genre: "action",
    rating: 4.45,
    image: "https://upload.wikimedia.org/wikipedia/en/8/83/Dark_knight_rises_poster.jpg",
    description: {
      br: "Batman retorna para enfrentar o mercenário Bane e salvar Gotham.",
      eng: "Batman returns to face the mercenary Bane and save Gotham."
    }
  },
  {
    title: { br: "O Senhor dos Anéis: As Duas Torres", eng: "The Lord of the Rings: The Two Towers" },
    type: "movie",
    genre: "fantasy",
    rating: 5.0,
    image: "https://upload.wikimedia.org/wikipedia/en/a/a1/Lord_Rings_Two_Towers.jpg",
    description: {
      br: "A Sociedade se divide enquanto a guerra contra Sauron se intensifica.",
      eng: "The Fellowship splits apart as the war against Sauron intensifies."
    }
  },
  {
    title: { br: "O Senhor dos Anéis: O Retorno do Rei", eng: "The Lord of the Rings: The Return of the King" },
    type: "movie",
    genre: "fantasy",
    rating: 4.75,
    image: "https://upload.wikimedia.org/wikipedia/en/4/48/Lord_Rings_Return_King.jpg",
    description: {
      br: "Frodo se aproxima da Montanha da Perdição enquanto a batalha final se aproxima.",
      eng: "Frodo nears Mount Doom as the final battle for Middle-earth begins."
    }
  },
  {
    title: { br: "Projeto X", eng: "Project X" },
    type: "movie",
    genre: "comedy",
    rating: 3.6,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Project_X_poster.png/250px-Project_X_poster.png",
    description: {
      br: "Uma festa de aniversário sai completamente do controle.",
      eng: "A birthday party spirals completely out of control."
    }
  },
  {
    title: { br: "Sociedade da Neve", eng: "Society of the Snow" },
    type: "movie",
    genre: "drama",
    rating: 4.15,
    image: "https://upload.wikimedia.org/wikipedia/en/7/76/Society_of_the_Snow_poster.jpg",
    description: {
      br: "Sobreviventes de um acidente aéreo nos Andes lutam para sobreviver ao extremo.",
      eng: "Survivors of a plane crash in the Andes fight to endure the extreme."
    }
  },
  {
    title: { br: "Corra!", eng: "Get Out" },
    type: "movie",
    genre: "horror",
    rating: 4.05,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Get_Out_poster.png/250px-Get_Out_poster.png",
    description: {
      br: "Um jovem descobre segredos perturbadores ao visitar a família da namorada.",
      eng: "A young man uncovers disturbing secrets while visiting his girlfriend's family."
    }
  },
  {
    title: { br: "Avatar", eng: "Avatar" },
    type: "movie",
    genre: "scifi",
    rating: 4.2,
    image: "https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg",
    description: {
      br: "Um ex-fuzileiro se envolve com os nativos de Pandora e questiona seu papel na guerra.",
      eng: "A former Marine bonds with Pandora's natives and questions his role in the war."
    }
  },
  {
    title: { br: "Irmãos de Guerra", eng: "Band of Brothers" },
    type: "series",
    genre: "war",
    rating: 4.95,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Band_of_Brothers_poster.jpg/250px-Band_of_Brothers_poster.jpg",
    description: {
      br: "A jornada de uma companhia americana através da Segunda Guerra Mundial.",
      eng: "The journey of an American company through World War II."
    }
  },
  {
    title: { br: "Tick, Tick... Boom!", eng: "tick, tick... BOOM!" },
    type: "movie",
    genre: "musical",
    rating: 3.9,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Tick_Tick_Boom_Movie_poster.jpg/250px-Tick_Tick_Boom_Movie_poster.jpg",
    description: {
      br: "Um compositor luta contra o tempo para realizar seu sonho antes dos 30 anos.",
      eng: "A composer races against time to achieve his dream before turning 30."
    }
  },
  {
    title: { br: "Até o Último Homem", eng: "Hacksaw Ridge" },
    type: "movie",
    genre: "war",
    rating: 4.3,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Hacksaw_Ridge_poster.png/250px-Hacksaw_Ridge_poster.png",
    description: {
      br: "Um médico do exército se recusa a portar armas e salva vidas em Okinawa.",
      eng: "An army medic refuses to carry a weapon and saves lives at Okinawa."
    }
  },
  {
    title: { br: "Resgate do Soldado Ryan", eng: "Saving Private Ryan" },
    type: "movie",
    genre: "war",
    rating: 4.55,
    image: "https://upload.wikimedia.org/wikipedia/en/a/ac/Saving_Private_Ryan_poster.jpg",
    description: {
      br: "Um pelotão arrisca tudo para resgatar um soldado na Segunda Guerra.",
      eng: "A squad risks everything to rescue one soldier during World War II."
    }
  },
  {
    title: { br: "De Volta para o Futuro", eng: "Back to the Future" },
    type: "movie",
    genre: "scifi",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Back_to_the_Future.jpg/250px-Back_to_the_Future.jpg",
    description: {
      br: "Um adolescente viaja no tempo e precisa garantir que seus pais se apaixonem.",
      eng: "A teenager travels back in time and must make sure his parents fall in love."
    }
  },
  {
    title: { br: "De Volta para o Futuro II", eng: "Back to the Future Part II" },
    type: "movie",
    genre: "scifi",
    rating: 4.15,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Back_to_the_Future_Part_II.jpg/250px-Back_to_the_Future_Part_II.jpg",
    description: {
      br: "Marty viaja ao futuro e acaba alterando o curso da história.",
      eng: "Marty travels to the future and ends up altering the course of history."
    }
  },
  {
    title: { br: "De Volta para o Futuro III", eng: "Back to the Future Part III" },
    type: "movie",
    genre: "scifi",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Back_to_the_Future_Part_III.jpg/250px-Back_to_the_Future_Part_III.jpg",
    description: {
      br: "Marty viaja ao Velho Oeste para resgatar Doc Brown.",
      eng: "Marty travels to the Old West to rescue Doc Brown."
    }
  },
  {
    title: { br: "O Rei do Show", eng: "The Greatest Showman" },
    type: "movie",
    genre: "musical",
    rating: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/1/10/The_Greatest_Showman_poster.png",
    description: {
      br: "A ascensão de P.T. Barnum e a criação de um espetáculo circense inesquecível.",
      eng: "The rise of P.T. Barnum and the creation of an unforgettable circus spectacle."
    }
  },
  {
    title: { br: "Prison Break", eng: "Prison Break" },
    type: "series",
    genre: "crime",
    rating: 4.4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Prison_Break_season_1_dvd.jpg/250px-Prison_Break_season_1_dvd.jpg",
    description: {
      br: "Um engenheiro se deixa prender de propósito para ajudar o irmão a fugir.",
      eng: "An engineer gets himself imprisoned on purpose to help his brother escape."
    }
  },
  {
    title: { br: "Harry Potter e as Relíquias da Morte – Parte 2", eng: "Harry Potter and the Deathly Hallows – Part 2" },
    type: "movie",
    genre: "fantasy",
    rating: 4.3,
    image: "https://upload.wikimedia.org/wikipedia/en/d/df/Harry_Potter_and_the_Deathly_Hallows_%E2%80%93_Part_2.jpg",
    description: {
      br: "O confronto final entre Harry Potter e Lord Voldemort em Hogwarts.",
      eng: "The final showdown between Harry Potter and Lord Voldemort at Hogwarts."
    }
  },
  {
    title: { br: "Harry Potter e o Prisioneiro de Azkaban", eng: "Harry Potter and the Prisoner of Azkaban" },
    type: "movie",
    genre: "fantasy",
    rating: 4.2,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Harry_Potter_and_the_Prisoner_of_Azkaban_film_poster.jpg/250px-Harry_Potter_and_the_Prisoner_of_Azkaban_film_poster.jpg",
    description: {
      br: "Harry descobre segredos sobre seu passado enquanto um fugitivo perigoso se aproxima.",
      eng: "Harry uncovers secrets about his past as a dangerous fugitive closes in."
    }
  },
  {
    title: { br: "Up: Altas Aventuras", eng: "Up" },
    type: "movie",
    genre: "animation",
    rating: 4.4,
    image: "https://upload.wikimedia.org/wikipedia/en/0/05/Up_%282009_film%29.jpg",
    description: {
      br: "Um viúvo amarra milhares de balões à sua casa para realizar um sonho antigo.",
      eng: "A widower ties thousands of balloons to his house to fulfill an old dream."
    }
  },
  {
    title: { br: "Invencível", eng: "Unbroken" },
    type: "movie",
    genre: "war",
    rating: 3.85,
    image: "https://upload.wikimedia.org/wikipedia/en/7/76/Unbroken_poster.jpg",
    description: {
      br: "Um atleta olímpico luta pela sobrevivência após ser capturado na Segunda Guerra.",
      eng: "An Olympic athlete fights for survival after being captured during World War II."
    }
  },
  {
    title: { br: "1917", eng: "1917" },
    type: "movie",
    genre: "war",
    rating: 4.35,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fe/1917_%282019%29_Film_Poster.jpeg/250px-1917_%282019%29_Film_Poster.jpeg",
    description: {
      br: "Dois soldados britânicos correm contra o tempo para entregar uma mensagem que pode salvar vidas.",
      eng: "Two British soldiers race against time to deliver a message that could save lives."
    }
  },
  {
    title: { br: "Forrest Gump: O Contador de Histórias", eng: "Forrest Gump" },
    type: "movie",
    genre: "drama",
    rating: 4.65,
    image: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
    description: {
      br: "Um homem de bom coração testemunha e participa dos grandes eventos do século XX.",
      eng: "A kind-hearted man witnesses and takes part in major events of the 20th century."
    }
  },
  {
    title: { br: "Fratura", eng: "Fractured" },
    type: "movie",
    genre: "thriller",
    rating: 3.5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Fracture_poster.jpeg/250px-Fracture_poster.jpeg",
    description: {
      br: "Um pai luta para provar que sua família desapareceu dentro de um hospital.",
      eng: "A father fights to prove his family vanished inside a hospital."
    }
  },
  {
    title: { br: "Deadpool", eng: "Deadpool" },
    type: "movie",
    genre: "action",
    rating: 4.25,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Deadpool_%282016_poster%29.png/250px-Deadpool_%282016_poster%29.png",
    description: {
      br: "Um mercenário desfigurado busca vingança com humor ácido e violência gratuita.",
      eng: "A disfigured mercenary seeks revenge with dark humor and gratuitous violence."
    }
  },
  {
    title: { br: "O Pianista", eng: "The Pianist" },
    type: "movie",
    genre: "war",
    rating: 4.5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/The_Pianist_movie.jpg/250px-The_Pianist_movie.jpg",
    description: {
      br: "Um pianista judeu luta para sobreviver ao Holocausto em Varsóvia.",
      eng: "A Jewish pianist struggles to survive the Holocaust in Warsaw."
    }
  },
  {
    title: { br: "O Menino do Pijama Listrado", eng: "The Boy in the Striped Pyjamas" },
    type: "movie",
    genre: "war",
    rating: 4.15,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Theboyposter.jpg/250px-Theboyposter.jpg",
    description: {
      br: "Um garoto alemão cria uma amizade proibida com um menino do outro lado da cerca.",
      eng: "A German boy forms a forbidden friendship with a boy on the other side of the fence."
    }
  },
  {
    title: { br: "A Lista de Schindler", eng: "Schindler's List" },
    type: "movie",
    genre: "war",
    rating: 4.75,
    image: "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg",
    description: {
      br: "Um empresário alemão arrisca tudo para salvar centenas de judeus do Holocausto.",
      eng: "A German businessman risks everything to save hundreds of Jews during the Holocaust."
    }
  },
  {
    title: { br: "Era Uma Vez em Hollywood", eng: "Once Upon a Time in Hollywood" },
    type: "movie",
    genre: "comedy",
    rating: 4.05,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Once_Upon_a_Time_in_Hollywood_poster.png/250px-Once_Upon_a_Time_in_Hollywood_poster.png",
    description: {
      br: "Um ator em declínio e seu dublê vivem a Hollywood de 1969.",
      eng: "A fading actor and his stunt double navigate 1969 Hollywood."
    }
  },
  {
    title: { br: "Free Guy: Assumindo o Controle", eng: "Free Guy" },
    type: "movie",
    genre: "action",
    rating: 3.8,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Free_Guy_2021_Poster.jpg/250px-Free_Guy_2021_Poster.jpg",
    description: {
      br: "Um NPC de videogame descobre que está vivo e decide se tornar o herói de sua própria história.",
      eng: "A video game NPC discovers he's alive and decides to become the hero of his own story."
    }
  },
  {
    title: { br: "Mr. Bean", eng: "Mr. Bean" },
    type: "series",
    genre: "comedy",
    rating: 4.55,
    image: "https://image.tmdb.org/t/p/w500/omEvnJQHpk8Rc6xMkm8z0wblEyL.jpg",
    description: {
      br: "As trapalhadas mudas e hilárias de um dos personagens mais icônicos da comédia britânica.",
      eng: "The silent, hilarious antics of one of British comedy's most iconic characters."
    }
  },
  {
    title: { br: "Curtindo a Vida Adoidado", eng: "Ferris Bueller's Day Off" },
    type: "movie",
    genre: "comedy",
    rating: 4.15,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Ferris_Bueller%27s_Day_Off.jpg/250px-Ferris_Bueller%27s_Day_Off.jpg",
    description: {
      br: "Um adolescente finge estar doente para viver o melhor dia de matar aula da sua vida.",
      eng: "A teenager fakes illness for the ultimate day of skipping school."
    }
  },
  {
    title: { br: "Show de Truman", eng: "The Truman Show" },
    type: "movie",
    genre: "drama",
    rating: 4.35,
    image: "https://upload.wikimedia.org/wikipedia/en/c/cd/Trumanshow.jpg",
    description: {
      br: "Um homem descobre que sua vida inteira é um reality show transmitido ao mundo todo.",
      eng: "A man discovers his entire life has been a reality show broadcast to the world."
    }
  },
  {
    title: { br: "Atypical", eng: "Atypical" },
    type: "series",
    genre: "drama",
    rating: 4.25,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Atypical_p%C3%B3ster.jpg/250px-Atypical_p%C3%B3ster.jpg",
    description: {
      br: "Um adolescente no espectro autista busca mais independência e seu primeiro namoro.",
      eng: "A teenager on the autism spectrum seeks more independence and his first girlfriend."
    }
  },
  {
    title: { br: "Jojo Rabbit", eng: "Jojo Rabbit" },
    type: "movie",
    genre: "comedy",
    rating: 4.2,
    image: "https://upload.wikimedia.org/wikipedia/en/a/a2/Jojo_Rabbit_%282019%29_poster.jpg",
    description: {
      br: "Um garoto da Juventude Hitlerista muda de ideia ao descobrir que a mãe esconde uma menina judia em casa.",
      eng: "A Hitler Youth boy has a change of heart after discovering his mother is hiding a Jewish girl at home."
    }
  },
  {
    title: { br: "Lost", eng: "Lost" },
    type: "series",
    genre: "mystery",
    rating: 5.0,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Lost_S1_DVD.jpg/250px-Lost_S1_DVD.jpg",
    description: {
      br: "Sobreviventes de um acidente aéreo desvendam os mistérios de uma ilha misteriosa.",
      eng: "Plane crash survivors unravel the mysteries of a strange island."
    }
  },
  {
    title: { br: "Cidade de Deus", eng: "City of God" },
    type: "movie",
    genre: "crime",
    rating: 4.3,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/10/CidadedeDeus.jpg/250px-CidadedeDeus.jpg",
    description: {
      br: "Um jovem fotógrafo narra a ascensão do crime organizado em uma favela do Rio de Janeiro.",
      eng: "A young photographer narrates the rise of organized crime in a Rio de Janeiro favela."
    }
  },
  {
    title: { br: "A Vida é Bela", eng: "Life Is Beautiful" },
    type: "movie",
    genre: "drama",
    rating: 4.3,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Vitaebella.jpg/250px-Vitaebella.jpg",
    description: {
      br: "Um pai usa imaginação e humor para proteger o filho dos horrores de um campo de concentração.",
      eng: "A father uses imagination and humor to shield his son from the horrors of a concentration camp."
    }
  },
  {
    title: { br: "O Agente Secreto", eng: "The Secret Agent" },
    type: "movie",
    genre: "drama",
    rating: 3.65,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/57/The_Secret_Agent.png/250px-The_Secret_Agent.png",
    description: {
      br: "Um professor foragido tenta recomeçar a vida em Recife durante a ditadura militar brasileira de 1977.",
      eng: "A man on the run tries to rebuild his life in Recife during Brazil's 1977 military dictatorship."
    }
  },
  {
    title: { br: "WALL-E", eng: "WALL-E" },
    type: "movie",
    genre: "animation",
    rating: 4.2,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/WALL-E_poster.jpg/250px-WALL-E_poster.jpg",
    description: {
      br: "Um robô solitário encarregado de limpar a Terra encontra o amor entre as ruínas da humanidade.",
      eng: "A lonely robot tasked with cleaning up Earth finds love amid the ruins of humanity."
    }
  },
  {
    title: { br: "Indiana Jones e os Caçadores da Arca Perdida", eng: "Indiana Jones and the Raiders of the Lost Ark" },
    type: "movie",
    genre: "adventure",
    rating: 4.2,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Raiders_of_the_Lost_Ark.jpg/250px-Raiders_of_the_Lost_Ark.jpg",
    description: {
      br: "O arqueólogo Indiana Jones corre contra os nazistas para encontrar a lendária Arca da Aliança.",
      eng: "Archaeologist Indiana Jones races against the Nazis to find the legendary Ark of the Covenant."
    }
  },
  {
    title: { br: "Indiana Jones e o Templo da Perdição", eng: "Indiana Jones and the Temple of Doom" },
    type: "movie",
    genre: "adventure",
    rating: 3.75,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Indiana_Jones_and_the_Temple_of_Doom_PosterB.jpg/250px-Indiana_Jones_and_the_Temple_of_Doom_PosterB.jpg",
    description: {
      br: "Indiana Jones enfrenta um culto sinistro para resgatar crianças escravizadas na Índia colonial.",
      eng: "Indiana Jones confronts a sinister cult to rescue enslaved children in colonial India."
    }
  },
  {
    title: { br: "Indiana Jones e a Última Cruzada", eng: "Indiana Jones and the Last Crusade" },
    type: "movie",
    genre: "adventure",
    rating: 4.1,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Indiana_Jones_and_the_Last_Crusade.png/250px-Indiana_Jones_and_the_Last_Crusade.png",
    description: {
      br: "Indiana Jones e seu pai se unem para encontrar o Santo Graal antes dos nazistas.",
      eng: "Indiana Jones and his father team up to find the Holy Grail before the Nazis do."
    }
  },
  {
    title: { br: "Indiana Jones e o Reino da Caveira de Cristal", eng: "Indiana Jones and the Kingdom of the Crystal Skull" },
    type: "movie",
    genre: "adventure",
    rating: 3.05,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Kingdomofthecrystalskull.jpg/250px-Kingdomofthecrystalskull.jpg",
    description: {
      br: "Já na Guerra Fria, Indiana Jones busca uma caveira de cristal alienígena disputada pelos soviéticos.",
      eng: "During the Cold War, Indiana Jones seeks an alien crystal skull sought by the Soviets."
    }
  },
  {
    title: { br: "Indiana Jones e a Relíquia do Destino", eng: "Indiana Jones and the Dial of Destiny" },
    type: "movie",
    genre: "adventure",
    rating: 3.45,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Indiana_Jones_and_the_Dial_of_Destiny_theatrical_poster.jpg/250px-Indiana_Jones_and_the_Dial_of_Destiny_theatrical_poster.jpg",
    description: {
      br: "Em sua última aventura, um Indiana Jones já idoso persegue um dispositivo mítico capaz de alterar o tempo.",
      eng: "In his final adventure, an aging Indiana Jones chases a mythical device said to alter time."
    }
  },
  {
    title: { br: "Piratas do Caribe: A Maldição do Pérola Negra", eng: "Pirates of the Caribbean: The Curse of the Black Pearl" },
    type: "movie",
    genre: "fantasy",
    rating: 4.05,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Pirates_of_the_Caribbean_-_The_Curse_of_the_Black_Pearl.png/250px-Pirates_of_the_Caribbean_-_The_Curse_of_the_Black_Pearl.png",
    description: {
      br: "O excêntrico pirata Jack Sparrow se une a um ferreiro para resgatar sua amada de piratas amaldiçoados.",
      eng: "Eccentric pirate Jack Sparrow joins a blacksmith to rescue his beloved from a crew of cursed pirates."
    }
  },
  {
    title: { br: "Piratas do Caribe: O Baú da Morte", eng: "Pirates of the Caribbean: Dead Man's Chest" },
    type: "movie",
    genre: "fantasy",
    rating: 3.7,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Pirates_of_the_caribbean_2_poster_b.jpg/250px-Pirates_of_the_caribbean_2_poster_b.jpg",
    description: {
      br: "Jack Sparrow precisa pagar uma dívida com o temido Davy Jones, capitão do lendário Holandês Voador.",
      eng: "Jack Sparrow must settle a debt with the dreaded Davy Jones, captain of the legendary Flying Dutchman."
    }
  },
  {
    title: { br: "Piratas do Caribe: No Fim do Mundo", eng: "Pirates of the Caribbean: At World's End" },
    type: "movie",
    genre: "fantasy",
    rating: 3.55,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Pirates_AWE_Poster.jpg/250px-Pirates_AWE_Poster.jpg",
    description: {
      br: "Piratas de todo o mundo se unem contra a poderosa Companhia das Índias Orientais.",
      eng: "Pirates from across the world unite against the powerful East India Trading Company."
    }
  },
  {
    title: { br: "Piratas do Caribe: Navegando em Águas Misteriosas", eng: "Pirates of the Caribbean: On Stranger Tides" },
    type: "movie",
    genre: "fantasy",
    rating: 3.3,
    image: "https://upload.wikimedia.org/wikipedia/en/5/5e/Pirates_of_the_Caribbean_-_On_Stranger_Tides.png",
    description: {
      br: "Jack Sparrow se envolve numa corrida rumo à Fonte da Juventude, cercado por sereias e piratas rivais.",
      eng: "Jack Sparrow gets caught up in a race to the Fountain of Youth, surrounded by mermaids and rival pirates."
    }
  },
  {
    title: { br: "Piratas do Caribe: A Vingança de Salazar", eng: "Pirates of the Caribbean: Dead Men Tell No Tales" },
    type: "movie",
    genre: "fantasy",
    rating: 3.25,
    image: "https://upload.wikimedia.org/wikipedia/en/2/21/Pirates_of_the_Caribbean,_Dead_Men_Tell_No_Tales.jpg",
    description: {
      br: "Jack Sparrow é perseguido por fantasmas espanhóis enquanto busca o lendário Tridente de Poseidon.",
      eng: "Jack Sparrow is hunted by ghostly Spanish sailors while searching for the legendary Trident of Poseidon."
    }
  },
  {
    title: { br: "Star Wars: O Mandaloriano e Grogu", eng: "Star Wars: The Mandalorian and Grogu" },
    type: "movie",
    genre: "scifi",
    rating: 3.4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/The_Mandalorian_and_Grogu_poster.jpg/250px-The_Mandalorian_and_Grogu_poster.jpg",
    description: {
      br: "Din Djarin e Grogu embarcam em sua primeira grande aventura juntos na telona.",
      eng: "Din Djarin and Grogu embark on their first big-screen adventure together."
    }
  },
  {
    title: { br: "Star Wars: The Mandalorian", eng: "Star Wars: The Mandalorian" },
    type: "series",
    genre: "scifi",
    rating: 4.3,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/The_Mandalorian_season_1_poster.jpg/250px-The_Mandalorian_season_1_poster.jpg",
    description: {
      br: "Um caçador de recompensas solitário protege uma misteriosa criança conhecida como 'a Criança' pela galáxia.",
      eng: "A lone bounty hunter protects a mysterious child known as 'the Child' across the galaxy."
    }
  },
  {
    title: { br: "Andor", eng: "Andor" },
    type: "series",
    genre: "scifi",
    rating: 4.3,
    image: "https://image.tmdb.org/t/p/w500/yX8c3bXKzAquEKQ75eQslnodskK.jpg",
    description: {
      br: "Cassian Andor se transforma de contrabandista comum em revolucionário na luta contra o Império.",
      eng: "Cassian Andor transforms from a small-time smuggler into a revolutionary fighting the Empire."
    }
  },
  {
    title: { br: "Star Wars: A Guerra dos Clones", eng: "Star Wars: The Clone Wars" },
    type: "series",
    genre: "scifi",
    rating: 4.25,
    image: "https://upload.wikimedia.org/wikipedia/en/7/72/Star_wars_the_clone_wars.jpg",
    description: {
      br: "Jedi lideram exércitos clones em batalhas épicas durante as Guerras Clônicas.",
      eng: "Jedi lead clone armies through epic battles during the Clone Wars."
    }
  },
  {
    title: { br: "Star Wars Rebels", eng: "Star Wars Rebels" },
    type: "series",
    genre: "scifi",
    rating: 4.05,
    image: "https://image.tmdb.org/t/p/w500/eLrScs6Bs26JMcS8hiZhf7YRROr.jpg",
    description: {
      br: "Uma pequena tripulação de rebeldes acende as primeiras chamas da resistência contra o Império.",
      eng: "A small crew of rebels sparks the first flames of resistance against the Empire."
    }
  },
  {
    title: { br: "Gênio Indomável", eng: "Good Will Hunting" },
    type: "movie",
    genre: "drama",
    rating: 4.15,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Good_Will_Hunting.png/250px-Good_Will_Hunting.png",
    description: {
      br: "Um jovem gênio autodidata da faxina em Harvard precisa enfrentar seus traumas para não desperdiçar seu talento.",
      eng: "A janitor and self-taught genius at Harvard must confront his trauma before he wastes his gift."
    }
  },
  {
    title: { br: "Your Name", eng: "Your Name" },
    type: "movie",
    genre: "animation",
    rating: 4.2,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Your_Name_poster.png/250px-Your_Name_poster.png",
    description: {
      br: "Dois adolescentes desconhecidos trocam de corpo misteriosamente e tentam se encontrar através do tempo.",
      eng: "Two teenage strangers mysteriously swap bodies and race to find each other across time."
    }
  },
  {
    title: { br: "Toy Story", eng: "Toy Story" },
    type: "movie",
    genre: "animation",
    rating: 4.15,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Toy_Story.jpg/250px-Toy_Story.jpg",
    description: {
      br: "Um cowboy de brinquedo enfrenta o ciúme quando um novo boneco espacial rouba a atenção de seu dono.",
      eng: "A cowboy toy grapples with jealousy when a flashy new spaceman steals his owner's affection."
    }
  },
  {
    title: { br: "Coringa", eng: "Joker" },
    type: "movie",
    genre: "drama",
    rating: 4.15,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Joker_%282019_film%29_poster.jpg/250px-Joker_%282019_film%29_poster.jpg",
    description: {
      br: "Um comediante fracassado e marginalizado por Gotham mergulha na loucura e no caos.",
      eng: "A failed comedian rejected by Gotham City spirals into madness and chaos."
    }
  },
  {
    title: { br: "Naruto", eng: "Naruto" },
    type: "series",
    genre: "animation",
    rating: 4.2,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/NarutoCoverTankobon1.jpg/250px-NarutoCoverTankobon1.jpg",
    description: {
      br: "Um jovem ninja rejeitado por sua vila luta para se tornar o líder mais forte e ser reconhecido por todos.",
      eng: "A young outcast ninja fights to become his village's strongest leader and earn everyone's recognition."
    }
  },
  {
    title: { br: "One Piece (Anime)", eng: "One Piece (Anime)" },
    type: "series",
    genre: "animation",
    rating: 4.5,
    image: "https://image.tmdb.org/t/p/w500/9ltisibeD4gzqjM1AzmQwCdyirQ.jpg",
    description: {
      br: "Monkey D. Luffy e sua tripulação pirata navegam pelos mares em busca do lendário tesouro One Piece.",
      eng: "Monkey D. Luffy and his pirate crew sail the seas in search of the legendary One Piece treasure."
    }
  },
  {
    title: { br: "Duro de Matar", eng: "Die Hard" },
    type: "movie",
    genre: "action",
    rating: 4.1,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Die_Hard_%281988_film%29_poster.jpg/250px-Die_Hard_%281988_film%29_poster.jpg",
    description: {
      br: "Um policial de Nova York fica preso sozinho num arranha-céu tomado por terroristas na véspera de Natal.",
      eng: "A New York cop is trapped alone in a skyscraper seized by terrorists on Christmas Eve."
    }
  },
  {
    title: { br: "O Lobo de Wall Street", eng: "The Wolf of Wall Street" },
    type: "movie",
    genre: "drama",
    rating: 4.1,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/The_Wolf_of_Wall_Street_%282013%29.png/250px-The_Wolf_of_Wall_Street_%282013%29.png",
    description: {
      br: "A ascensão e queda de um corretor inescrupuloso que construiu um império à base de fraude e excessos.",
      eng: "The rise and fall of an unscrupulous stockbroker who built an empire on fraud and excess."
    }
  },
  {
    title: { br: "Ilha do Medo", eng: "Shutter Island" },
    type: "movie",
    genre: "thriller",
    rating: 4.1,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Shutterislandposter.jpg/250px-Shutterislandposter.jpg",
    description: {
      br: "Um investigador federal explora um hospital psiquiátrico isolado e começa a duvidar da própria sanidade.",
      eng: "A federal marshal investigates an isolated psychiatric hospital and starts to doubt his own sanity."
    }
  },
  {
    title: { br: "Jurassic Park", eng: "Jurassic Park" },
    type: "movie",
    genre: "adventure",
    rating: 4.1,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Jurassic_Park_poster.jpg/250px-Jurassic_Park_poster.jpg",
    description: {
      br: "Cientistas e visitantes lutam pela sobrevivência quando dinossauros clonados escapam do controle num parque.",
      eng: "Scientists and visitors fight for survival when cloned dinosaurs break loose at a theme park."
    }
  },
  {
    title: { br: "Prenda-me se for Capaz", eng: "Catch Me If You Can" },
    type: "movie",
    genre: "crime",
    rating: 4.1,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Catch_Me_If_You_Can_2002_movie.jpg/250px-Catch_Me_If_You_Can_2002_movie.jpg",
    description: {
      br: "Um jovem falsificador brilhante finge diversas identidades enquanto é perseguido por um agente do FBI.",
      eng: "A brilliant young con artist forges multiple identities while pursued by a relentless FBI agent."
    }
  },
  {
    title: { br: "Sociedade dos Poetas Mortos", eng: "Dead Poets Society" },
    type: "movie",
    genre: "drama",
    rating: 4.05,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Dead_poets_society.png/250px-Dead_poets_society.png",
    description: {
      br: "Um professor não convencional inspira seus alunos internos a aproveitar a vida através da poesia.",
      eng: "An unconventional teacher inspires his boarding-school students to seize the day through poetry."
    }
  },
  {
    title: { br: "Como Treinar seu Dragão", eng: "How to Train Your Dragon" },
    type: "movie",
    genre: "animation",
    rating: 4.05,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/How_to_Train_Your_Dragon_Poster.jpg/250px-How_to_Train_Your_Dragon_Poster.jpg",
    description: {
      br: "Um jovem viking forma um laço improvável com um dragão ferido, desafiando as tradições de seu povo.",
      eng: "A young Viking forms an unlikely bond with an injured dragon, defying his people's traditions."
    }
  },
  {
    title: { br: "Tubarão", eng: "Jaws" },
    type: "movie",
    genre: "thriller",
    rating: 4.05,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Jaws_movie_poster.jpg/250px-Jaws_movie_poster.jpg",
    description: {
      br: "Um xerife de cidade litorânea caça um tubarão branco gigante que aterroriza banhistas.",
      eng: "A small-town sheriff hunts a massive great white shark terrorizing beachgoers."
    }
  },
  {
    title: { br: "Shrek", eng: "Shrek" },
    type: "movie",
    genre: "animation",
    rating: 3.95,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Shrek_%282001_animated_feature_film%29.jpg/250px-Shrek_%282001_animated_feature_film%29.jpg",
    description: {
      br: "Um ogro rabugento parte numa jornada para resgatar uma princesa e recuperar seu pântano.",
      eng: "A grumpy ogre sets off on a quest to rescue a princess and reclaim his swamp."
    }
  },
  {
    title: { br: "Shrek 2", eng: "Shrek 2" },
    type: "movie",
    genre: "animation",
    rating: 3.7,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Shrek_2_poster.jpg/250px-Shrek_2_poster.jpg",
    description: {
      br: "Shrek e Fiona visitam o reino dela e enfrentam um sogro que trama contra o ogro.",
      eng: "Shrek and Fiona visit her kingdom, where a scheming father-in-law plots against the ogre."
    }
  },
  {
    title: { br: "Shrek Terceiro", eng: "Shrek the Third" },
    type: "movie",
    genre: "animation",
    rating: 3.05,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Shrek_the_Third_%282007_animated_feature_film%29.jpg/250px-Shrek_the_Third_%282007_animated_feature_film%29.jpg",
    description: {
      br: "Relutante herdeiro do trono, Shrek busca outro sucessor enquanto o Príncipe Encantado ataca.",
      eng: "Reluctant heir to the throne, Shrek seeks another successor while Prince Charming stages a coup."
    }
  },
  {
    title: { br: "Shrek Para Sempre", eng: "Shrek Forever After" },
    type: "movie",
    genre: "animation",
    rating: 3.15,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Shrek_Forever_After_%282010_animated_feature_film%29.jpg/250px-Shrek_Forever_After_%282010_animated_feature_film%29.jpg",
    description: {
      br: "Um trato com Rumpelstiltskin joga Shrek numa realidade alternativa onde nunca existiu.",
      eng: "A deal with Rumpelstiltskin sends Shrek into an alternate reality where he was never born."
    }
  },
  {
    title: { br: "Rocky", eng: "Rocky" },
    type: "movie",
    genre: "sport",
    rating: 4.05,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Rocky_poster.jpg/250px-Rocky_poster.jpg",
    description: {
      br: "Um boxeador desconhecido de Filadélfia ganha a chance única de enfrentar o campeão mundial.",
      eng: "An unknown Philadelphia boxer gets a once-in-a-lifetime shot at the heavyweight champion."
    }
  },
  {
    title: { br: "O Exterminador do Futuro", eng: "The Terminator" },
    type: "movie",
    genre: "scifi",
    rating: 4.05,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/The_Terminator.png/250px-The_Terminator.png",
    description: {
      br: "Um cyborg assassino vem do futuro para matar a mulher cujo filho salvará a humanidade.",
      eng: "A killer cyborg is sent from the future to kill the woman whose son will save humanity."
    }
  },
  {
    title: { br: "Gigantes de Aço", eng: "Real Steel" },
    type: "movie",
    genre: "sport",
    rating: 3.55,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Real_Steel_Poster.jpg/250px-Real_Steel_Poster.jpg",
    description: {
      br: "Um ex-boxeador e seu filho treinam um robô sucateado para vencer no ringue do futuro.",
      eng: "A washed-up boxer and his son train a scrapped robot to win in the ring of the future."
    }
  },
  {
    title: { br: "Modern Family", eng: "Modern Family" },
    type: "series",
    genre: "comedy",
    rating: 4.25,
    image: "https://image.tmdb.org/t/p/w500/gGOZeGx3ggP5O9qvswRPN7PRVWn.jpg",
    description: {
      br: "Um mockumentário sobre três famílias distintas e interligadas lidando com o dia a dia.",
      eng: "A mockumentary following three distinct, interconnected families navigating everyday life."
    }
  },
  {
    title: { br: "Cosmos: Uma Odisseia no Espaço-Tempo", eng: "Cosmos: A Spacetime Odyssey" },
    type: "series",
    genre: "documentary",
    rating: 4.6,
    image: "https://image.tmdb.org/t/p/w500/47f0rqHHwWVJnEHL1JOR8SHznBZ.jpg",
    description: {
      br: "Neil deGrasse Tyson guia uma jornada pelo universo, da origem da vida aos confins do cosmos.",
      eng: "Neil deGrasse Tyson guides a journey through the universe, from life's origins to the cosmos' edge."
    }
  },
  {
    title: { br: "Rick and Morty", eng: "Rick and Morty" },
    type: "series",
    genre: "comedy",
    rating: 4.5,
    image: "https://image.tmdb.org/t/p/w500/5qfd0e2uMbVInX3YdeFbDsfxi1t.jpg",
    description: {
      br: "Um cientista genial e cínico arrasta seu neto ansioso por aventuras interdimensionais caóticas.",
      eng: "A cynical genius scientist drags his anxious grandson through chaotic interdimensional adventures."
    }
  },
  {
    title: { br: "Vinland Saga", eng: "Vinland Saga" },
    type: "series",
    genre: "action",
    rating: 5,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Vinland_Saga_key_visual.png/250px-Vinland_Saga_key_visual.png",
    description: {
      br: "Um jovem viking busca vingança contra o assassino de seu pai em meio a guerras brutais.",
      eng: "A young Viking seeks revenge against his father's killer amid brutal wars and raids."
    }
  },
  {
    title: { br: "Os Simpsons", eng: "The Simpsons" },
    type: "series",
    genre: "comedy",
    rating: 4.3,
    image: "https://image.tmdb.org/t/p/w500/1jGPgDDcmg3Xgs3WO8sfYfbnFoA.jpg",
    description: {
      br: "O cotidiano hilário e satírico da família amarela mais famosa de Springfield.",
      eng: "The hilarious, satirical everyday life of Springfield's most famous yellow family."
    }
  },
  {
    title: { br: "Hora de Aventura", eng: "Adventure Time" },
    type: "series",
    genre: "animation",
    rating: 5.0,
    image: "https://image.tmdb.org/t/p/w500/2EMpiF1GireQHs3f9JKCFoKElju.jpg",
    description: {
      br: "Finn, um garoto humano, e Jake, seu cão mágico, vivem aventuras na estranha Terra de Ooo.",
      eng: "Finn, a human boy, and Jake, his magical dog, adventure through the strange Land of Ooo."
    }
  },
  {
    title: { br: "Sorria", eng: "Smile" },
    type: "movie",
    genre: "horror",
    rating: 3.25,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Smile_%282022_film%29.jpg/250px-Smile_%282022_film%29.jpg",
    description: {
      br: "Uma psiquiatra é assombrada por uma entidade sinistra após testemunhar um evento traumático.",
      eng: "A psychiatrist is haunted by a sinister entity after witnessing a traumatic event."
    }
  },
  {
    title: { br: "Black Mirror", eng: "Black Mirror" },
    type: "series",
    genre: "scifi",
    rating: 4.35,
    image: "https://image.tmdb.org/t/p/w500/aCTL24B8ZuiI2osMwoUI5rqBXoF.jpg",
    description: {
      br: "Antologia sombria sobre os efeitos perturbadores da tecnologia na sociedade moderna.",
      eng: "A dark anthology exploring technology's unsettling effects on modern society."
    }
  },
  {
    title: { br: "O Problema dos 3 Corpos", eng: "3 Body Problem" },
    type: "series",
    genre: "scifi",
    rating: 3.75,
    image: "https://upload.wikimedia.org/wikipedia/en/c/cb/3_Body_Problem_%28TV_series%29.jpg",
    description: {
      br: "Cientistas descobrem uma ameaça alienígena iminente ligada a um contato feito décadas antes.",
      eng: "Scientists uncover an imminent alien threat tied to contact made decades earlier."
    }
  },
  {
    title: { br: "Chaves", eng: "El Chavo del Ocho" },
    type: "series",
    genre: "comedy",
    rating: 4.25,
    image: "https://upload.wikimedia.org/wikipedia/en/f/fb/El_Chavo_Cast.jpg",
    description: {
      br: "Um menino órfão e seus vizinhos vivem aventuras cômicas no pátio de uma vila mexicana humilde.",
      eng: "An orphaned boy and his neighbors get into comic mischief in the courtyard of a humble Mexican tenement."
    }
  },
  {
    title: { br: "Drake e Josh", eng: "Drake & Josh" },
    type: "series",
    genre: "comedy",
    rating: 3.85,
    image: "https://image.tmdb.org/t/p/w500/udCvGctktHvvf8w51XyTPfcmzDa.jpg",
    description: {
      br: "Dois adolescentes muito diferentes viram irmãos por adoção e têm que aprender a conviver sob o mesmo teto.",
      eng: "Two very different teenagers become stepbrothers and have to learn to live under the same roof."
    }
  },
  {
    title: { br: "Bob Esponja", eng: "SpongeBob SquarePants" },
    type: "series",
    genre: "animation",
    rating: 3.85,
    image: "https://image.tmdb.org/t/p/w500/yXrtQINkVRyNmfUQFyVG2LuoTqm.jpg",
    description: {
      br: "Uma esponja otimista e seus amigos vivem aventuras hilárias no fundo do mar em Fenda do Biquíni.",
      eng: "An optimistic sponge and his friends have hilarious underwater adventures in Bikini Bottom."
    }
  },
];

export const BOOKS = [
  {
    title: { br: "How to Win Friends and Influence People", eng: "How to Win Friends and Influence People" },
    author: "Dale Carnegie",
    genre: "selfhelp",
    rating: 4.21,
    image: "https://covers.openlibrary.org/b/id/13314878-L.jpg",
    description: {
      br: "Clássico atemporal sobre como se comunicar melhor e construir relações genuínas.",
      eng: "A timeless classic on communicating better and building genuine relationships."
    }
  },
  {
    title: { br: "O Hobbit", eng: "The Hobbit" },
    author: "J.R.R. Tolkien",
    genre: "fantasy",
    rating: 4.30,
    image: "https://covers.openlibrary.org/b/id/14627509-L.jpg",
    description: {
      br: "Bilbo Bolseiro é arrastado para uma aventura inesperada rumo à Montanha Solitária.",
      eng: "Bilbo Baggins is swept into an unexpected adventure toward the Lonely Mountain."
    }
  },
  {
    title: { br: "Psicocibernética", eng: "Psycho-Cybernetics" },
    author: "Maxwell Maltz",
    genre: "selfhelp",
    rating: 4.24,
    image: "https://covers.openlibrary.org/b/id/14428293-L.jpg",
    description: {
      br: "Um dos pioneiros do autodesenvolvimento, sobre como a autoimagem molda o sucesso.",
      eng: "One of the pioneers of self-development, on how self-image shapes success."
    }
  },
  {
    title: { br: "A Arte da Guerra", eng: "The Art of War" },
    author: "Sun Tzu",
    genre: "strategy",
    rating: 3.94,
    image: "https://covers.openlibrary.org/b/id/4849549-L.jpg",
    description: {
      br: "Tratado militar milenar sobre estratégia, aplicado até hoje em negócios e liderança.",
      eng: "An ancient military treatise on strategy, still applied today in business and leadership."
    }
  },
  {
    title: { br: "As 48 Leis do Poder", eng: "The 48 Laws of Power" },
    author: "Robert Greene",
    genre: "strategy",
    rating: 4.07,
    image: "https://covers.openlibrary.org/b/id/6424160-L.jpg",
    description: {
      br: "Um guia direto sobre dinâmicas de poder através da história.",
      eng: "A blunt guide to power dynamics drawn from history."
    }
  },
  {
    title: { br: "Refactoring", eng: "Refactoring" },
    author: "Martin Fowler",
    genre: "tech",
    rating: 4.24,
    image: "https://covers.openlibrary.org/b/id/7087623-L.jpg",
    description: {
      br: "A referência definitiva sobre como melhorar código existente sem alterar seu comportamento.",
      eng: "The definitive reference on improving existing code without changing its behavior."
    }
  },
  {
    title: { br: "The Pragmatic Programmer", eng: "The Pragmatic Programmer" },
    author: "David Thomas, Andrew Hunt",
    genre: "tech",
    rating: 4.33,
    image: "https://covers.openlibrary.org/b/id/10143650-L.jpg",
    description: {
      br: "Leitura essencial para qualquer desenvolvedor que quer evoluir na carreira.",
      eng: "Essential reading for any developer looking to grow in their career."
    }
  },
  {
    title: { br: "Domain-Driven Design", eng: "Domain-Driven Design" },
    author: "Eric Evans",
    genre: "tech",
    rating: 4.15,
    image: "https://covers.openlibrary.org/b/id/9777760-L.jpg",
    description: {
      br: "O clássico 'livro vermelho' sobre modelagem de domínio em sistemas complexos.",
      eng: "The classic 'red book' on domain modeling for complex systems."
    }
  },
  {
    title: { br: "Cracking the Coding Interview", eng: "Cracking the Coding Interview" },
    author: "Gayle Laakmann McDowell",
    genre: "tech",
    rating: 4.33,
    image: "https://covers.openlibrary.org/b/id/7276811-L.jpg",
    description: {
      br: "O guia mais usado para se preparar para entrevistas técnicas em grandes empresas.",
      eng: "The go-to guide for preparing for technical interviews at top tech companies."
    }
  },
  {
    title: { br: "Head First Java", eng: "Head First Java" },
    author: "Kathy Sierra, Bert Bates",
    genre: "tech",
    rating: 4.24,
    image: "https://covers.openlibrary.org/b/id/388761-L.jpg",
    description: {
      br: "Introdução divertida e visual à programação em Java para iniciantes.",
      eng: "A fun, visual introduction to Java programming for beginners."
    }
  },
  {
    title: { br: "Lives of the Stoics", eng: "Lives of the Stoics" },
    author: "Ryan Holiday, Stephen Hanselman",
    genre: "philosophy",
    rating: 3.99,
    image: "https://covers.openlibrary.org/b/id/13098570-L.jpg",
    description: {
      br: "Biografias dos grandes filósofos estoicos e suas lições atemporais.",
      eng: "Biographies of the great Stoic philosophers and their timeless lessons."
    }
  },
  {
    title: { br: "Engenharia de Software Moderna", eng: "Modern Software Engineering" },
    author: "Marco Tulio Valente",
    genre: "tech",
    rating: 4.69,
    image: "https://engsoftmoderna.info/figs/capa/capa-principal.png",
    description: {
      br: "Livro brasileiro gratuito e referência em cursos de Engenharia de Software pelo país.",
      eng: "A free Brazilian book that's become a reference in Software Engineering courses nationwide."
    }
  },
  {
    title: { br: "Hamas", eng: "Hamas: The Islamic Resistance Movement" },
    author: "Beverley Milton-Edwards & Stephen Farrell",
    genre: "history",
    rating: 4.02,
    image: "https://covers.openlibrary.org/b/id/6389499-L.jpg",
    description: {
      br: "Uma investigação aprofundada sobre a origem, a ideologia e a ascensão política do Hamas no conflito israelo-palestino.",
      eng: "An in-depth investigation into the origins, ideology, and political rise of Hamas in the Israeli-Palestinian conflict."
    }
  },
  {
    title: { br: "O Menino do Pijama Listrado", eng: "The Boy in the Striped Pyjamas" },
    author: "John Boyne",
    genre: "drama",
    rating: 4.16,
    image: "https://covers.openlibrary.org/b/id/12720687-L.jpg",
    description: {
      br: "Um menino alemão de nove anos cria uma amizade proibida com um garoto do outro lado da cerca de um campo de concentração.",
      eng: "A nine-year-old German boy forms a forbidden friendship with a boy on the other side of a concentration camp fence."
    }
  },
  {
    title: { br: "Os Meninos que Enganavam Nazistas", eng: "A Bag of Marbles" },
    author: "Joseph Joffo",
    genre: "war",
    rating: 3.96,
    image: "https://covers.openlibrary.org/b/id/976742-L.jpg",
    description: {
      br: "Dois irmãos judeus atravessam sozinhos a França ocupada pelos nazistas, sobrevivendo à base de esperteza e coragem.",
      eng: "Two young Jewish brothers cross Nazi-occupied France alone, surviving on nothing but cunning and courage."
    }
  },
  {
    title: { br: "Redes de Computadores", eng: "Computer Networks" },
    author: "Andrew S. Tanenbaum",
    genre: "tech",
    rating: 4.12,
    image: "https://covers.openlibrary.org/b/id/6672765-L.jpg",
    description: {
      br: "O clássico definitivo sobre arquitetura, protocolos e funcionamento das redes de computadores modernas.",
      eng: "The definitive classic on the architecture, protocols, and inner workings of modern computer networks."
    }
  },
  {
    title: { br: "O Homem Mais Feliz do Mundo", eng: "The Happiest Man on Earth" },
    author: "Eddie Jaku",
    genre: "selfhelp",
    rating: 4.62,
    image: "https://covers.openlibrary.org/b/id/13168552-L.jpg",
    description: {
      br: "Um sobrevivente do Holocausto compartilha as lições de vida que o levaram a se tornar o homem mais feliz do mundo.",
      eng: "A Holocaust survivor shares the life lessons that led him to become the happiest man on earth."
    }
  },
  {
    title: { br: "Harry Potter e a Pedra Filosofal", eng: "Harry Potter and the Philosopher's Stone" },
    author: "J.K. Rowling",
    genre: "fantasy",
    rating: 4.47,
    image: "https://covers.openlibrary.org/b/id/15155833-L.jpg",
    description: {
      br: "Um garoto órfão descobre que é um bruxo e ingressa em Hogwarts, escola de magia e bruxaria.",
      eng: "An orphaned boy discovers he is a wizard and enrolls at Hogwarts School of Witchcraft and Wizardry."
    }
  },
  {
    title: { br: "Star Wars: Marcas da Guerra", eng: "Star Wars: Aftermath" },
    author: "Chuck Wendig",
    genre: "scifi",
    rating: 3.53,
    image: "https://covers.openlibrary.org/b/id/8760685-L.jpg",
    description: {
      br: "Após a queda do Império em Endor, remanescentes leais ao regime tramam um plano desesperado para se reerguer.",
      eng: "After the Empire's fall at Endor, its loyal remnants scheme a desperate plan to rise again."
    }
  },
  {
    title: { br: "O Problema dos Três Corpos", eng: "The Three-Body Problem" },
    author: "Liu Cixin",
    genre: "scifi",
    rating: 4.08,
    image: "https://covers.openlibrary.org/b/id/9157544-L.jpg",
    description: {
      br: "Um contato alienígena secreto na China dos anos 1960 desencadeia uma ameaça que coloca em risco toda a humanidade.",
      eng: "A secret alien contact in 1960s China sets off a threat that endangers the whole of humanity."
    }
  }
];

export const BLOG_POSTS = [
  {
    slug: "oss-contributors-profile",
    title: {
      br: "Perfil dos Contribuidores de Projetos Open Source",
      eng: "Profile of Open Source Project Contributors",
    },
    date: "2026-08-23",
    readTime: { br: "8 min de leitura", eng: "8 min read" },
    tags: ["pesquisa", "open-source", "github"],
    pdfUrl: "/oss-contributors-profile.pdf",
    excerpt: {
      br: "Um resumo do artigo científico que escrevi com colegas da PUC Minas: quem contribui para os projetos open source mais populares do GitHub e como a experiência molda essa participação.",
      eng: "An overview of the scientific paper I wrote with classmates at PUC Minas: who contributes to GitHub's most popular open-source projects, and how experience shapes that participation.",
    },
    content: {
      br: `Este artigo nasceu como o projeto interdisciplinar do 6º período do curso de Engenharia de Software na PUC Minas, escrito ao lado de Pedro Braga, Arthur F. Costa, Fernando A. F. Ibrahim, Luca F. Azalim e Renato M. A. Penna. Diferente da maioria dos projetos da faculdade, o objetivo aqui não era construir um produto, e sim conduzir uma pesquisa científica original — e o trabalho acabou sendo eleito o melhor artigo do período.

A pergunta que guiou a pesquisa foi simples de enunciar e difícil de responder: quem participa do desenvolvimento de software open source, e como o nível de experiência influencia essa participação? Para respondê-la, usamos o paradigma Goal-Question-Metric (GQM), uma abordagem que estrutura a pesquisa a partir de objetivos concretos, decompostos em perguntas, que por sua vez são respondidas por métricas extraídas dos dados.

Em termos de escopo, analisamos os 100 repositórios mais populares (por estrelas) em cada uma das dez linguagens mais usadas do GitHub, totalizando 1.000 repositórios. A partir deles, mineramos doze meses de atividade e chegamos a uma base de 52.743 contribuidores únicos.

Os resultados mais interessantes vieram em três frentes. Na distribuição geográfica, os contribuidores se concentram fortemente em poucos países — Estados Unidos, Índia e China lideram o ranking, com o Brasil aparecendo apenas na oitava posição. No nível de experiência, a grande maioria dos contribuidores (88,41%) se enquadra em um nível intermediário, o que sugere que projetos populares dependem menos de especialistas isolados do que se costuma imaginar. E na taxa de aprovação de pull requests, contribuidores mais experientes se destacam claramente, com uma média de aprovação de 83,76% em suas submissões — um indício forte de que a experiência prévia no projeto (ou no ecossistema) pesa bastante na revisão de código.

O artigo completo, com a metodologia detalhada, os gráficos e a discussão dos resultados, está disponível para leitura logo abaixo.`,
      eng: `This paper started as the 6th-period interdisciplinary project of the Software Engineering program at PUC Minas, written together with Pedro Braga, Arthur F. Costa, Fernando A. F. Ibrahim, Luca F. Azalim, and Renato M. A. Penna. Unlike most coursework projects, the goal here wasn't to build a product but to conduct original scientific research — and it ended up being recognized as the best paper of the period.

The question guiding the research was simple to state and hard to answer: who participates in open-source software development, and how does experience level shape that participation? To answer it, we used the Goal-Question-Metric (GQM) paradigm, an approach that structures research around concrete goals, broken down into questions, which are in turn answered by metrics extracted from the data.

In terms of scope, we analyzed the 100 most-starred repositories in each of GitHub's ten most popular languages, totaling 1,000 repositories. From there, we mined twelve months of activity and arrived at a dataset of 52,743 unique contributors.

The most interesting results came on three fronts. In geographic distribution, contributors are heavily concentrated in a handful of countries — the United States, India, and China lead the ranking, with Brazil showing up only in eighth place. In experience level, the vast majority of contributors (88.41%) fall into an intermediate tier, suggesting that popular projects rely less on isolated experts than one might assume. And in pull-request approval rates, more experienced contributors clearly stand out, averaging an 83.76% approval rate on their submissions — a strong sign that prior experience with the project (or the ecosystem) weighs heavily in code review.

The full paper, with the detailed methodology, charts, and discussion of results, is available to read right below.`,
    },
  },
];
