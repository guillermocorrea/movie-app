import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../../api/schemas';
import { getPreviewMovieImagePath } from '../../util';
import styles from './MovieCard.module.css';

interface Props {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <Link key={movie.id} to={`/movies/${movie.id}`} className={styles.movie}>
      <div>
        <img
          src={getPreviewMovieImagePath(movie.poster_path)}
          alt={movie.title}
        />
        <div className={styles.meta}>
          <h3 className={styles.title}>{movie.title}</h3>
          <span className={styles.date}>{movie.release_date}</span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
