import React, { memo } from 'react';
import { IDropDownItem } from 'components';
import './style.scss';

interface IGenreItemProps {
  genreBarItem: IDropDownItem;
  isActive: boolean;
  onClick: (target: HTMLElement) => void;
}

const GenreBarItemComponent = ({
  genreBarItem,
  isActive,
  onClick
}: IGenreItemProps) => (
  <li
    className={`genre__item upper__text ${isActive ? 'genre__active' : ''}`}
    onClick={({ target }) => onClick(target as HTMLElement)}
  >
    {genreBarItem.label}
  </li>
);

export const GenreBarItem = memo(GenreBarItemComponent);
