import { useEffect } from "react";
import loader from "../assets/videos/loading_wheel.gif";

const Loader = () => {
  useEffect(() => {
    document.body.className !== "overflow-hidden" &&
      document.body.classList.add("overflow-hidden");

    return () => {
      document.body.className = "";
    };
  }, []);

  return (
    <div className="flex flex-col bg-banner bg-center bg-fixed bg-cover bg-no-repeat h-screen items-center gap-14 text-9xl text-white">
      <img src={loader} alt="" className="mt-20 scale-75" />
    </div>
  );
};

export default Loader;
