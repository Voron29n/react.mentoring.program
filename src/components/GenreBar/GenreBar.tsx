import React, { useState } from 'react';
import './style.scss';
import { GenreBarItem } from 'components/GenreBar/GenreBarItem/GenreBarItem';
import { GENRE_BAR } from 'utils/constant';

const GenreBar = () => {
  const [activeLineStyle, setActiveLineStyle] = useState(null);
  const [activeGenreItem, selectActiveGenreItem] = useState(GENRE_BAR[0]);

  const handleClick = (target: HTMLElement, newLabel: string) => {
    selectActiveGenreItem({ label: newLabel });
    setActiveLineStyle({
      width: target.offsetWidth,
      marginLeft: target.offsetLeft
    });
  };

  const genreList = GENRE_BAR.map(({ label }) => (
    <GenreBarItem
      label={label}
      isActive={label === activeGenreItem?.label}
      key={label}
      handleClick={target => handleClick(target, label)}
    />
  ));

  return (
    <>
      <ul className={'genre__list'}>{genreList}</ul>
      <div className={'filter__bar__line'}>
        <div
          style={activeLineStyle}
          className={'filter__bar__active__line'}
        ></div>
      </div>
    </>
  );
};

export default GenreBar;
