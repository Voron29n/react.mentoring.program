import React, { Dispatch, useCallback } from 'react';
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
  const handleClick = useCallback(
    (value: IDropDownItem) => {
      setSelectedItem(value);
      setIsBarOpen(false);
    },
    [setIsBarOpen, setSelectedItem]
  );
  const handleCloseIcon = useCallback(() => {
    setIsBarOpen(false);
  }, [setIsBarOpen]);

  return (
    <div className={`drop__down__container ${classNames.join(' ')}`}>
      {isCloseIcon && (
        <div className={'close__icon'}>
          <img src={closeIcon} onClick={handleCloseIcon} alt="close-icon" />
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
