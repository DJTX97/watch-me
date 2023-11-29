import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { pages } from "../../nav_routes.json";

interface MobileMenuProps {
  showMobile: () => void;
}

const MobileMenu = ({ showMobile }: MobileMenuProps) => {
  return (
    <div
      className={`flex flex-col items-center fixed top-0 right-0 h-screen md:hidden bg-black/50`}
    >
      <nav className="flex flex-col gap-5 items-center">
        <button className={`px-4 hover:bg-red-800`} onClick={showMobile}>
          <AiOutlineClose size={80} color="white" className="p-5" />
        </button>

        <ul className="flex flex-col gap-3 w-full text-white text-xl uppercase items-center">
          {pages.map((page, index) => (
            <li key={index} className="w-full flex text-center">
              <Link
                className={`w-full py-4 hover:bg-red-800`}
                to={page.path}
                onClick={showMobile}
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
