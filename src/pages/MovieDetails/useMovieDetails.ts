import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { moviesAgent } from '../../api/movies-agent';
import { Movie } from '../../api/schemas';

type Params = {
  movieId: string;
};

const useMovieDetails = () => {
  const { movieId } = useParams<Params>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const movie = await moviesAgent.getMovie(movieId);
        setMovie(movie);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    }
    fetchData();
  }, [movieId]);

  return { movie, loading, error };
};

export default useMovieDetails;
