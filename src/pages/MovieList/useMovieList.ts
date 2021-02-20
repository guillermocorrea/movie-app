import { useEffect, useState } from 'react';
import { moviesAgent } from '../../api/movies-agent';
import { Movie } from '../../api/schemas';
import useAppState from '../../store/useAppState';

const filterMoviesByRating = (rating: number, movies: Movie[]) => {
  const upperRating = rating * 2;
  const lowerRating = upperRating - 2;
  return movies.filter(
    ({ vote_average }) =>
      vote_average >= lowerRating && vote_average <= upperRating
  );
};

const useMovieList = () => {
  const {
    state: { movies: allMovies, ratingFilter },
    dispatch,
  } = useAppState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await getDiscoverList();
      if (response === null) {
        setError(true);
        setLoading(false);
        return;
      }
      dispatch!({ type: 'SET_MOVIES', payload: response.results });
      setLoading(false);
    }
    fetchData();
  }, [dispatch]);

  const getDiscoverList = async () => await moviesAgent.getDiscoverList();

  const handleSearch = async (query: string) => {
    const response = await (query === ''
      ? getDiscoverList()
      : moviesAgent.search(query));
    if (response === null) {
      setError(true);
      setLoading(false);
      return;
    }
    dispatch!({ type: 'SET_MOVIES', payload: response.results });
    dispatch!({ type: 'RATING_FILTER_CHANGED', payload: null });
  };

  const handleRatingChange = (rating: number) => {
    dispatch!({ type: 'RATING_FILTER_CHANGED', payload: rating });
  };

  const movies =
    ratingFilter !== null
      ? filterMoviesByRating(ratingFilter, allMovies!)
      : allMovies;

  return { movies, loading, error, dispatch, handleSearch, handleRatingChange };
};

export default useMovieList;
