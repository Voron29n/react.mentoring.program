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
import {
  SearchMoviesActions,
  SearchMoviesActionTypes,
  setActiveGenre,
  setActiveSortType,
  setSearchText
} from './searchMovies';

export {
  SearchMoviesActions,
  SearchMoviesActionTypes,
  MovieDetailActions,
  MovieDetailActionTypes,
  MovieListActions,
  MovieListActionTypes
};

export const MoviesActionCreators = {
  setActiveGenre,
  setActiveSortType,
  setSearchText,
  setMovieDetail,
  deleteMovieDetail,
  saveMovieList,
  editMovie,
  deleteMovie,
  addMovie
};
