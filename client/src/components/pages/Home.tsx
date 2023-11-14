
import { useEffect } from "react";
import SearchBar from "../core/SearchBar";

const Home = () => {
  useEffect(() => {
    document.body.className !== "overflow-hidden" &&
      document.body.classList.add("overflow-hidden");

    return () => {
      document.body.className = "";
    };
  }, []);

  return (
    <div className="flex flex-col items-center pt-20 min-h-screen">
      <p className="text-2xl md:text-4xl select-none text-center text-white">
        WatchMe.com - The ONLY MOVIE site you'll EVER NEED!
      </p>
      <SearchBar />
    </div>
  );
};

export default Home;
