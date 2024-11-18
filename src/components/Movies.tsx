import React from "react";
import { movie } from "./useMovies";
import { useAppContext } from "../context/AppContext";

interface MoviesProps {
  movie: movie;
}

export const Movies: React.FC<MoviesProps> = ({ movie }) => {
  const { HandelSelect } = useAppContext();
  return (
    <li
      key={movie.imdbID}
      className="list"
      onClick={() => HandelSelect(movie.imdbID)}
    >
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
};
