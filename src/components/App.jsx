import { useState } from 'react';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Navbar } from './NavBar/NavBar';

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MoviePage = lazy(() => import('./Movies/MoviePage'));
const Reviews = lazy(() => import('./Movies/Reviews'));
const Cast = lazy(() => import('./Movies/Cast'));

export const App = () => {
  const [movies, setMovies] = useState({ page: 1, results: [] });
  const [movieData, setMovieData] = useState({
    id: '',
    info: {},
  });

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/home"
          element={
            <Suspense fallback={<>Loading...</>}>
              <Home movies={movies} setMovies={setMovies} />
            </Suspense>
          }
        ></Route>
        <Route
          path="/movies"
          element={
            <Suspense fallback={<>Loading...</>}>
              <Movies setMovieData={setMovieData} />
            </Suspense>
          }
        >
          <Route
            path=":movieid"
            element={
              <Suspense fallback={<>Loading...</>}>
                <MoviePage movieInfo={movieData.info} />
              </Suspense>
            }
          >
            <Route
              path="reviews"
              element={
                <Suspense fallback={<>Loading...</>}>
                  <Reviews movieId={movieData.id} />
                </Suspense>
              }
            ></Route>
            <Route
              path="cast"
              element={
                <Suspense fallback={<>Loading...</>}>
                  <Cast movieId={movieData.id} />
                </Suspense>
              }
            ></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
