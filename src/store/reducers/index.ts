import { combineReducers } from 'redux';
import { movieDetailReducer } from './movieDetail';
import { filterBarReducer } from './filterBar';
import { movieListReducer } from './movieList';

export const rootReducer = combineReducers({
  movieList: movieListReducer,
  movieDetail: movieDetailReducer,
  filterBar: filterBarReducer
});
