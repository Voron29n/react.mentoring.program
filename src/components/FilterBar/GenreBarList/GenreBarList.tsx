import React, { Dispatch } from 'react';
import './style.scss';
import {
  GenreBarItem,
  IGenreBarItem
} from '$components/FilterBar/GenreBarItem/GenreBarItem';

interface IGenreBarList {
  genreList: Array<IGenreBarItem>;
  activeGenreItem: IGenreBarItem;
  selectGenreList: Dispatch<any>;
  setActiveLineStyle: Dispatch<any>;
}

const GenreBarList = ({
  genreList,
  activeGenreItem,
  selectGenreList,
  setActiveLineStyle
}: IGenreBarList) => {
  const handleClick = (target: HTMLElement, newLabel: string) => {
    selectGenreList({ label: newLabel });
    setActiveLineStyle({
      width: target.offsetWidth,
      marginLeft: target.offsetLeft
    });
  };

  return (
    <ul className={'genre__list'}>
      {genreList &&
        genreList.map(({ label }) => (
          <GenreBarItem
            label={label}
            isActive={label === activeGenreItem.label}
            key={label}
            handleClick={target => handleClick(target, label)}
          />
        ))}
    </ul>
  );
};

export default GenreBarList;
