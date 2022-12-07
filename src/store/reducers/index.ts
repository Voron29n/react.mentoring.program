import { combineReducers } from 'redux';
import { moviesReducer } from 'store/reducers/movies';
import { movieDetailReducer } from 'store/reducers/movieDetail';
import { lightboxReducer } from 'store/reducers/lightbox';
import { filterBarReducer } from 'store/reducers/filterBar';

export const rootReducer = combineReducers({
  movieList: moviesReducer,
  movieDetail: movieDetailReducer,
  lightbox: lightboxReducer,
  filterBar: filterBarReducer
});
