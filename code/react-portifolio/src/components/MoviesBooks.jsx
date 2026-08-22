import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { IoFilmOutline, IoLibraryOutline, IoSearchOutline } from "react-icons/io5";
import { MOVIES_SERIES, BOOKS } from "../constants";
import { LanguageContext } from "../contexts/LanguageContext";
import SectionHeading from "../common/SectionHeading";
import StarRating from "../common/StarRating";

const CATEGORIES = {
  MOVIES: "movies",
  BOOKS: "books",
};

const GENRE_LABELS = {
  action: { br: "Ação", eng: "Action" },
  adventure: { br: "Aventura", eng: "Adventure" },
  animation: { br: "Animação", eng: "Animation" },
  comedy: { br: "Comédia", eng: "Comedy" },
  crime: { br: "Crime", eng: "Crime" },
  documentary: { br: "Documentário", eng: "Documentary" },
  drama: { br: "Drama", eng: "Drama" },
  fantasy: { br: "Fantasia", eng: "Fantasy" },
  history: { br: "História", eng: "History" },
  horror: { br: "Terror", eng: "Horror" },
  musical: { br: "Musical", eng: "Musical" },
  mystery: { br: "Mistério", eng: "Mystery" },
  philosophy: { br: "Filosofia", eng: "Philosophy" },
  romance: { br: "Romance", eng: "Romance" },
  scifi: { br: "Ficção Científica", eng: "Sci-Fi" },
  selfhelp: { br: "Autoajuda", eng: "Self-Help" },
  sport: { br: "Esporte", eng: "Sports" },
  strategy: { br: "Estratégia", eng: "Strategy" },
  tech: { br: "Tecnologia", eng: "Tech" },
  thriller: { br: "Suspense", eng: "Thriller" },
  war: { br: "Guerra", eng: "War" },
};

const genreLabel = (genre, portuguese) =>
  GENRE_LABELS[genre] ? (portuguese ? GENRE_LABELS[genre].br : GENRE_LABELS[genre].eng) : genre;

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
      <PosterImage src={item.image} title={item.title} />
      <span className="absolute left-2 top-2 rounded-full bg-neutral-950/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur">
        {item.type === "series" ? (portuguese ? "Série" : "Series") : portuguese ? "Filme" : "Movie"}
      </span>
    </div>
    <div className="flex flex-1 flex-col gap-2 p-4">
      <h3 className="text-sm font-bold leading-snug text-neutral-950">{item.title}</h3>
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
    <PosterImage src={book.image} title={book.title} aspect="aspect-[3/4]" />
    <div className="flex flex-1 flex-col gap-2 p-4">
      <div>
        <h3 className="text-sm font-bold leading-snug text-neutral-950">{book.title}</h3>
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

const MoviesBooks = () => {
  const { portuguese } = useContext(LanguageContext);
  const [activeCategory, setActiveCategory] = useState(CATEGORIES.MOVIES);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [minRating, setMinRating] = useState(0);

  const categoryText = {
    [CATEGORIES.MOVIES]: portuguese ? "Filmes & Séries" : "Movies & Series",
    [CATEGORIES.BOOKS]: portuguese ? "Livros" : "Books",
  };

  const handleCategoryChange = (key) => {
    setActiveCategory(key);
    setSelectedGenre("all");
  };

  const sortedMovies = [...MOVIES_SERIES].sort((a, b) => b.rating - a.rating);
  const currentDataset = activeCategory === CATEGORIES.MOVIES ? sortedMovies : BOOKS;

  const availableGenres = [...new Set(currentDataset.map((item) => item.genre))].sort((a, b) =>
    genreLabel(a, portuguese).localeCompare(genreLabel(b, portuguese))
  );

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredItems = currentDataset.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(normalizedSearch);
    const matchesGenre = selectedGenre === "all" || item.genre === selectedGenre;
    const matchesRating = item.rating >= minRating;
    return matchesSearch && matchesGenre && matchesRating;
  });

  return (
    <section className="mx-auto max-w-6xl px-4 pb-24 pt-36 sm:pt-40">
      <SectionHeading
        icon={IoFilmOutline}
        kicker={portuguese ? "Recomendações" : "Recommendations"}
        title={
          <>
            {portuguese ? "Filmes, Séries & " : "Movies, Series & "}
            <span className="text-emerald-600">{portuguese ? "Livros" : "Books"}</span>
          </>
        }
        subtitle={
          portuguese
            ? "O que estou assistindo e lendo, com nota de 0 a 5 estrelas para cada recomendação."
            : "What I'm watching and reading, rated from 0 to 5 stars for each recommendation."
        }
      />

      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {Object.entries(categoryText).map(([key, value]) => (
          <button
            key={key}
            onClick={() => handleCategoryChange(key)}
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-300 ${
              activeCategory === key
                ? "border-emerald-600 bg-emerald-600 text-white"
                : "border-neutral-200 bg-white text-neutral-500 hover:border-emerald-400/60 hover:text-neutral-950"
            }`}
          >
            {key === CATEGORIES.MOVIES ? <IoFilmOutline /> : <IoLibraryOutline />}
            {value}
          </button>
        ))}
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
          {activeCategory === CATEGORIES.MOVIES
            ? filteredItems.map((item, index) => (
                <MovieCard key={item.title} item={item} portuguese={portuguese} index={index} />
              ))
            : filteredItems.map((book, index) => (
                <BookCard key={book.title} book={book} portuguese={portuguese} index={index} />
              ))}
        </div>
      )}
    </section>
  );
};

export default MoviesBooks;
