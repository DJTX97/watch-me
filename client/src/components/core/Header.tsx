import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect, useRef } from "react";

import logo from "/assets/images/logo.png";
import MobileMenu from "../nav/MobileMenu";
import NormalMenu from "../nav/DesktopMenu";

export default function Header() {
  // 'active' is the mobile menu state and 'isMobile' is the screen size state ('isMobile' is not mandatory.).
  const [active, setActive] = useState(false);
  // const [isMobile, setMobile] = useState(false);

  // onClick function that toggles 'active' state of mobile menu.
  const showMobile = () => {
    setActive(!active);
    // console.log(active);
  };

  // Performs state checks on the mobile menu and the screen size in order to stop the mobile menu from staying open even after resizing the screen (without this the only way to close it is to click the 'X').
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setActive(false);
        // setMobile(false);
      }
      // else if (window.innerWidth < 768) {
      //   setMobile(true);
      // }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // This closes mobile menu when clicking on the screen:
  // 1. Define ref.
  // 2. Add ref to hamburger button.
  // 3. Define 'hide' function to check the click event and hide the menu.
  // 4. Bind the 'hide' function to an event listener inside a useEffect.
  const ref = useRef<HTMLButtonElement | null>(null);

  const hide = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", hide);
    //Removing the event listener causes it to not work sometimes (should leave it on for now)
  }, []);

  // z-index forces element to appear in front of others with lower index than themselves (issue with cards popping over sticky header)
  return (
    <div className="flex sticky top-0 bg-black text-white text-2xl shadow-lg shadow-red-600 z-[1] justify-between">
      <div className="pr-5">
        <Link to="/">
          <img src={logo} className="h-16 ml-5 mt-2 mb-1" alt="" />
        </Link>
      </div>

      <div className="flex flex-row-reverse md:flex-row gap-20">
        <NormalMenu />
        {/* <SearchBar /> */}
      </div>

      {/* Hidding hamburger menu when opening the mobile menu is necessary to avoid visual overlap. */}
      <button
        className={`md:hidden ${active && "invisible"}`}
        onClick={showMobile}
        ref={ref}
      >
        <GiHamburgerMenu
          size={70}
          color="white"
          className="p-1 mx-3 cursor-pointer"
        />
      </button>

      {active && <MobileMenu showMobile={showMobile} />}
    </div>
  );
}
