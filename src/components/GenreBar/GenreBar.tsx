import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
import './style.scss';
import { GenreBarItem } from 'components/GenreBar/GenreBarItem/GenreBarItem';
import { GENRE_BAR } from 'utils/const/viewComponents';
import { IDropDownItem } from 'components/DropDown/DropDownItem/DropDownItem';

interface IGenreBar {
  activeGenre: IDropDownItem;
  setActiveGenre: Dispatch<SetStateAction<IDropDownItem>>;
}
const GenreBar = ({ activeGenre, setActiveGenre }: IGenreBar) => {
  const [activeLineStyle, setActiveLineStyle] = useState(null);

  const handleClick = useCallback(
    (target: HTMLElement, newLabel: string) => {
      setActiveLineStyle({
        width: target.offsetWidth,
        marginLeft: target.offsetLeft
      });
      setActiveGenre({ label: newLabel });
    },
    [setActiveGenre]
  );

  const genreList = GENRE_BAR.slice(0, 5).map(({ label }) => (
    <GenreBarItem
      label={label}
      isActive={label === activeGenre?.label}
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
