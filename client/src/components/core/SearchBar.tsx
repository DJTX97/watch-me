import { GrSearch } from "react-icons/gr";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.HOST
  ? `https://${import.meta.env.HOST}`
  : "http://localhost:5000";

interface Movie {
  id: number;
  title: string;
  year: string;
  runtime: string;
  genres: string[];
  director: string;
  actors: string;
  plot: string;
  posterUrl: string;
}

const numOfSuggestions = 5;
const SearchBar = () => {
  const search = useNavigate();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(API);
      const data = await response.json();
      setMovies(data.movies);
    };
    fetchMovies();
  }, [movies]);

  const seeResult = () => {
    const selection: Movie[] = movies.filter(
      (movie: Movie) => movie.title === val && movie.title
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
          .filter((movie: Movie) => {
            if (val !== "" && val !== movie.title) {
              return movie.title.toLowerCase().includes(val.toLowerCase());
            }
          })
          .map((movie: Movie, index) => (
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
