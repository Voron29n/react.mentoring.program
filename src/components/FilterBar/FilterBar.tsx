import React, { useEffect, useState } from 'react';
import GenreBarList from '$components/FilterBar/GenreBarList/GenreBarList';
import SortBar from '$components/FilterBar/SortBar/SortBar';
import { GENRE_BAR, SORT_BAR } from '$utils/constant';
import './style.scss';

const FilterBar = () => {
  const [activeSortItem, selectActiveSortItem] = useState(null);
  const [activeGenreItem, selectActiveGenreItem] = useState(null);
  const [activeLineStyle, setActiveLineStyle] = useState(null);

  useEffect(() => {
    selectActiveSortItem(SORT_BAR.list[0]);
    selectActiveGenreItem(GENRE_BAR[0]);
  }, []);

  return (
    <div className={'filter__bar'}>
      <div className={'filter__bar__container'}>
        {activeGenreItem && (
          <GenreBarList
            genreList={GENRE_BAR}
            activeGenreItem={activeGenreItem}
            selectGenreList={selectActiveGenreItem}
            setActiveLineStyle={setActiveLineStyle}
          />
        )}
        {activeSortItem && (
          <SortBar
            label={SORT_BAR.label}
            sortBarList={SORT_BAR.list}
            activeSortItem={activeSortItem}
            selectActiveSortItem={selectActiveSortItem}
          />
        )}
      </div>
      <div className={'filter__bar__line'}>
        <div
          style={activeLineStyle}
          className={'filter__bar__active__line'}
        ></div>
      </div>
    </div>
  );
};

export default FilterBar;
