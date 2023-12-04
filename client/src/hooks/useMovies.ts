import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAtom } from "jotai";
import { films } from "../data/store";
import { API } from "../utils/API";

export const useMovies = () => {
  const [movies, setMovies] = useAtom(films);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API);
        if (!response.ok) {
          throw new Error("Something went wrong");
        } else {
          const data = await response.json();
          setMovies(data);
        }
      } catch (error) {
        console.error("Server not responding!\n", error);
        if (pathname === "/library") {
          navigate("/error");
        }
      }
    };

    if (!movies.length && (pathname === "/library" || pathname === "/")) {
      fetchMovies();
    }
  }, [pathname]);
};
