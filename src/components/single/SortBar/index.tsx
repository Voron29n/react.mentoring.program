import React, { memo, useCallback, useState } from 'react';
import { DropDown, IDropDownItem } from 'components';
import { useActions, useTypedSelector } from 'hooks';
import { SORT_BAR } from 'utils';
import sortBarImg from 'images/sortbar.png';
import './style.scss';

const SortBarComponent = () => {
  const [isSelectBarOpen, setIsSelectBarOpen] = useState(false);
  const { activeSortType } = useTypedSelector(state => state.filterBar);
  const { setActiveSortType } = useActions();

  const handleSelectBarClick = () => {
    setIsSelectBarOpen(prevState => !prevState);
  };

  const handleSelectedSortType = useCallback(
    (dropDownItem: IDropDownItem) => {
      setActiveSortType(dropDownItem);
      setIsSelectBarOpen(false);
    },
    [setActiveSortType]
  );

  const dropDownList = SORT_BAR.list.filter(
    ({ label }) => activeSortType.label !== label
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
            onSelected={handleSelectedSortType}
          />
        )}
      </div>
    </div>
  );
};

export const SortBar = memo(SortBarComponent);
