import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOverflow } from "../../hooks/useOverflow";

export default function Error() {
  useOverflow(false);

  const [touchedBack, setTouchedBack] = useState(false);

  const touchBack = () => {
    setTouchedBack(!touchedBack);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      touchedBack && setTouchedBack(false);
    }, 200);
    return () => {
      clearInterval(interval);
    };
  }, [touchedBack]);

  const goBack = useNavigate();

  const handleClick = () => {
    goBack("/");
  };

  return (
    <div className="flex flex-col bg-banner bg-center bg-fixed bg-cover bg-no-repeat h-screen items-center gap-14 text-white">
      <div className="text-6xl md:text-7xl mt-28 select-none text-center">
        Oops! Something went wrong!
      </div>
      <button
        className={`w-52 rounded-xl bg-black shadow-lg shadow-red-600 p-5 hover:bg-gray-700 text-4xl cursor-pointer ${
          touchedBack && "bg-gray-700"
        }`}
        onClick={handleClick}
        onTouchStart={touchBack}
      >
        Go back
      </button>
    </div>
  );
}
