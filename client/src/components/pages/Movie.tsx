import { useLocation } from "react-router-dom";
import video from "/assets/videos/People.mp4";

export default function Movie() {
  const location = useLocation();

  const { name, actors, plot, genres } = location.state;

  return (
    <div className="text-white">
      <div className="flex flex-col items-center gap-10">
        <div className="rounded-xl bg-black shadow-lg shadow-red-600 text-3xl md:text-6xl w-3/4 p-5 text-center mt-10">
          You are watching "{name}"
        </div>
        <div className="flex flex-col mt-10">
          <video
            src={video}
            controls
            className="w-[25rem] md:w-[56rem] md:h-[28rem] p-2 rounded-xl bg-black shadow-lg shadow-red-600"
          ></video>
        </div>
        <div className="flex flex-col gap-14 w-3/4 mb-20">
          <div className="rounded-xl bg-black shadow-lg shadow-red-600">
            <p className="text-4xl px-5 pt-5 underline underline-offset-8">
              Genres
            </p>
            <p className="text-xl px-3 py-5">{genres}</p>
          </div>
          <div className="rounded-xl bg-black shadow-lg shadow-red-600">
            <p className="text-4xl px-5 pt-5 underline underline-offset-8">
              Description
            </p>
            <p className="text-xl px-3 py-5">{plot}</p>
          </div>
          <div className="rounded-xl bg-black shadow-lg shadow-red-600">
            <p className=" text-4xl px-5 pt-5 underline underline-offset-8">
              Actors
            </p>
            <p className="text-xl px-3 py-5">{actors}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
