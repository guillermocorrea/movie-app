import React, { useReducer } from 'react';
import moviesReducer, { AppState } from './moviesReducer';
import StateContext from './StateContext';

const initialState: AppState = {
  movies: [],
  selectedMovie: null,
  ratingFilter: null,
  searchQuery: '',
};

const GlobalStateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(moviesReducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export default GlobalStateProvider;
