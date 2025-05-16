// Ключ доступа к API eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjhmMmM4ODM4Njg1ZWViOTVjYzkxNmM5ZWZlNDk5MiIsIm5iZiI6MS43NDczMjczMzc5NTgwMDAyZSs5LCJzdWIiOiI2ODI2MTk2OWI5MGMyN2QwOTVhZGE0ZGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.V6Hj2OprNFx1zVio01lTLmDVI2H5Lsm_ncKtgrjtu14

// Ключ API
//9b8f2c8838685eeb95cc916c9efe4992
import { useState, useEffect } from 'react';
import { fetchNewTrendMovies } from '../../Api';
import MoviesList from '../../components/MoviesList/MoviesList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    try {
      async function fetchTrendMovies() {
        const newTrendMovies = await fetchNewTrendMovies();
        console.log(newTrendMovies);

        setMovies(newTrendMovies);
      }
      fetchTrendMovies();
    } catch (error) {
      console.error('Error fetching trending movies:', error);
    }
  }, []);

  return (
    <div>
      <MoviesList movies={movies} />
    </div>
  );
}
