import React from 'react';
import './style.scss';
import { IMovieItem } from 'components/MovieItem/MovieItem';

interface IMovieItemProps {
  movieItem: IMovieItem;
  actionBar: JSX.Element;
  handleOut: (event: React.MouseEvent) => void;
}

export const MovieView = ({
  movieItem,
  actionBar,
  handleOut
}: IMovieItemProps) => {
  const { title, genres, releaseDate, posterPath } = movieItem;
  const genreText = genres.join(', ');

  return (
    <div className={'movie__item__container'}>
      <div className={'item'} onMouseOut={handleOut}>
        <img src={posterPath} alt="" />
        <div className={'info'}>
          <div>{title}</div>
          <div className={'release'}>{new Date(releaseDate).getFullYear()}</div>
        </div>
        <div className={'genre'}>{genreText}</div>
      </div>
      {actionBar}
    </div>
  );
};
