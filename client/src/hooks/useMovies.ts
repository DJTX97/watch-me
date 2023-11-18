import { useState, useEffect } from "react";

const API = import.meta.env.HOST
  ? `https://${import.meta.env.HOST}`
  : "http://localhost:5000";

export const useMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(API);
      const data = await response.json();
      setMovies(data.movies);
    };
    fetchMovies();
  }, [movies]);

  return movies;
};
