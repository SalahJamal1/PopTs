import { useEffect, useState } from "react";
import { apiMovieById } from "../service/apiMovies";

export type movieType = {
  Title?: string;
  Year?: string;
  Poster?: string;
  Runtime?: number;
  imdbRating?: number;
  Plot?: string;
  Released?: string;
  Actors?: string;
  Director?: string;
  Genre?: string;
};

type useMovieType = {
  movie: movieType;
  loading2: boolean;
  error2: string;
};
export const useMovie = (select: string | null): useMovieType => {
  const [movie, setMovies] = useState<movieType>({});
  const [loading2, setLoading] = useState<boolean>(false);
  const [error2, setError] = useState<string>("");

  useEffect(
    function () {
      async function getMovie(): Promise<void> {
        try {
          if (!select) return;
          setLoading(true);
          const data = await apiMovieById(select);
          setLoading(false);
          setMovies(data);
        } catch (err) {
          console.log(err);
          setError("error:" + err);
          setLoading(false);
        }
      }
      getMovie();
    },
    [select]
  );
  return { movie, loading2, error2 };
};
