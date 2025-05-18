import css from './MoviesList.module.css';
import { Link, useLocation } from 'react-router-dom';

export default function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <>
      {/* <h1 className={css.title}>Trending today</h1> */}
      <ul className={css.moviesList}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link
              className={css.link}
              to={`/movies/${movie.id}`}
              state={location}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
