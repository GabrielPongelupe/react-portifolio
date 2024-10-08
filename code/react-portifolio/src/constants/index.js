import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = {
  br: `Sou Gabriel Pongelupe, tenho 20 anos e sou desenvolvedor FullStack. Meu interesse por tecnologia começou em 2017, quando, fascinado por videogames, comecei a explorar o desenvolvimento dos jogos e o universo por trás deles. Esse desejo de aprender me levou, em 2019, a ingressar na SuperGeek, uma escola de programação onde tive meu primeiro contato com o desenvolvimento de software. A imersão em projetos desafiadores despertou uma paixão intensa pela programação, me motivando a seguir essa carreira com grande entusiasmo.
`,
  eng: `I am Gabriel Pongelupe, 20 years old, and I am a FullStack developer. My interest in technology began in 2017 when, fascinated by video games, I started exploring game development and the world behind them. This desire to learn led me to join SuperGeek in 2019, a programming school where I had my first experience with software development. Immersing myself in challenging projects ignited a deep passion for programming, motivating me to pursue this career with great enthusiasm.` 
}

export const HERO_CONTENT_2023 = {
    br: `Em 2023, iniciei Engenharia de Software na PUC Minas, participando de projetos que me deram experiência com Java Spring Boot, React.js, Node.js, MySQL e MongoDB. Atualmente, atuo como desenvolvedor back-end no projeto extensionista "Agência Experimental de Software". `,
    eng : `In 2023, I began studying Software Engineering at PUC Minas, participating in projects that gave me experience with Java Spring Boot, React.js, Node.js, MySQL, and MongoDB. Currently, I work as a back-end developer in the extension project "Agência Experimental de Software". `
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
    image: project1,
    description:
      "Projeto dePinhoMultimídias é uma plataforma digital para a venda de conteúdo multimídia automotivo desenvolvida para o YouTuber Gabriel De Pinho. Foi feita utilizando tecnologias como Java Spring Boot e integrada à API do MercadoPago. O trabalho incluiu planejamento, desenvolvimento ágil e foco na satisfação do cliente.",
    description_eng: "DePinhoMultimídias Project is a digital platform for selling automotive multimedia content developed for YouTuber Gabriel De Pinho. It was built using technologies like Java Spring Boot and integrated with the MercadoPago API. The project included planning, agile development, and a focus on client satisfaction.",
    short_description: "E-commerce",
    short_description_eng: "E-commerce",
    color: "bg-blue-600", // Azul como o do Zé Delivery
    technologies: ["Spring Boot", "Java", "JavaScript", "HTML5", "CSS"],
  },
  {
    title: "Portfolio Website",
    link: "https://pongelupee.vercel.app/",
    image: project3,
    description_eng: "This is my personal portfolio website, where you can find information about me and the projects I have developed. Explore to learn more about my work and career journey.",
    description:
      "Este site é o meu portfólio pessoal, onde você encontra informações sobre mim e os projetos que desenvolvi. Explore para conhecer meu trabalho e trajetória.",
    short_description: "Portfólio Pessoal",
    short_description_eng: "Personal Portfolio",
    color: "bg-black", // Preto
    technologies: ["React.js", "Tailwind css", "HTML5", "Frame Motion"],
  },
  {
    title: "TicketTrade",
    link: "https://github.com/GabrielPongelupe/Ticket-Trade",
    image: project4,
    description_eng: "API for Ticket Purchase and Resale Platform is an interface that enables integration with an online system for buying and reselling tickets for shows, events, and lectures. It streamlines the management of reservations, sales, and access to event information, providing a smooth and efficient experience for both users and administrators.",
    description:
      "API para Plataforma de Compra e Revenda de Ingressos é uma interface que permite a integração com um sistema online para adquirir e revender ingressos de shows, eventos e palestras. Facilita a gestão de reservas, vendas e acesso a informações sobre eventos, proporcionando uma experiência fluida e eficiente para usuários e administradores.",
    short_description: "Sistema de Gestão",
    short_description_eng: "Management System",
    color: "bg-green-500", // Verde de tom médio
    technologies: ["Spring Boot", "Java", "JavaScript", "HTML5", "CSS"],
  },
  {
    title: "TimeWise",
    link: "https://github.com/GabrielPongelupe/TimeWise",
    image: project2,
    description_eng: "Time Management Web Project is a platform that combines timers, interactive calendars, and practical tips to optimize your productivity and organization. Ideal for those who want to manage their time better and achieve more with less effort.",
    description:
      "Projeto Web para Gestão de Tempo é uma plataforma que combina timers, calendários interativos e dicas práticas para otimizar sua produtividade e organização. Ideal para quem quer gerenciar melhor o tempo e alcançar mais com menos esforço.",
    short_description: "Gestão de Tempo",
    short_description_eng: "Time Management",
    color: "bg-blue-400", // Azul claro
    technologies: ["HTML5", "CSS", "JavaScript", "Firebase"],
  },
];



export const CONTACT = {
  phoneNo: "+55 (31) 99903-6093",
  email: "gabrielpongelupee@gmail.com",
};
