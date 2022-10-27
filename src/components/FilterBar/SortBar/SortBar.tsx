import React, { Dispatch } from 'react';
import { ISortBarItem } from '$components/FilterBar/SortBarItem/SortBarItem';
import SortBarDropDown from '$components/FilterBar/DropDown/SortBarDropDown';
import './style.scss';

interface ISortBarList {
  activeSortItem: ISortBarItem;
  selectActiveSortItem: Dispatch<any>;
  label: string;
  sortBarList: Array<ISortBarItem>;
}

const SortBar = ({
  activeSortItem,
  selectActiveSortItem,
  label,
  sortBarList
}: ISortBarList) => {
  return (
    <div className={`sort__bar__container`}>
      <div className={'sort__bar__label upper__text'}>{label}</div>
      <SortBarDropDown
        activeSortItem={activeSortItem}
        sortBarList={sortBarList}
        selectActiveSortItem={selectActiveSortItem}
      />
    </div>
  );
};

export default SortBar;
