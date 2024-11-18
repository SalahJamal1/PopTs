import React from "react";
import { watched } from "./useWatched";
import { useAppContext } from "../context/AppContext";

interface WatchedProps {
  watched: watched;
}

export const Watched: React.FC<WatchedProps> = ({ watched }) => {
  const { deleteWatched } = useAppContext();
  return (
    <li key={watched.imdbID}>
      <img src={watched.Poster} alt={`${watched.Title} poster`} />
      <h3>{watched.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{watched.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{watched.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{watched.runtime} min</span>
        </p>
        <br></br>
        <button
          className="btn-delete"
          onClick={() => deleteWatched(watched.imdbID ?? "")}
        >
          ❌
        </button>
      </div>
    </li>
  );
};
