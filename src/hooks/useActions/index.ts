import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MoviesActionCreators from 'store/actionCreators';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(MoviesActionCreators, dispatch);
};
