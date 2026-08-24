import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { IoFilmOutline, IoLibraryOutline, IoGameControllerOutline, IoSearchOutline } from "react-icons/io5";
import { MOVIES_SERIES, BOOKS, GAMES } from "../constants";
import { LanguageContext } from "../contexts/LanguageContext";
import SectionHeading from "../common/SectionHeading";
import StarRating from "../common/StarRating";

const CATEGORIES = {
  MOVIES: "movies",
  BOOKS: "books",
  GAMES: "games",
};

const CATEGORY_ICONS = {
  [CATEGORIES.MOVIES]: IoFilmOutline,
  [CATEGORIES.BOOKS]: IoLibraryOutline,
  [CATEGORIES.GAMES]: IoGameControllerOutline,
};

// Formatos disponíveis dentro da aba Filmes & Séries (independente do gênero).
const TYPE_BADGE = {
  movie: { br: "Filme", eng: "Movie" },
  series: { br: "Série", eng: "Series" },
  cartoon: { br: "Desenho", eng: "Cartoon" },
  anime: { br: "Anime", eng: "Anime" },
  documentary: { br: "Documentário", eng: "Documentary" },
  game: { br: "Jogo", eng: "Game" },
};

const TYPE_ORDER = ["movie", "series", "cartoon", "anime", "documentary"];

const GENRE_LABELS = {
  action: { br: "Ação", eng: "Action" },
  adventure: { br: "Aventura", eng: "Adventure" },
  animation: { br: "Animação", eng: "Animation" },
  comedy: { br: "Comédia", eng: "Comedy" },
  coop: { br: "Cooperativo", eng: "Co-op" },
  crime: { br: "Crime", eng: "Crime" },
  documentary: { br: "Documentário", eng: "Documentary" },
  drama: { br: "Drama", eng: "Drama" },
  fantasy: { br: "Fantasia", eng: "Fantasy" },
  history: { br: "História", eng: "History" },
  horror: { br: "Terror", eng: "Horror" },
  musical: { br: "Musical", eng: "Musical" },
  mystery: { br: "Mistério", eng: "Mystery" },
  party: { br: "Festa", eng: "Party" },
  philosophy: { br: "Filosofia", eng: "Philosophy" },
  platformer: { br: "Plataforma", eng: "Platformer" },
  puzzle: { br: "Quebra-cabeça", eng: "Puzzle" },
  racing: { br: "Corrida", eng: "Racing" },
  romance: { br: "Romance", eng: "Romance" },
  rpg: { br: "RPG", eng: "RPG" },
  sandbox: { br: "Sandbox", eng: "Sandbox" },
  scifi: { br: "Ficção Científica", eng: "Sci-Fi" },
  selfhelp: { br: "Autoajuda", eng: "Self-Help" },
  shooter: { br: "Tiro", eng: "Shooter" },
  simulation: { br: "Simulação", eng: "Simulation" },
  sport: { br: "Esporte", eng: "Sports" },
  strategy: { br: "Estratégia", eng: "Strategy" },
  survival: { br: "Sobrevivência", eng: "Survival" },
  tech: { br: "Tecnologia", eng: "Tech" },
  thriller: { br: "Suspense", eng: "Thriller" },
  war: { br: "Guerra", eng: "War" },
};

const genreLabel = (genre, portuguese) =>
  GENRE_LABELS[genre] ? (portuguese ? GENRE_LABELS[genre].br : GENRE_LABELS[genre].eng) : genre;

// Um pouco de contexto pessoal por categoria — muda junto com a aba selecionada.
const CATEGORY_INTRO = {
  movies: {
    br: "Sempre tive um gosto bem eclético para filmes e séries, então dificilmente fico preso a um único gênero ou estilo. Aqui embaixo estão algumas recomendações de filmes e séries que já assisti, com notas baseadas no que achei de cada um.",
    eng: "I've always had pretty eclectic taste when it comes to movies and series, so I rarely stick to just one genre or style. Below are some movies and series I've watched and would recommend, with ratings based on what I thought of each one.",
  },
  books: {
    br: "Durante muito tempo, ler nunca foi algo que fazia parte da minha rotina. Isso começou a mudar por volta de 2020, quando passei a procurar livros principalmente para aprender coisas novas. Desde então, acabei encontrando alguns que realmente fizeram diferença para mim. Aqui embaixo estão alguns deles.",
    eng: "For a long time, reading wasn't really part of my routine. That started to change around 2020, when I began looking for books mainly to learn new things. Since then, I've come across a few that genuinely made a difference to me. Below are some of them.",
  },
  games: {
    br: "Jogos fazem parte da minha vida desde criança. No começo, era simplesmente uma forma de me divertir, mas com o tempo comecei a ficar curioso para entender como tudo aquilo funcionava por trás da tela. Essa curiosidade acabou contribuindo para o meu interesse por programação e, mais tarde, por Engenharia de Software. Aqui embaixo estão alguns dos jogos que fizeram parte dessa jornada e que continuo jogando até hoje.",
    eng: "Games have been part of my life since I was a kid. At first, they were simply a way to have fun, but over time I became curious about how everything worked behind the screen. That curiosity eventually contributed to my interest in programming and, later on, Software Engineering. Below are some of the games that have been part of that journey and that I still play today.",
  },
};

