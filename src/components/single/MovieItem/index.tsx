import React, { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IDropDownItem, MovieView } from 'components';
import { lightboxActions, LightboxActionTypes } from 'context';
import { useActions, useLightboxContext } from 'hooks';

export type Movie = {
  id: number;
  title: string;
  genres: Array<string>;
  releaseDate: string;
  voteAverage: number;
  posterPath: string;
  runtime: number;
  overview: string;

  [key: string]: string | number | Array<string>;
};

export enum MovieKey {
  ID = 'id',
  TITLE = 'title',
  DATE = 'releaseDate',
  RATING = 'voteAverage',
  RUNTIME = 'runtime',
  MOVIE_URL = 'posterPath',
  GENRE = 'genres',
  OVERVIEW = 'overview'
}

interface IMovieItemProps {
  movieItem: Movie;
}

const MovieItemMemo = ({ movieItem }: IMovieItemProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { setMovieDetail } = useActions();
  const { dispatch } = useLightboxContext();

  const handleClick = useCallback(
    () => setMovieDetail(movieItem, searchParams, setSearchParams),
    [movieItem, searchParams, setSearchParams]
  );

  const handleSelectedDropdownItem = useCallback(
    (dropDownItem: IDropDownItem) => {
      if (dropDownItem.value === LightboxActionTypes.EDIT_MOVIE_FORM) {
        dispatch(lightboxActions.editMovie(movieItem));
      } else if (dropDownItem.value === LightboxActionTypes.DELETE_MOVIE) {
        dispatch(lightboxActions.deleteMovie(movieItem));
      }
    },
    [dispatch, movieItem]
  );

  return (
    <MovieView
      movieItem={movieItem}
      handleClick={handleClick}
      handleSelectedDropdownItem={handleSelectedDropdownItem}
    />
  );
};

export const MovieItem = memo(MovieItemMemo);
