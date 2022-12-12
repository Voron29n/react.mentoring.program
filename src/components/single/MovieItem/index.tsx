import React, { memo, useCallback, useContext } from 'react';
import { IDropDownItem, MovieView } from 'components';
import { useActions } from 'hooks';
import { ILightboxContext, LightboxContext, MovieActionTypes } from 'context';

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
  const { setMovieDetail } = useActions();
  const { setLightbox, handleLightboxMovieActions } =
    useContext<ILightboxContext>(LightboxContext);

  const handleClick = () => setMovieDetail(movieItem);

  const handleSelectedDropdownItem = useCallback(
    (dropDownItem: IDropDownItem) => {
      handleLightboxMovieActions({
        action: dropDownItem.value as MovieActionTypes,
        movie: movieItem,
        setLightbox
      });
    },
    [movieItem]
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
