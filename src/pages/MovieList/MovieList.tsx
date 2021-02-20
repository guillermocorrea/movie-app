import React from 'react';
import MovieCard from '../../components/MovieCard';
import RatingFilter from '../../components/RatingFilter';
import SearchBar from '../../components/SearchBar';
import styles from './MovieList.module.css';
import useMovieList from './useMovieList';

const MovieList = () => {
  const {
    movies,
    handleRatingChange,
    handleSearch,
    loading,
    error,
  } = useMovieList();

  if (loading) return <div>Loading...</div>;
  if (error)
    return <div>Oops! there was an error, please try again later.</div>;

  return (
    <>
      <div className={styles.searchBar}>
        <SearchBar onSearch={handleSearch} />
        <RatingFilter onRatingChange={handleRatingChange} />
      </div>
      <div className={styles.list}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default MovieList;
