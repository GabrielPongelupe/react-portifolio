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

// Notas convertidas da escala IMDb (0-10) para 0-5. Alguns títulos ambíguos ("Vampiros", "Os Donos do Jogo")
// foram resolvidos com a melhor correspondência encontrada; "Mario 2" ainda não tem nota estável no IMDb.
export const MOVIES_SERIES = [
  {
    title: "Smile 2",
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
    title: "Carros",
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
    title: "Homem-Aranha no Aranhaverso",
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
    title: "Zootopia",
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
    title: "Rastros de um Sequestro",
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
    title: "Todos Menos Você",
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
    title: "Ponyo",
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
    title: "Star Wars: Episódio I - A Ameaça Fantasma",
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
    title: "Star Wars: Episódio II - Ataque dos Clones",
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
    title: "Star Wars: Episódio III - A Vingança dos Sith",
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
    title: "Star Wars: Episódio IV - Uma Nova Esperança",
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
    title: "Star Wars: Episódio V - O Império Contra-Ataca",
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
    title: "Star Wars: Episódio VI - O Retorno de Jedi",
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
    title: "Rogue One: Uma História Star Wars",
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
    title: "O Preço da Confissão",
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
    title: "Gente Grande",
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
    title: "Se Beber, Não Case!",
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
    title: "Pretendente Surpresa",
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
    title: "Dark",
    type: "series",
    genre: "scifi",
    rating: 4.65,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Dark_TV_Series_Logo.svg/250px-Dark_TV_Series_Logo.svg.png",
    description: {
      br: "Desaparecimentos numa cidade alemã revelam um mistério de viagem no tempo entre quatro famílias.",
      eng: "Disappearances in a German town unravel a time-travel mystery spanning four families."
    }
  },
  {
    title: "One Piece (Live-Action)",
    type: "series",
    genre: "adventure",
    rating: 4.4,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/One_Piece_Live_Action_logo.png/250px-One_Piece_Live_Action_logo.png",
    description: {
      br: "Monkey D. Luffy reúne sua tripulação em busca do maior tesouro dos mares.",
      eng: "Monkey D. Luffy gathers his crew in search of the greatest treasure on the seas."
    }
  },
  {
    title: "Os Donos do Jogo",
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
    title: "Haikyu!!",
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
    title: "It: A Coisa",
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
    title: "Projeto Almanaque",
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
    title: "O Senhor dos Anéis: A Sociedade do Anel",
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
    title: "Devoradores de Estrela",
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
    title: "Parasita",
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
    title: "Brooklyn Nine-Nine",
    type: "series",
    genre: "comedy",
    rating: 4.45,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Brooklyn_Nine-Nine_Logo.png/250px-Brooklyn_Nine-Nine_Logo.png",
    description: {
      br: "As trapalhadas de um grupo de detetives excêntricos numa delegacia do Brooklyn.",
      eng: "The antics of a squad of eccentric detectives at a Brooklyn police precinct."
    }
  },
  {
    title: "The Walking Dead",
    type: "series",
    genre: "horror",
    rating: 4.3,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/The_Walking_Dead_2010_logo.svg/250px-The_Walking_Dead_2010_logo.svg.png",
    description: {
      br: "Sobreviventes lutam para se manter vivos num mundo dominado por mortos-vivos.",
      eng: "Survivors fight to stay alive in a world overrun by the undead."
    }
  },
  {
    title: "Homem-Aranha",
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
    title: "Homem-Aranha 2",
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
    title: "Adolescence",
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
    title: "The Dark Knight",
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
    title: "The Dark Knight Rises",
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
    title: "O Senhor dos Anéis: As Duas Torres",
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
    title: "O Senhor dos Anéis: O Retorno do Rei",
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
    title: "Projeto X",
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
    title: "Sociedade da Neve",
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
    title: "Corra!",
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
    title: "Avatar",
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
    title: "Band of Brothers",
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
    title: "Tick, Tick... Boom!",
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
    title: "Até o Último Homem",
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
    title: "Resgate do Soldado Ryan",
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
    title: "De Volta para o Futuro",
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
    title: "De Volta para o Futuro II",
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
    title: "De Volta para o Futuro III",
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
    title: "O Rei do Show",
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
    title: "Prison Break",
    type: "series",
    genre: "crime",
    rating: 4.4,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Prison_Break_logo.svg/250px-Prison_Break_logo.svg.png",
    description: {
      br: "Um engenheiro se deixa prender de propósito para ajudar o irmão a fugir.",
      eng: "An engineer gets himself imprisoned on purpose to help his brother escape."
    }
  },
  {
    title: "Harry Potter e as Relíquias da Morte – Parte 2",
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
    title: "Harry Potter e o Prisioneiro de Azkaban",
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
    title: "Up: Altas Aventuras",
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
    title: "Unbroken",
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
    title: "1917",
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
    title: "Forrest Gump",
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
    title: "Fractured",
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
    title: "Deadpool",
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
    title: "O Pianista",
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
    title: "O Menino do Pijama Listrado",
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
    title: "A Lista de Schindler",
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
    title: "Era Uma Vez em Hollywood",
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
    title: "Free Guy",
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
    title: "Mr. Bean",
    type: "series",
    genre: "comedy",
    rating: 4.55,
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Mr._bean_title_card.jpg/250px-Mr._bean_title_card.jpg",
    description: {
      br: "As trapalhadas mudas e hilárias de um dos personagens mais icônicos da comédia britânica.",
      eng: "The silent, hilarious antics of one of British comedy's most iconic characters."
    }
  },
  {
    title: "Curtindo a Vida Adoidado",
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
    title: "Show de Truman",
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
    title: "Atypical",
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
    title: "Jojo Rabbit",
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
    title: "Lost",
    type: "series",
    genre: "mystery",
    rating: 5.0,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Lost_main_title.svg/250px-Lost_main_title.svg.png",
    description: {
      br: "Sobreviventes de um acidente aéreo desvendam os mistérios de uma ilha misteriosa.",
      eng: "Plane crash survivors unravel the mysteries of a strange island."
    }
  },
];

export const BOOKS = [
  {
    title: "How to Win Friends and Influence People",
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
    title: "O Hobbit",
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
    title: "Psicocibernética",
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
    title: "A Arte da Guerra",
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
    title: "As 48 Leis do Poder",
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
    title: "Refactoring",
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
    title: "The Pragmatic Programmer",
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
    title: "Domain-Driven Design",
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
    title: "Cracking the Coding Interview",
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
    title: "Head First Java",
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
    title: "Lives of the Stoics",
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
    title: "Engenharia de Software Moderna",
    author: "Marco Tulio Valente",
    genre: "tech",
    rating: 4.69,
    image: "https://engsoftmoderna.info/figs/capa/capa-principal.png",
    description: {
      br: "Livro brasileiro gratuito e referência em cursos de Engenharia de Software pelo país.",
      eng: "A free Brazilian book that's become a reference in Software Engineering courses nationwide."
    }
  }
];
