import { GrSearch } from "react-icons/gr";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../../data/data.json";

const movies = data.movies;

const numOfSuggestions = 5;
const SearchBar = () => {
  const search = useNavigate();

  const seeResult = () => {
    const selection = movies.filter(
      (movie) => movie.title === val && movie.title
    );

    if (selection[0]) {
      search("library/movie", {
        state: {
          name: selection[0].title,
          actors: selection[0].actors,
          plot: selection[0].plot,
          genres: selection[0].genres.join(", "),
        },
      });
    } else {
      search("*");
    }

    setVal("");
  };

  const [val, setVal] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };

  return (
    <div className="relative w-3/4 lg:w-1/2">
      <div className="flex">
        <button
          className="bg-white rounded-l-3xl pr-2 my-5 hover:bg-gray-300"
        >
          <GrSearch className="ml-3" size={20} onClick={seeResult} />
        </button>
        <input
          type="text"
          placeholder="Search..."
          value={val}
          onChange={handleChange}
          onClick={() => val !== "" && setVal("")}
          onKeyDown={(e) => {
            e.key === "Enter" && seeResult();
          }}
          className="w-full rounded-r-3xl p-2 my-5 text-lg outline-none border-none text-black"
        />
      </div>

      <div
        className={`absolute top-16 md:left-10 flex flex-col w-full md:w-3/4 rounded-lg text-lg bg-white text-black shadow-xl shadow-black`}
      >
        {movies
          .filter((movie) => {
            if (val !== "" && val !== movie.title) {
              return movie.title.toLowerCase().includes(val.toLowerCase());
            }
          })
          .map((movie, index) => (
            <div
              key={index}
              className="p-2 border-b rounded-lg hover:bg-gray-300 cursor-pointer"
              onClick={() => {
                setVal(movie.title);
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

export default SearchBar;
