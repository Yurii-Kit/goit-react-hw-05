import SearchBar from '../../components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchNewMoviesByInput } from '../../Api';
import MoviesList from '../../components/MoviesList/MoviesList';

export default function MoviesPage() {
  const [moviesByInput, setMoviesByInput] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const searchQuery = searchParams.get('query') ?? '';
  // console.log('searchQuery', searchQuery);

  const heandleSearch = (inputValue) => {
    console.log('inputValue:', inputValue);
    const nextSearchParams = new URLSearchParams(searchParams);
    nextSearchParams.set('query', inputValue);
    setSearchParams(nextSearchParams);
  };

  useEffect(() => {
    setIsLoading(true);

    async function fetchMoviesByInput() {
      try {
        const newMoviesByInput = await fetchNewMoviesByInput(searchQuery);
        setMoviesByInput(newMoviesByInput);
      } catch (error) {
        console.log('Error fetching trending movies:', error.message);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMoviesByInput();
  }, [searchQuery]);
  return (
    <>
      <SearchBar onSearch={heandleSearch} />
      {isLoading && <p>Loading...</p>}
      {isError && <ErrorMessage />}
      {moviesByInput.length > 0 && <MoviesList movies={moviesByInput} />}
    </>
  );
}
