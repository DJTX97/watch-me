import Card from "../core/Card";
import data from "../../data/data.json";

const movies = data.movies;

const Library = () => {
  // bg-fixed makes bg image scroll with the page (infinite scroll illusion); height property is usually not required with it.

  return (
    <>
      <div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 justify-items-center pt-10">
          {movies.map((movie) => {
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
      </div>
    </>
  );
};

export default Library;
