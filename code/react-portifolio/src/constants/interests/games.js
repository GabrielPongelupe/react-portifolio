// Notas convertidas de agregadores públicos (Metacritic/OpenCritic; Steam quando não havia
// nota de crítica) para a escala 0-5 do site, seguindo o mesmo critério usado em MOVIES_SERIES.
// "Mecha Camaleon" foi omitido: não foi possível confirmar publicamente sua existência sob esse nome.
export const GAMES = [
  {
    title: { br: "Counter-Strike 2", eng: "Counter-Strike 2" },
    type: "game",
    genre: "shooter",
    rating: 4.10,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/730/library_600x900.jpg",
    description: {
      br: "Um shooter tático gratuito em que duas equipes, terroristas e contraterroristas, competem em combates por objetivos, em rounds.",
      eng: "A free-to-play tactical shooter where two teams of terrorists and counter-terrorists compete in round-based objective combat."
    }
  },
  {
    title: { br: "Counter-Strike 1.6", eng: "Counter-Strike 1.6" },
    type: "game",
    genre: "shooter",
    rating: 4.40,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/10/library_600x900.jpg",
    description: {
      br: "O clássico shooter tático em equipe que definiu o cenário competitivo no PC com seus modos de explosão de bomba e resgate de reféns.",
      eng: "The classic team-based tactical shooter that defined competitive PC gaming with its bomb-defusal and hostage-rescue modes."
    }
  },
  {
    title: { br: "Counter-Strike: Source", eng: "Counter-Strike: Source" },
    type: "game",
    genre: "shooter",
    rating: 4.40,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/240/library_600x900.jpg",
    description: {
      br: "Um remake do Counter-Strike original feito na engine Source, com visual e física aprimorados mantendo a fórmula clássica do shooter tático.",
      eng: "A Source-engine remake of the original Counter-Strike, refining visuals and physics while keeping the core tactical shooter formula."
    }
  },
  {
    title: { br: "Clair Obscur: Expedition 33", eng: "Clair Obscur: Expedition 33" },
    type: "game",
    genre: "rpg",
    rating: 4.60,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1903340/library_600x900.jpg",
    description: {
      br: "Um RPG por turnos em que uma expedição parte todo ano para derrotar uma misteriosa entidade pintada que apaga pessoas da existência.",
      eng: "A turn-based RPG in which an expedition sets out each year to defeat a mysterious painted entity erasing people from existence."
    }
  },
  {
    title: { br: "Business Tour", eng: "Business Tour" },
    type: "game",
    genre: "strategy",
    rating: 2.75,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/397900/library_600x900.jpg",
    description: {
      br: "Um jogo de tabuleiro online no estilo Banco Imobiliário, em que os jogadores compram propriedades, cobram aluguel e tentam falir os adversários.",
      eng: "A Monopoly-style online board game where players buy properties, collect rent, and try to bankrupt their opponents."
    }
  },
  {
    title: { br: "Minecraft", eng: "Minecraft" },
    type: "game",
    genre: "sandbox",
    rating: 4.65,
    image: "https://upload.wikimedia.org/wikipedia/en/b/be/Minecraft_game_logo_2023.png",
    description: {
      br: "Um jogo sandbox sobre minerar recursos, criar ferramentas e construir o que a imaginação permitir em um mundo de blocos gerado proceduralmente.",
      eng: "A sandbox game about mining resources, crafting tools, and building anything imaginable in a procedurally generated block world."
    }
  },
  {
    title: { br: "God of War", eng: "God of War" },
    type: "game",
    genre: "action",
    rating: 4.70,
    image: "https://upload.wikimedia.org/wikipedia/en/b/b5/God_of_War_%282005%29_cover.jpg",
    description: {
      br: "Kratos, um guerreiro espartano, persegue o deus Ares em um jogo de ação brutal baseado na mitologia grega.",
      eng: "Kratos, a Spartan warrior, hunts down the god Ares in a brutal action game rooted in Greek mythology."
    }
  },
  {
    title: { br: "God of War II", eng: "God of War II" },
    type: "game",
    genre: "action",
    rating: 4.65,
    image: "https://upload.wikimedia.org/wikipedia/en/2/25/God_of_War_II_cover.jpg",
    description: {
      br: "Kratos, agora um deus, busca vingança contra Zeus após ser traído e ter seu poder tirado.",
      eng: "Kratos, now a god himself, seeks revenge against Zeus after being betrayed and stripped of his power."
    }
  },
  {
    title: { br: "God of War III", eng: "God of War III" },
    type: "game",
    genre: "action",
    rating: 4.60,
    image: "https://upload.wikimedia.org/wikipedia/en/8/8b/God_of_War_III_cover_art.jpg",
    description: {
      br: "Kratos invade o Monte Olimpo para um confronto final e apocalíptico com os deuses que o traíram.",
      eng: "Kratos storms Mount Olympus for a final, apocalyptic confrontation with the gods who betrayed him."
    }
  },
  {
    title: { br: "Red Dead Redemption 2", eng: "Red Dead Redemption 2" },
    type: "game",
    genre: "action",
    rating: 4.85,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/library_600x900.jpg",
    description: {
      br: "Um faroeste em mundo aberto que acompanha o fora da lei Arthur Morgan e a gangue Van der Linde enquanto seu modo de vida entra em colapso.",
      eng: "An open-world western following outlaw Arthur Morgan and the Van der Linde gang as their way of life collapses."
    }
  },
  {
    title: { br: "GTA IV", eng: "GTA IV" },
    type: "game",
    genre: "action",
    rating: 4.90,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/12210/library_600x900.jpg",
    description: {
      br: "O imigrante Niko Bellic persegue o sonho americano através do crime na sombria e fictícia Liberty City.",
      eng: "Immigrant Niko Bellic pursues the American dream through crime in the fictional, gritty Liberty City."
    }
  },
  {
    title: { br: "GTA V", eng: "GTA V" },
    type: "game",
    genre: "action",
    rating: 4.80,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/271590/library_600x900.jpg",
    description: {
      br: "Três criminosos enfrentam assaltos e traições pelo extenso mundo aberto de Los Santos.",
      eng: "Three criminals navigate heists and double-crosses across the sprawling open world of Los Santos."
    }
  },
  {
    title: { br: "The Witcher 3: Wild Hunt", eng: "The Witcher 3: Wild Hunt" },
    type: "game",
    genre: "rpg",
    rating: 4.60,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/292030/library_600x900.jpg",
    description: {
      br: "O caçador de monstros Geralt de Rívia procura sua filha adotiva por um vasto mundo aberto devastado pela guerra.",
      eng: "Monster hunter Geralt of Rivia searches for his adopted daughter across a vast, war-torn open world."
    }
  },
  {
    title: { br: "Indiana Jones and the Great Circle", eng: "Indiana Jones and the Great Circle" },
    type: "game",
    genre: "adventure",
    rating: 4.40,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/2677660/library_600x900.jpg",
    description: {
      br: "Indiana Jones investiga uma conspiração global ligada a um mistério antigo em uma aventura de ação em primeira pessoa ambientada em 1937.",
      eng: "Indiana Jones investigates a global conspiracy tied to an ancient mystery in a first-person action-adventure set in 1937."
    }
  },
  {
    title: { br: "Assassin's Creed IV: Black Flag", eng: "Assassin's Creed IV: Black Flag" },
    type: "game",
    genre: "action",
    rating: 4.40,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/242050/library_600x900.jpg",
    description: {
      br: "O capitão pirata Edward Kenway navega pelo Caribe, unindo combate naval à furtividade e ao parkour característicos da série.",
      eng: "Pirate captain Edward Kenway sails the Caribbean, blending naval combat with the series' stealth and parkour."
    }
  },
  {
    // Nota da coletânea remasterizada (Metacritic), não a média dos três jogos originais.
    title: { br: "Assassin's Creed: Ezio Trilogy", eng: "Assassin's Creed: Ezio Trilogy" },
    type: "game",
    genre: "action",
    rating: 3.75,
    description: {
      br: "Uma coletânea remasterizada de Assassin's Creed II, Brotherhood e Revelations, acompanhando a trajetória de Ezio Auditore pela Itália renascentista e além.",
      eng: "A remastered bundle of Assassin's Creed II, Brotherhood, and Revelations, following Ezio Auditore's rise across Renaissance Italy and beyond."
    }
  },
  {
    title: { br: "RiME", eng: "RiME" },
    type: "game",
    genre: "adventure",
    rating: 3.90,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/493200/library_600x900.jpg",
    description: {
      br: "Uma aventura sem diálogos que acompanha um garoto naufragado explorando uma ilha misteriosa para descobrir a verdade sobre uma perda.",
      eng: "A wordless adventure following a shipwrecked boy who explores a mysterious island to uncover the truth about loss."
    }
  },
  {
    title: { br: "Hollow Knight", eng: "Hollow Knight" },
    type: "game",
    genre: "platformer",
    rating: 4.35,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/367520/library_600x900.jpg",
    description: {
      br: "Um metroidvania desenhado à mão em que um pequeno cavaleiro explora o reino arruinado e habitado por insetos de Hallownest.",
      eng: "A hand-drawn metroidvania where a small knight explores the ruined, insect-inhabited kingdom of Hallownest."
    }
  },
  {
    // Nota de referência: Super Mario 3D Land, o título mais representativo de Mario no 3DS.
    title: { br: "Mario (Nintendo 3DS)", eng: "Mario (Nintendo 3DS)" },
    type: "game",
    genre: "platformer",
    rating: 4.50,
    image: "https://upload.wikimedia.org/wikipedia/en/4/42/Super-Mario-3D-Land-Logo.jpg",
    description: {
      br: "Mario alterna entre fases lineares de estilo 2D e plataforma em 3D nesta aventura portátil construída em torno do traje de Tanuki.",
      eng: "Mario hops between linear, 2D-inspired courses and full 3D platforming in a portable adventure built around the Tanooki suit."
    }
  },
  {
    // Nota de referência: média de Pokémon X e Y, os títulos principais mais representativos no 3DS.
    title: { br: "Pokémon (Nintendo 3DS)", eng: "Pokémon (Nintendo 3DS)" },
    type: "game",
    genre: "rpg",
    rating: 4.38,
    image: "https://upload.wikimedia.org/wikipedia/en/d/dc/Pokemon_X_and_Y_box_art.jpg",
    description: {
      br: "Treinadores exploram a região de Kalos, capturando e batalhando Pokémon nos primeiros jogos principais da série totalmente em 3D.",
      eng: "Trainers explore the Kalos region, catching and battling Pokémon in the series' first fully 3D core games."
    }
  },
  {
    title: { br: "LEGO Star Wars: The Complete Saga", eng: "LEGO Star Wars: The Complete Saga" },
    type: "game",
    genre: "platformer",
    rating: 4.00,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/32440/library_600x900.jpg",
    description: {
      br: "Uma releitura em LEGO dos seis filmes originais de Star Wars, misturando plataforma, quebra-cabeças e humor cooperativo.",
      eng: "A LEGO retelling of all six original Star Wars films, mixing platforming, puzzles, and co-op humor."
    }
  },
  {
    title: { br: "LEGO Indiana Jones: The Original Adventures", eng: "LEGO Indiana Jones: The Original Adventures" },
    type: "game",
    genre: "platformer",
    rating: 3.85,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/32330/library_600x900.jpg",
    description: {
      br: "Uma adaptação em LEGO da trilogia original de Indiana Jones, unindo plataforma e quebra-cabeças às cenas icônicas dos filmes.",
      eng: "A LEGO adaptation of the original Indiana Jones trilogy, combining puzzle-platforming with the films' iconic set pieces."
    }
  },
  {
    title: { br: "Rematch", eng: "Rematch" },
    type: "game",
    genre: "sport",
    rating: 3.85,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/2138720/library_600x900.jpg",
    description: {
      br: "Um jogo de futebol online rápido e baseado em física, priorizando partidas habilidosas em equipes pequenas em vez do realismo de simulação.",
      eng: "A fast-paced, physics-based online football game emphasizing skillful small-team matches over simulation realism."
    }
  },
  {
    title: { br: "FIFA", eng: "FIFA" },
    type: "game",
    genre: "sport",
    rating: 3.85,
    image: "https://upload.wikimedia.org/wikipedia/en/a/a6/FIFA_23_Cover.jpg",
    description: {
      br: "O último título da EA Sports a carregar o nome FIFA, com clubes e ligas licenciados e partidas de futebol em crossplay.",
      eng: "The final EA Sports title carrying the FIFA name, featuring licensed clubs, leagues, and cross-play football matches."
    }
  },
  {
    title: { br: "Rocket League", eng: "Rocket League" },
    type: "game",
    genre: "sport",
    rating: 4.25,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/252950/library_600x900.jpg",
    description: {
      br: "Um esporte baseado em física em que jogadores dirigem carros com propulsão a foguete para acertar uma bola gigante no gol adversário.",
      eng: "A physics-based sport where players drive rocket-powered cars to hit a giant ball into the opposing goal."
    }
  },
  {
    title: { br: "Wii Sports", eng: "Wii Sports" },
    type: "game",
    genre: "sport",
    rating: 3.80,
    image: "https://upload.wikimedia.org/wikipedia/en/5/54/Wii_Sports_Sleeve_Cover_Art.jpg",
    description: {
      br: "Uma coletânea de cinco esportes controlados por movimento (tênis, boliche, boxe, golfe e beisebol) que acompanhava o console Wii.",
      eng: "A motion-controlled compilation of five sports (tennis, bowling, boxing, golf, and baseball) bundled with the Wii console."
    }
  },
  {
    title: { br: "Among Us", eng: "Among Us" },
    type: "game",
    genre: "party",
    rating: 4.25,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/945360/library_600x900.jpg",
    description: {
      br: "Um jogo de dedução social em que os tripulantes cumprem tarefas a bordo de uma nave espacial enquanto tentam identificar os impostores entre eles.",
      eng: "A social deduction game where crewmates complete tasks aboard a spaceship while trying to identify the impostors among them."
    }
  },
  {
    title: { br: "Overcooked! 2", eng: "Overcooked! 2" },
    type: "game",
    genre: "coop",
    rating: 4.05,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/728880/library_600x900.jpg",
    description: {
      br: "Um caótico jogo de cooperação local em que equipes correm contra o tempo para preparar e servir pratos em cozinhas cada vez mais absurdas.",
      eng: "A chaotic couch co-op cooking game where teams race against the clock to prepare and serve dishes across increasingly absurd kitchens."
    }
  },
  {
    title: { br: "Pummel Party", eng: "Pummel Party" },
    type: "game",
    genre: "party",
    rating: 4.45,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/851100/library_600x900.jpg",
    description: {
      br: "Um jogo de festa em estilo tabuleiro em que até oito jogadores competem em minijogos caóticos para coletar gemas e sabotar uns aos outros.",
      eng: "A board-game-style party title where up to eight players compete in chaotic minigames to collect gems and sabotage each other."
    }
  },
  {
    // Nota baseada na avaliação atual do Steam ("Muito Positiva"); o lançamento em 2015 teve recepção mais fria.
    title: { br: "Rainbow Six Siege", eng: "Rainbow Six Siege" },
    type: "game",
    genre: "shooter",
    rating: 4.10,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/359550/library_600x900.jpg",
    description: {
      br: "Um shooter tático multijogador construído em torno de ambientes destrutíveis e rodadas assimétricas de ataque contra defesa.",
      eng: "A tactical multiplayer shooter built around destructible environments and asymmetric attacker-versus-defender rounds."
    }
  },
  {
    title: { br: "The Last Campfire", eng: "The Last Campfire" },
    type: "game",
    genre: "puzzle",
    rating: 4.15,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1055540/library_600x900.jpg",
    description: {
      br: "Uma suave aventura de quebra-cabeças que acompanha uma brasa perdida enquanto ela ajuda criaturas encalhadas a encontrar paz.",
      eng: "A gentle puzzle-adventure following a lost ember as it helps stranded creatures find peace before it can move on."
    }
  },
  {
    title: { br: "Life is Strange", eng: "Life is Strange" },
    type: "game",
    genre: "adventure",
    rating: 4.15,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/319630/library_600x900.jpg",
    description: {
      br: "Uma aventura episódica guiada por escolhas sobre uma adolescente que descobre poder voltar o tempo enquanto investiga o desaparecimento de uma amiga.",
      eng: "A choice-driven episodic adventure about a teenager who discovers she can rewind time while investigating a friend's disappearance."
    }
  },
  {
    title: { br: "Life is Strange 2", eng: "Life is Strange 2" },
    type: "game",
    genre: "adventure",
    rating: 3.90,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/532210/library_600x900.jpg",
    description: {
      br: "Uma aventura episódica de viagem que acompanha dois irmãos com um poder misterioso enquanto fogem pelo oeste americano após uma tragédia.",
      eng: "An episodic road-trip adventure following two brothers with a mysterious power as they flee across the American West after a tragedy."
    }
  },
  {
    title: { br: "Dead by Daylight", eng: "Dead by Daylight" },
    type: "game",
    genre: "horror",
    rating: 3.55,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/381210/library_600x900.jpg",
    description: {
      br: "Um jogo de terror multijogador assimétrico que coloca um assassino implacável contra quatro sobreviventes tentando escapar.",
      eng: "An asymmetric multiplayer horror game pitting one relentless killer against four survivors trying to escape."
    }
  },
  {
    title: { br: "Left 4 Dead 2", eng: "Left 4 Dead 2" },
    type: "game",
    genre: "shooter",
    rating: 4.45,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/550/library_600x900.jpg",
    description: {
      br: "Um shooter cooperativo de zumbis em que até quatro sobreviventes lutam contra hordas de infectados rumo a casas seguras.",
      eng: "A cooperative zombie shooter where up to four survivors fight through hordes of the infected toward safe houses."
    }
  },
  {
    title: { br: "Project Zomboid", eng: "Project Zomboid" },
    type: "game",
    genre: "survival",
    rating: 4.70,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/108600/library_600x900.jpg",
    description: {
      br: "Um sandbox isométrico de sobrevivência a zumbis em mundo aberto focado em construção de base a longo prazo, morte permanente e mecânicas realistas.",
      eng: "An open-world isometric zombie survival sandbox focused on long-term base-building, permadeath, and realistic survival mechanics."
    }
  },
  {
    title: { br: "Raft", eng: "Raft" },
    type: "game",
    genre: "survival",
    rating: 4.65,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/648800/library_600x900.jpg",
    description: {
      br: "Um jogo de sobrevivência em que os jogadores constroem e expandem uma jangada enquanto coletam recursos e enfrentam tubarões em alto mar.",
      eng: "A survival game where players build and expand a raft while gathering resources and fending off sharks on the open ocean."
    }
  },
  {
    title: { br: "Unrailed!", eng: "Unrailed!" },
    type: "game",
    genre: "coop",
    rating: 4.65,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1016920/library_600x900.jpg",
    description: {
      br: "Um jogo cooperativo frenético em que até quatro jogadores constroem trilhos e coletam recursos para impedir que um trem descontrolado descarrile.",
      eng: "A frantic cooperative game where up to four players lay train tracks and gather resources to keep a runaway train from crashing."
    }
  },
  {
    title: { br: "Stardew Valley", eng: "Stardew Valley" },
    type: "game",
    genre: "simulation",
    rating: 4.45,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/413150/library_600x900.jpg",
    description: {
      br: "Uma simulação de vida no campo em que o jogador herda uma fazenda abandonada e constrói uma nova vida por meio de plantações, mineração, pesca e relacionamentos.",
      eng: "A farming life simulation where players inherit a rundown farm and build a new life through crops, mining, fishing, and relationships."
    }
  },
  {
    title: { br: "Amanda the Adventurer", eng: "Amanda the Adventurer" },
    type: "game",
    genre: "horror",
    rating: 4.75,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1885690/library_600x900.jpg",
    description: {
      br: "Um jogo de terror em estilo found footage em que o jogador assiste a episódios perturbadores de um desenho infantil que esconde algo sinistro.",
      eng: "A found-footage horror game where players watch unsettling episodes of a children's cartoon that hides something sinister."
    }
  },
  {
    title: { br: "The Painscreek Killings", eng: "The Painscreek Killings" },
    type: "game",
    genre: "mystery",
    rating: 4.40,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/550650/library_600x900.jpg",
    description: {
      br: "Um jogo de exploração e mistério em primeira pessoa ambientado em uma cidade abandonada, reunindo pistas sobre um assassinato não resolvido.",
      eng: "A first-person mystery exploration game set in an abandoned town, piecing together clues about a decades-old unsolved murder."
    }
  },
  {
    title: { br: "ARK: Survival Evolved", eng: "ARK: Survival Evolved" },
    type: "game",
    genre: "survival",
    rating: 3.50,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/346110/library_600x900.jpg",
    description: {
      br: "Um jogo de sobrevivência em mundo aberto em que os jogadores domam dinossauros, constroem bases e lutam para sobreviver em uma misteriosa ilha pré-histórica.",
      eng: "An open-world survival game where players tame dinosaurs, build bases, and fight to survive on a mysterious prehistoric island."
    }
  },
  {
    title: { br: "LEGO Harry Potter: Years 1-4", eng: "LEGO Harry Potter: Years 1-4" },
    type: "game",
    genre: "platformer",
    rating: 3.95,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/21130/library_600x900.jpg",
    description: {
      br: "Uma aventura de ação em LEGO que reconta os quatro primeiros livros de Harry Potter por meio de quebra-cabeças cooperativos e plataforma em Hogwarts.",
      eng: "A LEGO action-adventure retelling the first four Harry Potter books through cooperative puzzle-solving and platforming at Hogwarts."
    }
  },
  {
    title: { br: "Little Nightmares", eng: "Little Nightmares" },
    type: "game",
    genre: "horror",
    rating: 3.90,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/424840/library_600x900.jpg",
    description: {
      br: "Um jogo de terror e quebra-cabeças de plataforma que acompanha uma pequena criança chamada Six enquanto escapa de uma embarcação pesadelesca cheia de habitantes grotescos.",
      eng: "A puzzle-platformer horror game following a small child named Six as she escapes a nightmarish vessel filled with grotesque inhabitants."
    }
  },
  {
    title: { br: "Little Nightmares II", eng: "Little Nightmares II" },
    type: "game",
    genre: "horror",
    rating: 4.10,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/860510/library_600x900.jpg",
    description: {
      br: "Uma sequência de terror e quebra-cabeças de plataforma que acompanha Mono e Six em uma jornada por um mundo em decomposição para silenciar um sinal corrompido.",
      eng: "A puzzle-platformer horror sequel following Mono and Six as they journey through a decaying world to silence a signal corrupting its inhabitants."
    }
  },
  {
    title: { br: "PICO PARK", eng: "PICO PARK" },
    type: "game",
    genre: "coop",
    rating: 4.60,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1509960/library_600x900.jpg",
    description: {
      br: "Um minimalista jogo cooperativo de quebra-cabeças e plataforma em que até oito jogadores devem trabalhar juntos para escapar de salas cheias de obstáculos interligados.",
      eng: "A minimalist cooperative puzzle-platformer where up to eight players must work together to escape rooms full of interlocking obstacles."
    }
  },
  {
    title: { br: "Star Wars Jedi: Fallen Order", eng: "Star Wars Jedi: Fallen Order" },
    type: "game",
    genre: "action",
    rating: 4.20,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1172380/library_600x900.jpg",
    description: {
      br: "Uma aventura de ação em terceira pessoa que acompanha um jovem Jedi sobrevivente reconstruindo sua conexão com a Força enquanto foge do Império.",
      eng: "A third-person action-adventure following a young Jedi survivor rebuilding his connection to the Force while evading the Empire."
    }
  },
  {
    title: { br: "Star Wars Jedi: Survivor", eng: "Star Wars Jedi: Survivor" },
    type: "game",
    genre: "action",
    rating: 4.30,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1774580/library_600x900.jpg",
    description: {
      br: "Uma sequência direta que acompanha Cal Kestis em busca de um refúgio escondido do alcance crescente do Império pela galáxia.",
      eng: "A direct sequel following Cal Kestis as he searches for a hidden refuge from the Empire's growing reach across the galaxy."
    }
  },
  {
    title: { br: "Star Wars Battlefront", eng: "Star Wars Battlefront" },
    type: "game",
    genre: "shooter",
    rating: 4,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1237980/library_600x900.jpg",
    description: {
      br: "Um shooter multijogador em grande escala que recria batalhas icônicas de Star Wars em combates terrestres e aéreos em locais clássicos.",
      eng: "A large-scale multiplayer shooter recreating iconic Star Wars battles across land and air combat on classic locations."
    }
  },
  {
    // Sem consolidação oficial (jogo gratuito de itch.io); nota baseada num port não-oficial no Steam.
    title: { br: "We Become What We Behold", eng: "We Become What We Behold" },
    type: "game",
    genre: "simulation",
    rating: 4.75,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1103210/portrait.png",
    description: {
      br: "Um curto jogo satírico sobre um fotógrafo cuja lente amplifica pequenas diferenças entre pessoas até se tornarem guerra tribal aberta.",
      eng: "A short satirical game about a photographer whose camera lens amplifies small differences between people into outright tribal warfare."
    }
  }
];
