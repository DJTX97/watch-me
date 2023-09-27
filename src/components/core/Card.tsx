import { useNavigate } from "react-router-dom";
import PIMG from "/assets/images/placeholder.png";

interface CardProps {
  name: string;
  image: string;
  actors: string;
  plot: string;
  year: string;
  genres: string[];
}

const Card = ({ name, image, actors, plot, year, genres }: CardProps) => {
  const navigate = useNavigate();

  const seeMovie = () => {
    navigate("movie", {
      state: {
        name: name,
        actors: actors,
        plot: plot,
        genres: genres.join(", "),
      },
    });
  };



  return (
    <div
      className={`w-[250px] h-[350px] grid grid-rows-auto justify-items-center m-5 rounded-3xl bg-black/40 shadow-lg hover:scale-105 hover:shadow-red-600 cursor-pointer transition-all`}
      onClick={seeMovie}
    >
      <div className="translate-y-12 translate-x-[-4.5rem] bg-gray-500/90 text-white font-bold px-1 h-6">
        {year}
      </div>
      <img
        className="w-[200px] h-[250px]"
        src={image}
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => (e.target as HTMLImageElement).src = PIMG}
        alt=""
      />
      <p className="text-center text-xl px-3 text-white">{name}</p>
    </div>
  );
};

export default Card;
