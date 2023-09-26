import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NormalMenu = () => {
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
    <nav className="hidden md:flex flex-row-reverse md:flex-row items-center">
      <ul className="flex space-x-5">
        <li>
          <Link
            to="/"
            className={`p-3 font-bold hover:bg-gray-700 transition-color duration-200 ${
              touchedHome && "bg-gray-700"
            }`}
            onTouchStart={touchHome}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/library"
            className={`p-3 font-bold hover:bg-gray-700 transition-color duration-200 ${
              touchedLibrary && "bg-gray-700"
            }`}
            onTouchStart={touchLibrary}
          >
            Library
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`p-3 font-bold hover:bg-gray-700 transition-color duration-200 ${
              touchedContact && "bg-gray-700"
            }`}
            onTouchStart={touchContact}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NormalMenu;
