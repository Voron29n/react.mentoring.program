import { MoviesAction, MoviesActionTypes, MoviesState } from 'store/types';
import {
  addMovie,
  defaultState,
  deleteMovie,
  editMovie
} from 'store/reducers/movies/utils';

export const moviesReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = defaultState,
  action: MoviesAction
): MoviesState => {
  switch (action.type) {
    case MoviesActionTypes.ADD_MOVIE:
      return {
        loading: false,
        error: null,
        movieList: addMovie(state.movieList, action.payload)
      };
    case MoviesActionTypes.DELETE_MOVIE:
      return {
        loading: false,
        error: null,
        movieList: deleteMovie(state.movieList, action.payload)
      };
    case MoviesActionTypes.EDIT_MOVIE:
      return {
        loading: false,
        error: null,
        movieList: editMovie(state.movieList, action.payload)
      };
    case MoviesActionTypes.FETCH_MOVIES:
      return { loading: true, error: null, movieList: [] };
    case MoviesActionTypes.FETCH_MOVIES_SUCCESS:
      return { loading: false, error: null, movieList: action.payload };
    case MoviesActionTypes.FETCH_MOVIES_ERROR:
      return { loading: false, error: action.payload, movieList: [] };
    default:
      return state;
  }
};
