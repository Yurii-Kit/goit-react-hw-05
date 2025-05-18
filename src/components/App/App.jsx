import css from './App.module.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import HomePage from '../../pages/HomePage/HomePage';
// import MoviesPage from '../../pages/MoviesPage/MoviesPage';
// import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage';
// import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import MovieCast from '../MovieCast/MovieCast';
import MovieReviews from '../MovieReviews/MovieReviews';
import Navigation from '../Navigation/Navigation';
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(
  () => import('../../pages/MovieDetailsPage/MovieDetailsPage'),
);
const NotFoundPage = lazy(
  () => import('../../pages/NotFoundPage/NotFoundPage'),
);

const App = () => {
  return (
    <div className={css.app}>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
