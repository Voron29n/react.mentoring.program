import React, { memo, useCallback, useMemo, useState } from 'react';
import { GenreBarItem, IDropDownItem } from 'components';
import { GENRE_BAR } from 'utils';
import './style.scss';
import { useActions, useTypedSelector } from 'hooks';

const GenreBarComponent = () => {
  const [activeLineStyle, setActiveLineStyle] = useState(null);
  const { activeGenre } = useTypedSelector(state => state.filterBar);
  const { setActiveGenre } = useActions();

  const handleClick = useCallback(
    (target: HTMLElement, genreBarItem: IDropDownItem) => {
      setActiveLineStyle({
        width: target.offsetWidth,
        marginLeft: target.offsetLeft
      });
      setActiveGenre(genreBarItem);
    },
    [setActiveGenre]
  );

  const genreList = useMemo(
    () =>
      GENRE_BAR.slice(0, 5).map(genreBarItem => (
        <GenreBarItem
          key={genreBarItem.value}
          genreBarItem={genreBarItem}
          isActive={genreBarItem.value === activeGenre?.value}
          onClick={target => handleClick(target, genreBarItem)}
        />
      )),
    [activeGenre, handleClick]
  );

  return (
    <>
      <ul className='genre__list'>{genreList}</ul>
      <div className='filter__bar__line'>
        <div
          style={activeLineStyle}
          className='filter__bar__active__line'
        ></div>
      </div>
    </>
  );
};

export const GenreBar = memo(GenreBarComponent);
