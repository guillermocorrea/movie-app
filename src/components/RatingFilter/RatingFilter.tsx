import React from 'react';
import StarRatings from 'react-star-ratings';
import useAppState from '../../store/useAppState';
import styles from './RatingFilter.module.css';

interface Props {
  onRatingChange: (rating: number) => void;
}

const RatingFilter: React.FC<Props> = ({ onRatingChange }) => {
  const {
    state: { ratingFilter },
    dispatch,
  } = useAppState();

  const handleChangeRating = (rating: number) => {
    dispatch({ type: 'RATING_FILTER_CHANGED', payload: rating });
  };

  return (
    <div>
      <span className={styles.label}>Rating:</span>
      <StarRatings
        {...(ratingFilter && { rating: ratingFilter })}
        changeRating={handleChangeRating}
        name='rating'
        starDimension='25px'
        starSpacing='2px'
        starRatedColor='rgb(230, 67, 47)'
      />
    </div>
  );
};

export default RatingFilter;
