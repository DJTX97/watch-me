import { Link } from "react-router-dom";

const DesktopMenu = () => {
  return (
    <nav className="hidden md:flex flex-row-reverse md:flex-row items-center">
      <ul className="flex space-x-5">
        <li>
          <Link
            to="/"
            className={`p-3 font-bold hover:bg-gray-700 transition-color duration-200`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/library"
            className={`p-3 font-bold hover:bg-gray-700 transition-color duration-200`}
          >
            Library
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`p-3 font-bold hover:bg-gray-700 transition-color duration-200`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopMenu;