const RATING_OPTIONS = [0, 3, 3.5, 4, 4.5];

const PosterImage = ({ src, title, aspect = "aspect-[2/3]" }) => {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`flex ${aspect} w-full items-center justify-center bg-gradient-to-br from-emerald-600 to-neutral-900 p-4 text-center`}
      >
        <span className="text-sm font-bold leading-snug text-white">{title}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={title}
      onError={() => setFailed(true)}
      className={`${aspect} w-full object-cover`}
      loading="lazy"
    />
  );
};

const MovieCard = ({ item, portuguese, index }) => (
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 20 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.4, delay: (index % 10) * 0.03, ease: "easeOut" }}
    className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-colors duration-300 hover:border-emerald-400/50"
  >
    <div className="relative">
      <PosterImage src={item.image} title={portuguese ? item.title.br : item.title.eng} />
      <span className="absolute left-2 top-2 rounded-full bg-neutral-950/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur">
        {portuguese ? TYPE_BADGE[item.type].br : TYPE_BADGE[item.type].eng}
      </span>
    </div>
    <div className="flex flex-1 flex-col gap-2 p-4">
      <h3 className="text-sm font-bold leading-snug text-neutral-950">{portuguese ? item.title.br : item.title.eng}</h3>
      <span className="text-[11px] font-medium uppercase tracking-wide text-emerald-600">
        {genreLabel(item.genre, portuguese)}
      </span>
      <p className="flex-1 text-xs leading-relaxed text-neutral-500">
        {portuguese ? item.description.br : item.description.eng}
      </p>
      <StarRating rating={item.rating} />
    </div>
  </motion.div>
);

const BookCard = ({ book, portuguese, index }) => (
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 20 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.4, delay: (index % 10) * 0.03, ease: "easeOut" }}
    className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-colors duration-300 hover:border-emerald-400/50"
  >
    <PosterImage src={book.image} title={portuguese ? book.title.br : book.title.eng} aspect="aspect-[3/4]" />
    <div className="flex flex-1 flex-col gap-2 p-4">
      <div>
        <h3 className="text-sm font-bold leading-snug text-neutral-950">{portuguese ? book.title.br : book.title.eng}</h3>
        <p className="text-xs text-neutral-400">{book.author}</p>
      </div>
      <span className="text-[11px] font-medium uppercase tracking-wide text-emerald-600">
        {genreLabel(book.genre, portuguese)}
      </span>
      <p className="flex-1 text-xs leading-relaxed text-neutral-500">
        {portuguese ? book.description.br : book.description.eng}
      </p>
      <StarRating rating={book.rating} />
    </div>
  </motion.div>
);

const DATASETS = {
  [CATEGORIES.MOVIES]: MOVIES_SERIES,
  [CATEGORIES.BOOKS]: BOOKS,
  [CATEGORIES.GAMES]: GAMES,
};

