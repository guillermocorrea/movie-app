import { getPosterMovieImagePath } from '../../util';

import styles from './MovieDetails.module.css';
import useMovieDetails from './useMovieDetails';

const MovieDetails = () => {
  const { movie, loading, error } = useMovieDetails();

  if (loading) return <div>Loading...</div>;
  if (error || movie === null)
    return (
      <div>
        <h2>404 - Movie not found!</h2>
      </div>
    );

  const genres = movie.genres?.map((genre) => genre.name).join(', ') ?? '';

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.poster}>
        <img
          src={getPosterMovieImagePath(movie.poster_path)}
          alt={movie.title}
        />
      </div>
      <div className={styles.details}>
        <h2 className={styles.title}>{movie.title}</h2>
        <h3 className={styles.tagline}>{movie.tagline}</h3>
        <div className={styles.meta}>
          <span>
            <strong>Release date:</strong> {movie.release_date}
          </span>
          <span>
            <strong>Original language:</strong> {movie.original_language}
          </span>
          <span>
            <strong>Genres:</strong> {genres}
          </span>
          <span>
            <strong>Rating:</strong> {movie.vote_average}
          </span>
        </div>
        <h3 className={styles.overviewTitle}>Overview</h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
