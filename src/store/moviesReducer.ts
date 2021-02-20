import { Movie } from '../api/schemas';

export interface AppState {
  movies: Movie[];
  selectedMovie: Movie | null;
  searchQuery?: string;
  ratingFilter: number | null;
}

type LoadMoviesAction = {
  type: 'SET_MOVIES';
  payload: Movie[];
};

type SelectedMovieAction = {
  type: 'SELECTED_MOVIE';
  payload: Movie;
};

type SearchQueryAction = {
  type: 'SEARCH_QUERY_CHANGED';
  payload: string;
};

type RatingFilterAction = {
  type: 'RATING_FILTER_CHANGED';
  payload: number | null;
};

export type Actions =
  | LoadMoviesAction
  | SelectedMovieAction
  | SearchQueryAction
  | RatingFilterAction;

const moviesReducer = (state: AppState, action: Actions): AppState => {
  switch (action.type) {
    case 'SET_MOVIES':
      return { ...state, movies: action.payload };
    case 'SELECTED_MOVIE':
      return { ...state, selectedMovie: action.payload };
    case 'SEARCH_QUERY_CHANGED':
      return { ...state, searchQuery: action.payload };
    case 'RATING_FILTER_CHANGED':
      return { ...state, ratingFilter: action.payload };
    default:
      return state;
  }
};

export default moviesReducer;
