import {
  FilterBarActions,
  FilterBarActionTypes,
  setActiveGenre,
  setActiveSortType
} from './filterBar';
import {
  deleteMovieDetail,
  MovieDetailActions,
  MovieDetailActionTypes,
  setMovieDetail
} from './movieDetail';
import {
  addMovie,
  deleteMovie,
  editMovie,
  MovieListActions,
  MovieListActionTypes,
  saveMovieList
} from './movieList';

export {
  FilterBarActions,
  FilterBarActionTypes,
  MovieDetailActions,
  MovieDetailActionTypes,
  MovieListActions,
  MovieListActionTypes
};

export const MoviesActionCreators = {
  setActiveGenre,
  setActiveSortType,
  setMovieDetail,
  deleteMovieDetail,
  saveMovieList,
  editMovie,
  deleteMovie,
  addMovie
};
