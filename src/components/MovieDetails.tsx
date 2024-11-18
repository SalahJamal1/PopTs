import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { Loader } from "../ui/Loader";
import { Error } from "../ui/Error";
import { watched } from "./useWatched";
import Ratings from "./Ratings";

export const MovieDetails: React.FC = () => {
  const { movie, loading2, error2, select, addWatched, onClose, watched } =
    useAppContext();
  const [userRating, setRating] = useState<number | undefined>(undefined);

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  const handelSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    const newWatched: watched = {
      imdbID: select,
      Title: title,
      Year: year,
      Poster: poster,
      runtime: runtime,
      imdbRating: imdbRating,
      userRating,
    };
    addWatched(newWatched);
    onClose();
  };

  useEffect(
    function () {
      if (title) document.title = title;

      return () => {
        document.title = "🍿 usePopcorn";
      };
    },
    [title]
  );

  useEffect(() => {
    const closeShow = (e: KeyboardEvent) => {
      if (e.code === "Escape") onClose();
    };
    document.querySelector("body")?.addEventListener("keydown", closeShow);
    return () => {
      document.querySelector("body")?.removeEventListener("keydown", closeShow);
    };
  }, [onClose]);

  const isRated: boolean = watched.map((el) => el.imdbID).includes(select);
  const userRatings: number = watched.find(
    (el) => el.imdbID === select
  )?.userRating;

  if (loading2 && error2)
    return (
      <>
        <Loader />
        <Error error={error2} />
      </>
    );
  if (loading2) return <Loader />;
  if (error2) return <Error error={error2} />;
  return (
    <div className="details">
      <>
        <header>
          <button className="btn-back" onClick={onClose}>
            &larr;
          </button>
          <img src={poster} alt={`Poster of ${movie} movie`} />
          <div className="details-overview">
            <h2>{title}</h2>
            <p>
              {released} &bull; {runtime}
            </p>
            <p>{genre}</p>
            <p>
              <span>⭐️</span>
              {imdbRating} IMDb rating
            </p>
          </div>
        </header>

        <section>
          <div className="rating">
            {isRated ? (
              <p className="text-slate-100">
                You rated with movie {userRatings} ⭐️
              </p>
            ) : (
              <>
                <Ratings userRating={userRating} setRating={setRating} />
                {userRating && (
                  <button onClick={handelSubmit} className="btn-add">
                    Add to List+
                  </button>
                )}
              </>
            )}
          </div>
          <p>
            <em>{plot}</em>
          </p>
          <p>Starring {actors}</p>
          <p>Directed by {director}</p>
        </section>
      </>
    </div>
  );
};
