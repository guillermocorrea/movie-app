import { useContext } from 'react';
import StateContext from './StateContext';

const useAppState = () => {
  const { state, dispatch } = useContext(StateContext);
  return { state: state!, dispatch: dispatch! };
};

export default useAppState;
