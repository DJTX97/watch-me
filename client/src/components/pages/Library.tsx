import Card from "../core/Card";
import { useState, useEffect } from "react";

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

const Library = () => {
  // bg-fixed makes bg image scroll with the page (infinite scroll illusion); height property is usually not required with it.

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(API);
      const data = await response.json();
      setMovies(data.movies);
    };
    fetchMovies();
  }, [movies]);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 justify-items-center pt-10">
      {movies.map((movie: Movie) => {
        return (
          <Card
            key={movie.id}
            name={movie.title}
            image={movie.posterUrl}
            actors={movie.actors}
            plot={movie.plot}
            year={movie.year}
            genres={movie.genres}
          />
        );
      })}
    </div>
  );
};

export default Library;
