import { Dispatch } from 'redux';
import {
  MovieDetailAction,
  MovieDetailActionTypes
} from 'store/types/movieDetail';
import { Movie } from 'components';

export const setMovieDetail = (movie: Movie) => {
  return (dispatch: Dispatch<MovieDetailAction>) => {
    dispatch({
      type: MovieDetailActionTypes.SET_MOVIE_DETAIL,
      payload: movie
    });
  };
};

export const deleteMovieDetail = () => {
  return (dispatch: Dispatch<MovieDetailAction>) => {
    dispatch({
      type: MovieDetailActionTypes.DELETE_MOVIE_DETAIL
    });
  };
};
