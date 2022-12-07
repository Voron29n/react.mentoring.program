import { Movie } from 'components';

export interface MovieDetailState {
  movieDetail: Movie;
}

export enum MovieDetailActionTypes {
  SET_MOVIE_DETAIL = 'SET_MOVIE_DETAIL',
  DELETE_MOVIE_DETAIL = 'DELETE_MOVIE_DETAIL'
}

export interface SetMovieDetailAction {
  type: MovieDetailActionTypes.SET_MOVIE_DETAIL;
  payload: Movie;
}

export interface DeleteMovieDetailAction {
  type: MovieDetailActionTypes.DELETE_MOVIE_DETAIL;
}

export type MovieDetailAction = SetMovieDetailAction | DeleteMovieDetailAction;
