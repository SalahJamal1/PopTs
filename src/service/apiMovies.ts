import axios from "axios";
import { movie } from "../components/useMovies";
import { movieType } from "../components/useMovie";
export async function apiMovies(query: string): Promise<movie[]> {
  const data = await axios.get(
    `http://www.omdbapi.com/?apikey=53f9eba3&s=${query}`
  );
  return data.data.Search;
}
export async function apiMovieById(id: string): Promise<movieType> {
  const data = await axios.get(
    `http://www.omdbapi.com/?apikey=53f9eba3&i=${id}`
  );
  return data.data;
}
