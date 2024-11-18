import { useAppContext } from "../context/AppContext";
import { Error } from "../ui/Error";
import { Loader } from "../ui/Loader";
import { Movies } from "./Movies";

export default function ListMovies() {
  const { movies, error, loading } = useAppContext();
  if (loading && error)
    return (
      <>
        <Loader />
        <Error error={error} />
      </>
    );
  if (loading) return <Loader />;
  if (error) return <Error error={error} />;
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movies movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
