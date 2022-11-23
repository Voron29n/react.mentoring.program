import React from 'react';
import { IMovieItem } from 'components';
import { mapRuntimeToString } from 'services';
import './style.scss';

interface IMovieItemProps {
  movieDetail: IMovieItem;
}

export const MovieDetail = ({ movieDetail }: IMovieItemProps) => {
  const {
    title,
    voteAverage,
    runtime,
    genres,
    releaseDate,
    posterPath,
    overview
  } = movieDetail;

  const genreText = genres?.join(', ');
  const releaseYear = new Date(releaseDate).getFullYear();
  const runtimeFormat = mapRuntimeToString(runtime);

  return (
    <div className='movie__detail__container'>
      <img className='poster__img' src={posterPath} alt={title} />
      <div className='info'>
        <div className={'main__data'}>
          <div className={'title'}>{title}</div>
          <div className={'rating'}>{voteAverage}</div>
        </div>
        <div className={'genre'}>{genreText}</div>
        <div className={'time__data'}>
          <div className={'release '}>{releaseYear}</div>
          <div className={'runtime'}>{runtimeFormat}</div>
        </div>
        <div className={'overview'}>{overview}</div>
      </div>
    </div>
  );
};
