import { useState, useEffect } from "react";

const API = import.meta.env.PROD
  ? `${import.meta.env.VITE_HOST}`
  : "http://localhost:5000";

export const useMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(API);
      const data = await response.json();
      //console.log(data);
      setMovies(data);
    };
    fetchMovies();
  }, []);

  return movies;
};
