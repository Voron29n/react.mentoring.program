import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { IMovieItem } from 'components/MovieItem/MovieItem';
import { IDropDownItem } from 'components/DropDown/DropDownItem/DropDownItem';
import {
  handleDeleteAction,
  handleEditAction
} from 'containers/MovieList/utils/util';
import { ILightboxProps } from 'containers/Lightbox/Lightbox';
import MovieListView from 'containers/MovieList/MovieListView/MovieListView';

interface IMovieList {
  movieList: Array<IMovieItem>;
  setMovieList: Dispatch<SetStateAction<Array<IMovieItem>>>;
  setMovieDetail: Dispatch<SetStateAction<IMovieItem>>;
  setLightbox: Dispatch<ILightboxProps>;
  setIsLightboxOpen: Dispatch<boolean>;
}

const MovieList = ({
  movieList,
  setMovieList,
  setMovieDetail,
  setLightbox,
  setIsLightboxOpen
}: IMovieList) => {
  const deleteMovie = useCallback(
    ({ id }: IMovieItem) => {
      setMovieList((prevState: Array<IMovieItem>) =>
        prevState.filter(movieItem => movieItem.id !== id)
      );
    },
    [setMovieList]
  );

  const editMovie = useCallback(
    (editMovieItem: IMovieItem) => {
      setMovieList((prevState: Array<IMovieItem>) =>
        prevState.map(movieItem =>
          movieItem.id === editMovieItem.id ? editMovieItem : movieItem
        )
      );
      setIsLightboxOpen(false);
    },
    [setIsLightboxOpen, setMovieList]
  );

  const handleOpenLightbox = useCallback(
    (movieItem: IMovieItem, lightboxType: IDropDownItem) => {
      if (lightboxType.label === 'delete') {
        handleDeleteAction(
          () => deleteMovie(movieItem),
          setLightbox,
          setIsLightboxOpen
        );
      } else {
        handleEditAction(
          movieItem,
          editMovieItem => editMovie(editMovieItem),
          setLightbox,
          setIsLightboxOpen
        );
      }
    },
    [deleteMovie, editMovie, setIsLightboxOpen, setLightbox]
  );

  const handleMovieDetail = useCallback(
    (movieDetail: IMovieItem) => {
      setMovieDetail(movieDetail);
    },
    [setMovieDetail]
  );

  return (
    <>
      <MovieListView
        movieList={movieList}
        handleOpenLightbox={handleOpenLightbox}
        handleMovieDetail={handleMovieDetail}
      />
    </>
  );
};

export default MovieList;
