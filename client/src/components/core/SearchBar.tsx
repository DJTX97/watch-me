import { GrSearch } from "react-icons/gr";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { films } from "../../data/store";
import { Movie } from "../../types/Movie";

const numOfSuggestions = 5;
export default function SearchBar() {
  const search = useNavigate();
  const [movies] = useAtom(films);
  const [searchVal, setSearchVal] = useState("");

  const seeResult = () => {
    const options: Movie[] = movies?.filter(
      (movie: Movie) => movie.title === searchVal && movie.title
    );

    if (options) {
      search("library/movie", {
        state: {
          name: options[0].title,
          actors: options[0].actors,
          plot: options[0].plot,
          genres: options[0].genres.join(", "),
        },
      });
    } else {
      search("*");
    }

    setSearchVal("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  };

  return (
    <div className="relative w-3/4 lg:w-1/2">
      <div className="flex">
        <button className="bg-white rounded-l-3xl pr-2 my-5 hover:bg-gray-300">
          <GrSearch className="ml-3" size={20} onClick={seeResult} />
        </button>
        <input
          type="text"
          placeholder="Search..."
          value={searchVal}
          onChange={handleChange}
          onClick={() => searchVal !== "" && setSearchVal("")}
          onKeyDown={(e) => {
            e.key === "Enter" && seeResult();
          }}
          className="w-full rounded-r-3xl p-2 my-5 text-lg outline-none border-none text-black"
        />
      </div>

      <div
        className={`absolute top-16 md:left-10 flex flex-col w-full md:w-3/4 rounded-lg text-lg bg-white text-black shadow-xl shadow-black`}
      >
        {movies?.filter((movie: Movie) => {
            if (searchVal !== "" && searchVal !== movie.title) {
              return movie.title
                .toLowerCase()
                .includes(searchVal.toLowerCase());
            }
          })
          .map((movie: Movie) => (
            <div
              key={movie.id}
              className="p-2 border-b rounded-lg hover:bg-gray-300 cursor-pointer"
              onClick={() => {
                setSearchVal(movie.title);
              }}
            >
              {movie.title}
            </div>
          ))
          .slice(0, numOfSuggestions)}
      </div>
    </div>
  );
};