const Interests = () => {
  const { portuguese } = useContext(LanguageContext);
  const [activeCategory, setActiveCategory] = useState(CATEGORIES.MOVIES);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [minRating, setMinRating] = useState(0);

  const categoryText = {
    [CATEGORIES.MOVIES]: portuguese ? "Filmes & Séries" : "Movies & Series",
    [CATEGORIES.BOOKS]: portuguese ? "Livros" : "Books",
    [CATEGORIES.GAMES]: portuguese ? "Jogos" : "Games",
  };

  const handleCategoryChange = (key) => {
    setActiveCategory(key);
    setSelectedGenre("all");
    setSelectedType("all");
  };

  // Filmes, séries e jogos são ordenados por nota; livros mantêm a ordem de inserção.
  const sortedByRating = (items) => [...items].sort((a, b) => b.rating - a.rating);
  const currentDataset =
    activeCategory === CATEGORIES.BOOKS ? DATASETS[activeCategory] : sortedByRating(DATASETS[activeCategory]);

  const availableGenres = [...new Set(currentDataset.map((item) => item.genre))].sort((a, b) =>
    genreLabel(a, portuguese).localeCompare(genreLabel(b, portuguese))
  );

  // Filtro de formato (filme/série/desenho/anime/documentário) só faz sentido na aba de Filmes & Séries.
  const isMoviesTab = activeCategory === CATEGORIES.MOVIES;
  const availableTypes = isMoviesTab
    ? TYPE_ORDER.filter((type) => currentDataset.some((item) => item.type === type))
    : [];

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredItems = currentDataset.filter((item) => {
    const matchesSearch =
      item.title.br.toLowerCase().includes(normalizedSearch) ||
      item.title.eng.toLowerCase().includes(normalizedSearch);
    const matchesGenre = selectedGenre === "all" || item.genre === selectedGenre;
    const matchesType = !isMoviesTab || selectedType === "all" || item.type === selectedType;
    const matchesRating = item.rating >= minRating;
    return matchesSearch && matchesGenre && matchesType && matchesRating;
  });

  return (
    <section className="mx-auto max-w-6xl px-4 pb-24 pt-36 sm:pt-40">
      <SectionHeading
        title={
          <>
            {portuguese ? "Meus " : "My "}
            <span className="text-emerald-600">{portuguese ? "Interesses" : "Interests"}</span>
          </>
        }
      />

      <div className="flex flex-wrap justify-center gap-3">
        {Object.entries(categoryText).map(([key, value]) => {
          const Icon = CATEGORY_ICONS[key];
          return (
            <button
              key={key}
              onClick={() => handleCategoryChange(key)}
              className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                activeCategory === key
                  ? "border-emerald-600 bg-emerald-600 text-white shadow-sm"
                  : "border-neutral-200 bg-white text-neutral-500 hover:border-emerald-400/60 hover:text-neutral-950"
              }`}
            >
              <Icon />
              {value}
            </button>
          );
        })}
      </div>

      <div className="mx-auto mb-10 mt-6 max-w-2xl px-4">
        <motion.p
          key={activeCategory}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="text-center text-base leading-relaxed text-neutral-500 sm:text-lg"
        >
          {portuguese ? CATEGORY_INTRO[activeCategory].br : CATEGORY_INTRO[activeCategory].eng}
        </motion.p>
      </div>

      <div className="mb-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
        <div className="relative sm:w-64">
          <IoSearchOutline className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={portuguese ? "Buscar por título..." : "Search by title..."}
            className="w-full rounded-full border border-neutral-200 bg-white py-2 pl-9 pr-4 text-sm text-neutral-700 placeholder:text-neutral-400 focus:border-emerald-400 focus:outline-none"
          />
        </div>

        {isMoviesTab && (
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700 focus:border-emerald-400 focus:outline-none sm:w-48"
          >
            <option value="all">{portuguese ? "Todos os formatos" : "All formats"}</option>
            {availableTypes.map((type) => (
              <option key={type} value={type}>
                {portuguese ? TYPE_BADGE[type].br : TYPE_BADGE[type].eng}
              </option>
            ))}
          </select>
        )}

        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700 focus:border-emerald-400 focus:outline-none sm:w-52"
        >
          <option value="all">{portuguese ? "Todos os gêneros" : "All genres"}</option>
          {availableGenres.map((genre) => (
            <option key={genre} value={genre}>
              {genreLabel(genre, portuguese)}
            </option>
          ))}
        </select>

        <select
          value={minRating}
          onChange={(e) => setMinRating(Number(e.target.value))}
          className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700 focus:border-emerald-400 focus:outline-none sm:w-44"
        >
          {RATING_OPTIONS.map((value) => (
            <option key={value} value={value}>
              {value === 0 ? (portuguese ? "Todas as notas" : "All ratings") : `${value}+ ★`}
            </option>
          ))}
        </select>
      </div>

      {filteredItems.length === 0 ? (
        <p className="text-center text-sm text-neutral-500">
          {portuguese ? "Nenhum resultado encontrado para esses filtros." : "No results found for these filters."}
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {activeCategory === CATEGORIES.BOOKS
            ? filteredItems.map((book, index) => (
                <BookCard key={book.title.eng} book={book} portuguese={portuguese} index={index} />
              ))
            : filteredItems.map((item, index) => (
                <MovieCard key={item.title.eng} item={item} portuguese={portuguese} index={index} />
              ))}
        </div>
      )}
    </section>
  );
};

export default Interests;
