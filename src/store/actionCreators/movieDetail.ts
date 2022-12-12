import { Dispatch } from 'redux';
import { Movie } from 'components';

export enum MovieDetailActionTypes {
  SET_MOVIE_DETAIL = 'SET_MOVIE_DETAIL',
  DELETE_MOVIE_DETAIL = 'DELETE_MOVIE_DETAIL'
}

type SetMovieDetailAction = {
  type: MovieDetailActionTypes.SET_MOVIE_DETAIL;
  payload: Movie;
};

type DeleteMovieDetailAction = {
  type: MovieDetailActionTypes.DELETE_MOVIE_DETAIL;
};

export type MovieDetailActions = SetMovieDetailAction | DeleteMovieDetailAction;

export const setMovieDetail = (movie: Movie) => {
  return (dispatch: Dispatch<MovieDetailActions>) => {
    dispatch({
      type: MovieDetailActionTypes.SET_MOVIE_DETAIL,
      payload: movie
    });
  };
};

export const deleteMovieDetail = () => {
  return (dispatch: Dispatch<MovieDetailActions>) => {
    dispatch({
      type: MovieDetailActionTypes.DELETE_MOVIE_DETAIL
    });
  };
};
