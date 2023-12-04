import { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { useMenuReset } from "../../hooks/useMenuReset";
import MobileMenu from "../nav/MobileMenu";
import DesktopMenu from "../nav/DesktopMenu";
import logo from "/assets/images/logo.png";
import MobileButton from "../nav/MobileButton";

export default function Header() {
  // 'active' is the mobile menu state and 'isMobile' is the screen size state ('isMobile' is not mandatory.).
  const [active, setActive] = useState(false);

  // onClick function that toggles 'active' state of mobile menu.
  const showMobile = () => {
    setActive(!active);
  };

  useMenuReset(setActive);

  // useEffect(() => {
  //   console.log(active);
  // }, [active]);

  // z-index forces element to appear in front of others with lower index than themselves (issue with cards popping over sticky header)
  return (
    <div className="flex sticky top-0 bg-black text-white text-2xl shadow-lg shadow-red-600 z-[1] justify-between">
      <div className="pr-5">
        <Link to="/">
          <img src={logo} className="h-16 ml-5 mt-2 mb-1" alt="" />
        </Link>
      </div>
      <DesktopMenu />
      <MobileButton active={active} showMobile={showMobile} />
      <Transition
        show={active}
        className={"fixed top-[4.8rem] right-0"}
        enter="transition-transform transform duration-500 ease-in-out"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
      >
        <MobileMenu showMobile={showMobile} />
      </Transition>
    </div>
  );
}
