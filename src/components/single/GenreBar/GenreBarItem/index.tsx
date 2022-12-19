import React, { ForwardedRef, forwardRef, memo } from 'react';
import { IDropDownItem } from 'components';
import './style.scss';

interface IGenreItemProps {
  genreBarItem: IDropDownItem;
  isActive: boolean;
  onClick: (genreBarItem: IDropDownItem) => void;
}

const GenreBarItemComponent = forwardRef(
  (
    { genreBarItem, isActive, onClick }: IGenreItemProps,
    ref: ForwardedRef<any>
  ) => (
    <li
      ref={isActive ? ref : null}
      className={`genre__item upper__text ${isActive ? 'genre__active' : ''}`}
      onClick={() => onClick(genreBarItem)}
    >
      {genreBarItem.label}
    </li>
  )
);

export const GenreBarItem = memo(GenreBarItemComponent);
