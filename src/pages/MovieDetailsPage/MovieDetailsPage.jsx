import { useParams, Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchNewMovieDetails } from '../../Api';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import css from './MovieDetailsPage.module.css';

// https://api.themoviedb.org/3/movie/{movie_id}

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // console.log('movieId', movieId);
    setIsLoading(true);
    async function fetchMovieDetails(movieId) {
      try {
        const data = await fetchNewMovieDetails(movieId);
        // console.log('data', data);
        setMovieDetails(data);
      } catch (error) {
        console.log('Error fetching movie details:', error.message);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieDetails(movieId);
  }, [movieId]);

  return (
    <div className={css.container}>
      {isLoading && <p>Loading...</p>}
      {isError && <ErrorMessage />}

      <h2>{movieDetails.title}</h2>
      {movieDetails.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
      )}
      <p>
        <b>Rating:</b> {movieDetails.vote_average}
      </p>
      <p>
        <b>Description:</b> {movieDetails.overview}
      </p>
      <p>
        <b>Genres:</b> {movieDetails.genres?.map((g) => g.name).join(', ')}
      </p>
      <p>
        <b>Date release:</b> {movieDetails.release_date}
      </p>
      <ul className={css.list}>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
