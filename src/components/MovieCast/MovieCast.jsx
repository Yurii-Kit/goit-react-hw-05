import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import css from './MovieCast.module.css';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { fetchCast } from '../../Api';

// Ключ доступа к API eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjhmMmM4ODM4Njg1ZWViOTVjYzkxNmM5ZWZlNDk5MiIsIm5iZiI6MS43NDczMjczMzc5NTgwMDAyZSs5LCJzdWIiOiI2ODI2MTk2OWI5MGMyN2QwOTVhZGE0ZGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.V6Hj2OprNFx1zVio01lTLmDVI2H5Lsm_ncKtgrjtu14

// Ключ API
//9b8f2c8838685eeb95cc916c9efe4992

//   useEffect(() => {
//     fetch(
//       `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
//       options,
//     )
//       .then((res) => res.json())
//       .then((res) => console.log(res))
//       .catch((err) => console.error(err));
//   }, [movieId]);

//   return <div>MovieCast</div>;
// }
export default function MovieCast() {
  const { movieId } = useParams();
  const key = '9b8f2c8838685eeb95cc916c9efe4992';
  const [cast, setCast] = useState([]);
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
    //     Authorization:
    //       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjhmMmM4ODM4Njg1ZWViOTVjYzkxNmM5ZWZlNDk5MiIsIm5iZiI6MS43NDczMjczMzc5NTgwMDAyZSs5LCJzdWIiOiI2ODI2MTk2OWI5MGMyN2QwOTVhZGE0ZGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.V6Hj2OprNFx1zVio01lTLmDVI2H5Lsm_ncKtgrjtu14',
    //   },
    // };
    // axios
    //   .get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, options)

    //   .then((response) => {
    //     console.log(response.data);
    //     setCast(response.data.cast);
    //     setIsLoading(false);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     setIsError(true);
    //   });

    fetchCast(movieId)
      .then((data) => {
        console.log(data);
        setCast(data);
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
      <ul className={css.movieCastList}>
        {cast.map((actor) => (
          <li key={actor.cast_id || actor.id}>
            {actor.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w92${actor.profile_path}`}
                alt={actor.name}
                width={50}
                height={75}
              />
            )}
            <div>
              <b>{actor.name}</b>
              <div>Character: {actor.character}</div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
