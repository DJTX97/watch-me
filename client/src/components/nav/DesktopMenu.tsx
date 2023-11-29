import { Link } from "react-router-dom";
import { pages } from "../../nav_routes.json";

const DesktopMenu = () => {
  return (
    <nav className="hidden md:flex flex-row-reverse md:flex-row items-center">
      <ul className="flex space-x-5">
        {pages.map((page, index) => (
          <li key={index}>
            <Link
              to={page.path}
              className={`p-3 font-bold hover:bg-gray-700 transition-color duration-200`}
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopMenu;
