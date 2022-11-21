import React, { Dispatch, SetStateAction, useState } from 'react';
import { DropDown, IDropDownItem } from 'components';
import { SORT_BAR } from 'utils/const';
import sortBarImg from 'images/sortbar.png';
import './style.scss';

const SORT_BAR_LIST = SORT_BAR.list;
const SORT_BAR_LABEL = SORT_BAR.labelText;

interface ISortBar {
  activeSortType: IDropDownItem;
  setActiveSortType: Dispatch<SetStateAction<IDropDownItem>>;
}

export const SortBar = ({ activeSortType, setActiveSortType }: ISortBar) => {
  const [isBarOpen, setIsBarOpen] = useState(false);
  const dropDownClassName = ['sort__bar__drop-down'];

  const handleSelectClick = () => {
    setIsBarOpen(prevState => !prevState);
  };

  const dropDownList = SORT_BAR_LIST.filter(
    ({ label }) => activeSortType.label !== label
  );

  return (
    <div className={`sort__bar__container upper__text`}>
      <div className={'label'}>{SORT_BAR_LABEL}</div>
      <div>
        <div className={'select'} onClick={handleSelectClick}>
          <div className={`active__item`}>{activeSortType.label}</div>
          <img
            className={`select__img ${isBarOpen ? 'img__flip' : ''}`}
            alt={isBarOpen ? 'close' : 'open'}
            src={sortBarImg}
          />
        </div>
        {isBarOpen && (
          <DropDown
            classNames={dropDownClassName}
            selectList={dropDownList}
            setSelectedItem={setActiveSortType}
            setIsBarOpen={setIsBarOpen}
          />
        )}
      </div>
    </div>
  );
};
