
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.body.className !== "overflow-hidden" &&
      document.body.classList.add("overflow-hidden");

    return () => {
      document.body.className = "";
    };
  }, []);

  return (
    <div className="flex bg-banner bg-center bg-fixed bg-cover bg-no-repeat h-screen justify-center">
      <p className="text-6xl md:text-8xl lg:text-9xl mt-28 md:mt-40 select-none text-center text-white">
        THE ONLY movie site you'll EVER NEED!
      </p>
    </div>
  );
};

export default Home;
