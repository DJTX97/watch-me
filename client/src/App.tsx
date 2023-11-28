import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/core/Header";
import Home from "./components/pages/Home";
import Library from "./components/pages/Library";
import Movie from "./components/pages/Movie";
import Contact from "./components/pages/Contact";
import SubmitConfirm from "./components/pages/SubmitConfirm";
import Error from "./components/pages/Error";
import ScrollToTop from "./components/misc/ScrollToTop";
import Loader from "./components/misc/Loader";
import { useMovies } from "./hooks/useMovies";

export default function App() {
  useMovies();

  return (
    <div className="bg-banner bg-cover bg-center bg-fixed bg-no-repeat">
      <Header />
      <ScrollToTop>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/library/movie" element={<Movie />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/confirmation" element={<SubmitConfirm />} />
            <Route path="*" element={<Error />} />
            {/* <Route path="/loader" element={<Loader />} /> */}
          </Routes>
        </Suspense>
      </ScrollToTop>
    </div>
  );
}
