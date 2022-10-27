import React from 'react';
import './style.scss';
import { CardList } from '$components/CardView/CardList/CardList';
import { CARD_LIST } from 'utils/constant';
import { ICardItem } from 'components/CardView/CardItem/CardItem';

const CardView = () => {
  const cardList: Array<ICardItem> = CARD_LIST.map(
    ({ id, title, genres, release_date, vote_average, poster_path }) => {
      return {
        id,
        title,
        genres,
        releaseDate: new Date(release_date),
        voteAverage: vote_average,
        posterPath: poster_path
      };
    }
  );

  return (
    <div className={'card__view'}>
      <div className={'card__count'}>
        <span>{cardList.length}</span>movies found
      </div>
      {cardList && <CardList cardList={cardList} />}
    </div>
  );
};

export default CardView;
