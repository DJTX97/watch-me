
import { useEffect } from "react";
import { useLocation } from "react-router";

// This component makes it so that individual movie pages always open from the top on every route change, rather than opening on the last known position.

const ScrollToTop = (props:any) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
