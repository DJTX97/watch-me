import { useEffect } from "react";

export const useOverflow = (show: boolean) => {
  useEffect(() => {
    !show && document.body.classList.add("overflow-hidden");

    return () => {
      document.body.className = "";
    };
  }, []);
};
