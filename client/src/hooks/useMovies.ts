import { useEffect } from "react";
import { useAtom } from "jotai";
import { films } from "../data/store";

const API = import.meta.env.PROD
  ? `${import.meta.env.VITE_HOST}`
  : "http://localhost:5000";

export const useMovies = () => {
  const [movies, setMovies] = useAtom(films);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(API);
      const data = await response.json();
      setMovies(data);
    };
    
    if (!movies.length) {
      fetchMovies();
    }
    // return () => {
    //     console.log(movies.length)
    //     console.log(movies)
    // }
  }, []);
};