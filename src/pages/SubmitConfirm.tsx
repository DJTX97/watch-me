import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SubmitConfirm = () => {
  useEffect(() => {
    document.body.className !== "overflow-hidden" &&
      document.body.classList.add("overflow-hidden");

    return () => {
      document.body.className = "";
    };
  }, []);

  const location = useLocation();

  useEffect(() => {
    console.log(location.state);
  }, [location.state]);

  return (
    <div className="flex bg-banner bg-center bg-fixed bg-cover bg-no-repeat h-screen justify-center">
      <div className="text-6xl md:text-8xl lg:text-8xl mt-32 select-none text-center text-white">
        Your message was sent successfully!
      </div>
    </div>
  );
};

export default SubmitConfirm;
