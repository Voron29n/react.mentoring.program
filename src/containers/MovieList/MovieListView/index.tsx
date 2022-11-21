import React from 'react';
import { IDropDownItem, IMovieItem, MovieItem } from 'components';
import './style.scss';

interface IMovieListView {
  movieList: Array<IMovieItem>;
  handleMovieDetail: (movieDetail: IMovieItem) => void;
  handleOpenLightbox: (
    movieItem: IMovieItem,
    lightboxType: IDropDownItem
  ) => void;
}

export const MovieListView = ({
  movieList,
  handleMovieDetail,
  handleOpenLightbox
}: IMovieListView) => (
  <div className={'movie__view'}>
    <div className={'movie__count'}>
      <span>{movieList.length}</span>movies found
    </div>
    <div className={'movie__list'}>
      {movieList?.map(movieItem => (
        <MovieItem
          key={movieItem.id}
          movieItem={movieItem}
          handleOpenLightbox={handleOpenLightbox}
          handleMovieDetail={handleMovieDetail}
        />
      ))}
    </div>
  </div>
);
