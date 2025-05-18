// Ключ доступа к API eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjhmMmM4ODM4Njg1ZWViOTVjYzkxNmM5ZWZlNDk5MiIsIm5iZiI6MS43NDczMjczMzc5NTgwMDAyZSs5LCJzdWIiOiI2ODI2MTk2OWI5MGMyN2QwOTVhZGE0ZGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.V6Hj2OprNFx1zVio01lTLmDVI2H5Lsm_ncKtgrjtu14

// Ключ API
//9b8f2c8838685eeb95cc916c9efe4992
import { useState, useEffect } from 'react';
import { fetchNewTrendMovies } from '../../Api';
import MoviesList from '../../components/MoviesList/MoviesList';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import css from './HomePage.module.css';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // console.log('HomePage useEffect');

    async function fetchTrendMovies() {
      try {
        setIsError(false);
        setIsLoading(true);
        const newTrendMovies = await fetchNewTrendMovies();
        setMovies(newTrendMovies);
      } catch {
        // console.log('Error fetching trending movies:', error.message);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTrendMovies();
  }, []);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <ErrorMessage />}
      <h1 className={css.title}>Trending today</h1>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
}
