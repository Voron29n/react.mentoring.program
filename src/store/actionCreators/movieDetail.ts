import { Dispatch } from 'redux';
import { Movie } from 'components';
import { baseApiConfig } from 'utils';

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

export const setMovieDetail = (
  movie: Movie,
  searchParams: URLSearchParams,
  setSearchParams: (searchParams: URLSearchParams) => void
) => {
  if (!!movie && !!searchParams) {
    searchParams.set(baseApiConfig._searchParams.movie, movie.id.toString());
    setSearchParams(searchParams);
  }

  return (dispatch: Dispatch<MovieDetailActions>) => {
    dispatch({
      type: MovieDetailActionTypes.SET_MOVIE_DETAIL,
      payload: movie
    });
  };
};

export const deleteMovieDetail = (
  searchParams: URLSearchParams,
  setSearchParams: (searchParams: URLSearchParams) => void
) => {
  searchParams.delete(baseApiConfig._searchParams.movie);
  setSearchParams(searchParams);

  return (dispatch: Dispatch<MovieDetailActions>) => {
    dispatch({
      type: MovieDetailActionTypes.DELETE_MOVIE_DETAIL
    });
  };
};
