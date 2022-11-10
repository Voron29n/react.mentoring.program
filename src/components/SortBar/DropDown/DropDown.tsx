import React, { Dispatch, useState } from 'react';
import './style.scss';
import {
  ISortBarItem,
  SortBarItem
} from 'components/SortBar/SortBarItem/SortBarItem';
import sortBarImg from 'images/sortbar.png';

interface ISortBarDropDown {
  activeSortItem: ISortBarItem;
  sortBarList: Array<ISortBarItem>;
  selectActiveSortItem: Dispatch<object>;
}

const DropDown = ({
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
      className={'drop__down__select'}
      onClick={() => setIsBarOpen(prevState => !prevState)}
    >
      <SortBarItem key={activeLabel} isActive={true} label={activeLabel} />
      <img
        className={`drop__down__img ${isBarOpen ? 'img__flip' : ''}`}
        alt={isBarOpen ? 'close' : 'open'}
        src={sortBarImg}
      />
      {isBarOpen && <div className={'drop__down__open'}>{dropDownList}</div>}
    </div>
  );
};

export default DropDown;
