import React, { useCallback, useState } from 'react';
import { DropDown } from 'components/DropDown/DropDown';
import { MOVIE_ACTION } from 'utils/constant';
import movieAction from 'images/movieAction.svg';
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

const movieActionClass = 'actions';
const dropDownClass = ['movie__item__drop-down', movieActionClass];

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
  handleOpenLightbox: (
    movieItem: IMovieItem,
    lightboxType: IDropDownItem
  ) => void;
}

const MovieItem = ({ movieItem, handleOpenLightbox }: IMovieItemProps) => {
  const [movieActions] = useState(MOVIE_ACTION);
  const [isBarOpen, setIsBarOpen] = useState(false);

  const handleOut = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    const isInnerElement =
      Array.from(target.classList).filter(className =>
        dropDownClass.includes(className)
      ).length !== 0;

    if (!isInnerElement) {
      setIsBarOpen(false);
    }
  };

  const handleActionClick = () => {
    setIsBarOpen(true);
  };

  const handleSelectedDropdownItem = useCallback(
    (dropDownItem: IDropDownItem) => {
      setIsBarOpen(true);
      handleOpenLightbox(movieItem, dropDownItem);
    },
    [handleOpenLightbox, movieItem]
  );

  const actionBar = (
    <>
      {isBarOpen ? (
        <DropDown
          isCloseIcon={true}
          classNames={dropDownClass}
          selectList={movieActions}
          setSelectedItem={handleSelectedDropdownItem}
          setIsBarOpen={setIsBarOpen}
        />
      ) : (
        <img
          className={movieActionClass}
          src={movieAction}
          alt={'actions'}
          onClick={handleActionClick}
        />
      )}
    </>
  );

  return (
    <>
      <MovieView
        movieItem={movieItem}
        actionBar={actionBar}
        handleOut={handleOut}
      />
    </>
  );
};

export { IMovieItem, MovieItemKey, MovieItem };
