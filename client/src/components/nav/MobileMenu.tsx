import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { pages } from "../../nav_routes.json";

interface MobileMenuProps {
  showMobile: () => void;
}

export default function MobileMenu({ showMobile }: MobileMenuProps) {
  return (
    <div
      className={`flex flex-col items-center h-screen md:hidden bg-black/50`}
    >
      <nav>
        <ul className="flex flex-col gap-3 w-full pt-5 text-white text-lg uppercase items-center">
          {pages.map((page, index) => (
            <li key={index} className="w-full flex text-center">
              <Link
                className={`w-full px-2 py-4`}
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
}
