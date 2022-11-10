import React, { useState } from 'react';
import DropDown from 'components/SortBar/DropDown/DropDown';
import './style.scss';
import { SORT_BAR } from 'utils/constant';

const SortBar = () => {
  const [activeSortItem, selectActiveSortItem] = useState(SORT_BAR.list[0]);

  const sortBarList = SORT_BAR.list;
  const label = SORT_BAR.label;

  return (
    <div className={`sort__bar__container`}>
      <div className={'sort__bar__label upper__text'}>{label}</div>
      <DropDown
        activeSortItem={activeSortItem}
        sortBarList={sortBarList}
        selectActiveSortItem={selectActiveSortItem}
      />
    </div>
  );
};

export default SortBar;
