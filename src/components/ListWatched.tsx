import { useAppContext } from "../context/AppContext";
import { Watched } from "./Watched";

export default function ListWatched() {
  const { watched } = useAppContext();
  return (
    <ul className="list">
      {watched.map((watcheds) => (
        <Watched watched={watcheds} key={watcheds.imdbID} />
      ))}
    </ul>
  );
}
