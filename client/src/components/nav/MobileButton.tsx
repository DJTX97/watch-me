import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

interface MobileButtonProps {
    active: boolean;
    showMobile: () => void;
}

export default function MobileButton({active, showMobile}: MobileButtonProps) {
  return (
    <button className={`md:hidden`} onClick={showMobile}>
      {!active ? (
        <GiHamburgerMenu color="white" className="w-10 h-10 mx-6" />
      ) : (
        <AiOutlineClose color="white" className="w-10 h-10 mx-6" />
      )}
    </button>
  );
}
