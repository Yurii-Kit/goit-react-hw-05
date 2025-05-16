import css from './MoviesList.module.css';
import { Link } from 'react-router-dom';

export default function MoviesList({ movies }) {
  return (
    <>
      <h1 className={css.title}>Trending today</h1>
      <ul className={css.moviesList}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link className={css.link} to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
