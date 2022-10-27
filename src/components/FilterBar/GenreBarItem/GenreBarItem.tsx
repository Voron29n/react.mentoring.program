import React from 'react';
import './style.scss';

export interface IGenreBarItem {
  label: string;
}

interface IGenreItemProps extends IGenreBarItem {
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
