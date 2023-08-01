import { combineReducers } from 'redux';
import { movieDetailReducer } from './movieDetail';
import { movieListReducer } from './movieList';
import { searchMoviesReducer } from './searchMovies';

export const rootReducer = combineReducers({
  movieList: movieListReducer,
  movieDetail: movieDetailReducer,
  searchMovies: searchMoviesReducer
});
