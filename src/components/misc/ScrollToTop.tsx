
import { useEffect } from "react";
import { useLocation } from "react-router";

// This component makes it so that individual movie pages always open from the top on every route change, rather than opening on the last known position.

const ScrollToTop = ({children}: {children: JSX.Element}) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};

export default ScrollToTop;
