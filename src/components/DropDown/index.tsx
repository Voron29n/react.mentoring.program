import React, { Dispatch, useCallback } from 'react';
import { DropDownItem, IDropDownItem } from 'components';
import { IoClose } from 'react-icons/io5';
import './style.scss';

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

  const containerClassNames = ['drop__down__container', ...classNames].join(
    ' '
  );

  return (
    <div className={containerClassNames}>
      {isCloseIcon && (
        <div className={'close__icon'}>
          <IoClose onClick={handleCloseIcon} />
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
