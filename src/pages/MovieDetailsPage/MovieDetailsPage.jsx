import { useParams } from 'react-router-dom';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  console.log(movieId);
  return <div>MovieDetailsPage: {movieId}</div>;
}
