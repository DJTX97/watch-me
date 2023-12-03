import { useEffect } from "react";

// Performs state checks on the mobile menu and the screen size in order to stop the mobile menu from staying open even after resizing the screen (without this the only way to close it is to click the 'X').

interface useMenuResetProps {
    setState: (value: React.SetStateAction<boolean>) => void
}

export const useMenuReset = (setActive: useMenuResetProps["setState"]) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setActive(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
};
