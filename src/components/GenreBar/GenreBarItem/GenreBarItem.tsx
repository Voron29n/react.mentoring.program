import React from 'react';
import './style.scss';
import { IDropDownItem } from 'components/DropDown/DropDownItem/DropDownItem';

interface IGenreItemProps extends IDropDownItem {
  isActive: boolean;
  handleClick: (target: HTMLElement) => void;
}

export const GenreBarItem = ({
  label,
  isActive,
  handleClick
}: IGenreItemProps) => {
  return (
    <li
      className={`genre__item upper__text ${isActive ? 'genre__active' : ''}`}
      onClick={({ target }) => handleClick(target as HTMLElement)}
    >
      {label}
    </li>
  );
};
