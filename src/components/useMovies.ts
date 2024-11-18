import { useEffect, useState } from "react";
import { apiMovies } from "../service/apiMovies";
export type movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};
const tempMovieData: movie[] = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

type useMoviesType = {
  movies: movie[];
  loading: boolean;
  error: string;
};

function useMovies(query: string): useMoviesType {
  const [movies, setMovies] = useState<movie[]>(tempMovieData);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  useEffect(
    function () {
      async function getMovies(): Promise<void> {
        try {
          if (query.length < 2) {
            setLoading(false);
            setError("");
            setMovies(tempMovieData);
            return;
          }
          setLoading(true);
          const data = await apiMovies(query);
          console.log(data);
          setMovies(data);
          setLoading(false);
        } catch (err) {
          console.log(err);
          setError("Error" + err);
          setLoading(false);
        }
      }
      getMovies();
    },
    [query]
  );

  return { movies, loading, error };
}

export default useMovies;
