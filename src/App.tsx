import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Library from './pages/Library'
import Movie from './pages/Movie'
import Contact from './pages/Contact'
import SubmitConfirm from './pages/SubmitConfirm'
import Error from './pages/Error'
import ScrollToTop from './components/ScrollToTop'
import Loader from './components/Loader'

export default function App() {

  // Importing the data here is necessary to also pass it to the search bar located in the header (data flow: parent->child).


  return (
    <div>
      <Header />
      <ScrollToTop>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="library" element={<Library />} />
            <Route path="library/movie" element={<Movie />} />
            <Route path="contact" element={<Contact />} />
            <Route path="contact/confirmation" element={<SubmitConfirm />} />
            <Route path="*" element={<Error />} />
            {/* <Route path="/loader" element={<Loader />} /> */}
          </Routes>
        </Suspense>
      </ScrollToTop>
    </div>
  )
}

