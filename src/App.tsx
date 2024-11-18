import { AppProvider, useAppContext } from "./context/AppContext";
import { NavBar } from "./components/NavBar";
import { Box } from "./components/Box";
import ListMovies from "./components/ListMovies";
import Summray from "./components/Summray";
import ListWatched from "./components/ListWatched";
import { MovieDetails } from "./components/MovieDetails";

export default function App() {
  const { select } = useAppContext();
  return (
    <>
      <NavBar />
      <main className="main">
        <Box>
          <ListMovies />
        </Box>
        <Box>
          {select ? (
            <MovieDetails />
          ) : (
            <>
              <Summray />
              <ListWatched />
            </>
          )}
        </Box>
      </main>
    </>
  );
}
