import React from 'react';
import './style.scss';
import { CardItem, ICardItem } from 'components/CardView/CardItem/CardItem';

export interface ICardList {
  cardList: Array<ICardItem>;
}

export const CardList = ({ cardList }: ICardList) => {
  return (
    <div className={'card__list'}>
      {cardList &&
        cardList.map(cardItem => (
          <CardItem key={cardItem.id} cardItem={cardItem} />
        ))}
    </div>
  );
};
