import React, { Dispatch } from 'react';
import closeIcon from 'images/close.png';
import './style.scss';
import {
  DropDownItem,
  IDropDownItem
} from 'components/DropDown/DropDownItem/DropDownItem';

interface IDropDownProps {
  isCloseIcon?: boolean;
  classNames?: Array<string>;
  selectList: Array<IDropDownItem>;
  setSelectedItem: Dispatch<object>;
  setIsBarOpen: Dispatch<boolean>;
}

export const DropDown = ({
  isCloseIcon,
  classNames,
  selectList,
  setSelectedItem,
  setIsBarOpen
}: IDropDownProps) => {
  const handleClick = (value: IDropDownItem) => {
    setSelectedItem(value);
    setIsBarOpen(false);
  };
  const handleCloseIcon = () => {
    setIsBarOpen(false);
  };

  return (
    <div className={`drop__down__container ${classNames.join(' ')}`}>
      {isCloseIcon && (
        <div className={'close__icon'}>
          <img src={closeIcon} onClick={handleCloseIcon} />
        </div>
      )}
      {selectList.map(selectItem => (
        <DropDownItem
          key={selectItem.label}
          value={selectItem}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};
