import React from 'react';
import { IDropDownItem } from 'components';
import './style.scss';

interface IGenreItemProps extends IDropDownItem {
  isActive: boolean;
  handleClick: (target: HTMLElement) => void;
}

export const GenreBarItem = ({
  label,
  isActive,
  handleClick
}: IGenreItemProps) => (
  <li
    className={`genre__item upper__text ${isActive ? 'genre__active' : ''}`}
    onClick={({ target }) => handleClick(target as HTMLElement)}
  >
    {label}
  </li>
);
