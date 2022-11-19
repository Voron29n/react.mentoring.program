import React from 'react';
import './style.scss';
import { IMovieItem, MovieItem } from 'components/MovieItem/MovieItem';
import { IDropDownItem } from 'components/DropDown/DropDownItem/DropDownItem';

interface IMovieListView {
  movieList: Array<IMovieItem>;
  handleMovieDetail: (movieDetail: IMovieItem) => void;
  handleOpenLightbox: (
    movieItem: IMovieItem,
    lightboxType: IDropDownItem
  ) => void;
}

const MovieListView = ({
  movieList,
  handleMovieDetail,
  handleOpenLightbox
}: IMovieListView) => {
  return (
    <div className="movie__view">
      <div className="movie__count">
        <span>{movieList.length}</span>movies found
      </div>
      <div className={'movie__list'}>
        {movieList &&
          movieList.map(movieItem => (
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
};

export default MovieListView;
