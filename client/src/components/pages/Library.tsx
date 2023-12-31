import Card from "../core/Card";
import { useAtom } from "jotai";
import { films } from "../../data/store";
import { Movie } from "../../types/Movie";
import Loader from "../misc/Loader";

export default function Library() {
  // bg-fixed makes bg image scroll with the page (infinite scroll illusion); height property is usually not required with it.
  //const movies = useMovies();

  const [movies] = useAtom(films);

  return (
    <>
      {!movies.length ? (
        <Loader />
      ) : (
        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 justify-items-center pt-10"
        >
          {movies.map((movie: Movie) => (
            <Card
              key={movie.id}
              name={movie.title}
              image={movie.posterUrl}
              actors={movie.actors}
              plot={movie.plot}
              year={movie.year}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </>
  );
};


