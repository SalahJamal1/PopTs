import React, { createContext, useContext, useState } from "react";
import useMovies, { movie } from "../components/useMovies";
import { movieType, useMovie } from "../components/useMovie";
import { useWatched, watched } from "../components/useWatched";

interface AppContextType {
  query: string;
  setQuery: (query: string) => void;
  movies: movie[];
  watched: watched[];
  loading: boolean;
  error: string;
  select: string | null;
  HandelSelect: (value: string) => void;
  movie: movieType;
  loading2: boolean;
  error2: string;
  addWatched: (value: watched) => void;
  onClose: () => void;
  deleteWatched: (value: string) => void;
}

interface AppProviderProps {
  children: React.ReactNode;
}
const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [query, setQuery] = useState("");
  const [select, setSelect] = useState<string | null>(null);
  ///////////////
  /////hooks
  const { movies, loading, error } = useMovies(query);
  const { movie, loading2, error2 } = useMovie(select);
  const { watched, addWatched, deleteWatched } = useWatched();

  //////////////////////
  const HandelSelect = (value: string): void => {
    setSelect((s) => (s === value ? null : value));
  };
  const onClose = (): void => {
    setSelect(null);
  };
  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        movies,
        watched,
        loading,
        error,
        select,
        HandelSelect,
        movie,
        loading2,
        error2,
        addWatched,
        onClose,
        deleteWatched,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const x = useContext(AppContext);
  if (x === undefined) throw new Error("unkown");
  return x;
};
