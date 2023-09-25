import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";

const MobileMenu = ({ showMobile }) => {
  const [touchedHome, setTouchedHome] = useState(false);
  const [touchedLibrary, setTouchedLibrary] = useState(false);
  const [touchedContact, setTouchedContact] = useState(false);

  const touchHome = () => {
    setTouchedHome(!touchedHome);
  };

  const touchLibrary = () => {
    setTouchedLibrary(!touchedLibrary);
  };

  const touchContact = () => {
    setTouchedContact(!touchedContact);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      touchedHome && setTouchedHome(false);
      touchedLibrary && setTouchedLibrary(false);
      touchedContact && setTouchedContact(false);
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, [touchedHome, touchedLibrary, touchedContact]);

  return (
    <div
      className={`flex flex-col items-center fixed top-0 right-0 h-screen md:hidden bg-black/50`}
    >
      <nav className="flex flex-col gap-5 items-center">
        <button className={`px-4 hover:bg-red-800`} onClick={showMobile}>
          <AiOutlineClose size={80} color="white" className="p-5" />
        </button>

        <ul className="flex flex-col gap-3 w-full text-white text-xl uppercase items-center">
          <li className="w-full flex text-center">
            <Link
              className={`w-full py-4 hover:bg-red-800 ${
                touchedHome && "bg-red-800"
              }`}
              to="/"
              onTouchStart={touchHome}
              onClick={showMobile}
            >
              Home
            </Link>
          </li>
          <li className="w-full flex text-center">
            <Link
              className={`w-full py-4 hover:bg-red-800 ${
                touchedLibrary && "bg-red-800"
              }`}
              to="/library"
              onTouchStart={touchLibrary}
              onClick={showMobile}
            >
              Library
            </Link>
          </li>
          <li className="w-full flex text-center">
            <Link
              className={`w-full py-4 hover:bg-red-800 ${
                touchedContact && "bg-red-800"
              }`}
              to="/contact"
              onTouchStart={touchContact}
              onClick={showMobile}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
