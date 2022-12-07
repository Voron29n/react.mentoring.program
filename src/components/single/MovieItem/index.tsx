import React, { useCallback } from 'react';
import { IDropDownItem, MovieView } from 'components';
import { useActions } from 'hooks';
import { handleDeleteAction, handleEditAction } from './utils';

export interface Movie {
  id: number;
  title: string;
  genres: Array<string>;
  releaseDate: string;
  voteAverage: number;
  posterPath: string;
  runtime: number;
  overview: string;

  [key: string]: string | number | Array<string>;
}

export enum MovieKey {
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

export const MovieItem = ({ movieItem }: IMovieItemProps) => {
  const {
    setMovieDetail,
    deleteMovies,
    editMovies,
    openLightbox,
    closeLightbox
  } = useActions();

  const handleClick = () => setMovieDetail(movieItem);

  const handleSelectedDropdownItem = useCallback(
    (lightboxType: IDropDownItem) => {
      if (lightboxType.label === 'delete') {
        handleDeleteAction(
          movieItem,
          deleteMovies,
          openLightbox,
          closeLightbox
        );
      } else {
        handleEditAction(movieItem, editMovies, openLightbox, closeLightbox);
      }
    },
    [closeLightbox, deleteMovies, editMovies, openLightbox]
  );

  return (
    <MovieView
      movieItem={movieItem}
      handleClick={handleClick}
      handleSelectedDropdownItem={handleSelectedDropdownItem}
    />
  );
};
