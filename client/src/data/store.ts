import { atom } from "jotai";
import { Movie } from "../types/Movie";

const API = import.meta.env.PROD
  ? `${import.meta.env.VITE_HOST}`
  : "http://localhost:5000";

const fetchMovies = async () => {
  try {
    const response = await fetch(API);
    const data: Movie[] | undefined = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const receivedData = fetchMovies();

export const films = atom(receivedData ?? []);
