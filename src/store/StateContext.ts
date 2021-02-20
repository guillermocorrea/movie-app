import React from 'react';
import { AppState, Actions } from './moviesReducer';

type ContextProps = {
  state: AppState;
  dispatch: React.Dispatch<Actions>;
};

const StateContext = React.createContext<Partial<ContextProps>>({});

export default StateContext;
