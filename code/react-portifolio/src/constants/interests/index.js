// Notas convertidas da escala IMDb (0-10) para 0-5. Alguns títulos ambíguos ("Vampiros", "Os Donos do Jogo")
// foram resolvidos com a melhor correspondência encontrada; "Mario 2" ainda não tem nota estável no IMDb.
import moviesData from "./movies.json";
import booksData from "./books.json";
import { GAMES } from "./games";

export const MOVIES_SERIES = moviesData;
export const BOOKS = booksData;
export { GAMES };
