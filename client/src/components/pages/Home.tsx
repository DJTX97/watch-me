import SearchBar from "../core/SearchBar";
import { useOverflow } from "../../hooks/useOverflow";

export default function Home() {
  useOverflow(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className="text-2xl md:text-4xl select-none text-center text-white">
        WatchMe.com - The ONLY MOVIE site you'll EVER NEED!
      </p>
      <SearchBar />
    </div>
  );
}
