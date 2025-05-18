import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import css from './MovieReviews.module.css';
import { fetchReviews } from '../../Api';

export default function MovieReviews() {
  const { movieId } = useParams();
  const key = '9b8f2c8838685eeb95cc916c9efe4992';
  const [reviews, setReviews] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // const options = {
    //   method: 'GET',
    //   params: {
    //     api_key: key,
    //   },
    //   headers: {
    //     accept: 'application/json',
    // Authorization:
    //   'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjhmMmM4ODM4Njg1ZWViOTVjYzkxNmM5ZWZlNDk5MiIsIm5iZiI6MS43NDczMjczMzc5NTgwMDAyZSs5LCJzdWIiOiI2ODI2MTk2OWI5MGMyN2QwOTVhZGE0ZGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.V6Hj2OprNFx1zVio01lTLmDVI2H5Lsm_ncKtgrjtu14',
    //   },
    // };
    // axios
    //   .get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, options)
    fetchReviews(movieId)
      .then((data) => {
        console.log(data);
        setReviews(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  }, [movieId, key]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <ErrorMessage />}
      {reviews.length === 0 && <p>Reviews don't exist yet...</p>}
      {reviews.length > 0 && (
        <ul className={css.movieReviewsList}>
          {reviews.map((review) => (
            <li key={review.id} className={css.movieReviewItem}>
              <b>Author: {review.author}</b>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
