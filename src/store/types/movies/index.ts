import { Movie } from 'components';

export interface MoviesState {
  movieList: Array<Movie>;
  loading: boolean;
  error: null | string;
}

export enum MoviesActionTypes {
  ADD_MOVIE = 'ADD_MOVIE',
  DELETE_MOVIE = 'DELETE_MOVIE',
  EDIT_MOVIE = 'EDIT_MOVIE',
  FETCH_MOVIES = 'FETCH_MOVIES',
  FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS',
  FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR'
}

export interface AddMovieAction {
  type: MoviesActionTypes.ADD_MOVIE;
  payload: Movie;
}

export interface DeleteMovieAction {
  type: MoviesActionTypes.DELETE_MOVIE;
  payload: number;
}

export interface EditMovieAction {
  type: MoviesActionTypes.EDIT_MOVIE;
  payload: Movie;
}

export interface FetchMovieAction {
  type: MoviesActionTypes.FETCH_MOVIES;
}

interface FetchMovieSuccessAction {
  type: MoviesActionTypes.FETCH_MOVIES_SUCCESS;
  payload: Array<Movie>;
}

export interface FetchMovieErrorAction {
  type: MoviesActionTypes.FETCH_MOVIES_ERROR;
  payload: string;
}

export type MoviesAction =
  | AddMovieAction
  | DeleteMovieAction
  | EditMovieAction
  | FetchMovieAction
  | FetchMovieSuccessAction
  | FetchMovieErrorAction;
