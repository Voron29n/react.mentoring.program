import React from 'react';
import './style.scss';

export interface ICardItem {
  id: number;
  title: string;
  genres: Array<string>;
  releaseDate: Date;
  voteAverage: number;
  posterPath: string;
}

interface ICardItemProps {
  cardItem: ICardItem;
}

export const CardItem = ({ cardItem }: ICardItemProps) => {
  const { title, genres, releaseDate, posterPath } = cardItem;
  return (
    <div className={'card__item'}>
      <img src={posterPath} alt="" />
      <div className={'card__item__info'}>
        <div>{title}</div>
        <div className={'card__item__release'}>{releaseDate.getFullYear()}</div>
      </div>
      <div className={'card__item__genre'}>{genres}</div>
    </div>
  );
};
