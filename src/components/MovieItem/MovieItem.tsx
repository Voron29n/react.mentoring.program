import React, { useCallback } from 'react';
import { IDropDownItem } from 'components/DropDown/DropDownItem/DropDownItem';
import { MovieView } from 'components/MovieItem/MovieView/MovieView';

/**
 * Movie Item keys is enum
 */
enum MovieItemKey {
  TITLE = 'title',
  DATE = 'releaseDate',
  RATING = 'voteAverage',
  RUNTIME = 'runtime',
  MOVIE_URL = 'posterPath',
  GENRE = 'genres',
  OVERVIEW = 'overview'
}

interface IMovieItem {
  [key: string]: string | number | Array<string>;
  id: number;
  title: string;
  genres: Array<string>;
  releaseDate: string;
  voteAverage: number;
  posterPath: string;
  runtime: number;
  overview: string;
}

interface IMovieItemProps {
  movieItem: IMovieItem;
  handleMovieDetail: (movieDetail: IMovieItem) => void;
  handleOpenLightbox: (
    movieItem: IMovieItem,
    lightboxType: IDropDownItem
  ) => void;
}

const MovieItem = ({
  movieItem,
  handleMovieDetail,
  handleOpenLightbox
}: IMovieItemProps) => {
  const handleClick = () => {
    handleMovieDetail(movieItem);
  };

  const handleSelectedDropdownItem = useCallback(
    (dropDownItem: IDropDownItem) => {
      handleOpenLightbox(movieItem, dropDownItem);
    },
    [handleOpenLightbox, movieItem]
  );

  return (
    <>
      <MovieView
        movieItem={movieItem}
        handleClick={handleClick}
        handleSelectedDropdownItem={handleSelectedDropdownItem}
      />
    </>
  );
};

export { IMovieItem, MovieItemKey, MovieItem };
