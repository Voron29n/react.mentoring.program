import React, { Dispatch, useState } from 'react';
import './style.scss';
import {
  ISortBarItem,
  SortBarItem
} from '$components/FilterBar/SortBarItem/SortBarItem';
import sortBarImg from '$images/sortbar.png';

interface ISortBarDropDown {
  activeSortItem: ISortBarItem;
  sortBarList: Array<ISortBarItem>;
  selectActiveSortItem: Dispatch<any>;
}

const SortBarDropDown = ({
  activeSortItem,
  sortBarList,
  selectActiveSortItem
}: ISortBarDropDown) => {
  const [isBarOpen, setIsBarOpen] = useState(false);

  const { label: activeLabel } = activeSortItem;
  const dropDownList = sortBarList
    .filter(({ label }) => activeLabel !== label)
    .map(({ label }) => (
      <SortBarItem
        key={label}
        isActive={false}
        label={label}
        handleClick={newLabel => selectActiveSortItem({ label: newLabel })}
      />
    ));

  return (
    <div
      className={'sort__bar__select'}
      onClick={() => setIsBarOpen(prevState => !prevState)}
    >
      <SortBarItem key={activeLabel} isActive={true} label={activeLabel} />
      <img
        className={`sort__bar__img ${isBarOpen ? 'img__flip' : ''}`}
        alt={isBarOpen ? 'close' : 'open'}
        src={sortBarImg}
      />
      {isBarOpen && <div className={'sort__bar__open'}>{dropDownList}</div>}
    </div>
  );
};

export default SortBarDropDown;
