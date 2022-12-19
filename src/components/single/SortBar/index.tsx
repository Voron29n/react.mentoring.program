import React, { memo, useState } from 'react';
import { DropDown } from 'components';
import { useActions, useActiveSearchParams, useTypedSelector } from 'hooks';
import { baseApiConfig, SORT_BAR } from 'utils';
import sortBarImg from 'images/sortbar.png';
import './style.scss';

const SortBarComponent = () => {
  const [isSelectBarOpen, setIsSelectBarOpen] = useState(false);
  const { activeSortType } = useTypedSelector(state => state.searchMovies);
  const { setActiveSortType } = useActions();
  const { handleSelectedActive } = useActiveSearchParams(
    () => {
      setIsSelectBarOpen(false);
    },
    baseApiConfig._searchParams.sortBy,
    SORT_BAR.list,
    activeSortType,
    setActiveSortType
  );

  const handleSelectBarClick: () => void = () => {
    setIsSelectBarOpen(prevState => !prevState);
  };

  const dropDownList = SORT_BAR.list.filter(
    ({ value }) => activeSortType.value !== value
  );

  return (
    <div className='sort__bar__container upper__text'>
      <div className='label'>{SORT_BAR.labelText}</div>
      <div>
        <div className='select' onClick={handleSelectBarClick}>
          <div className='active__item'>{activeSortType.label}</div>
          <img
            className={`select__img ${isSelectBarOpen ? 'img__flip' : ''}`}
            alt={isSelectBarOpen ? 'close' : 'open'}
            src={sortBarImg}
          />
        </div>
        {isSelectBarOpen && (
          <DropDown
            classNames={SORT_BAR.dropDownClassName}
            selectList={dropDownList}
            onSelected={handleSelectedActive}
          />
        )}
      </div>
    </div>
  );
};

export const SortBar = memo(SortBarComponent);
