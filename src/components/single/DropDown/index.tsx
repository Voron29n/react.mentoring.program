import React, { Dispatch, useCallback } from 'react';
import { DropDownItem, IDropDownItem } from 'components';
import { IoClose } from 'react-icons/io5';
import './style.scss';

interface IDropDownProps {
  closeIcon?: boolean;
  classNames?: Array<string>;
  selectList: Array<IDropDownItem>;
  onSelected: Dispatch<object>;
  onClose?: () => void;
}

export const DropDown = ({
  closeIcon,
  classNames,
  selectList,
  onSelected,
  onClose
}: IDropDownProps) => {
  const handleItemClick = useCallback(onSelected, [onSelected]);
  const handleCloseIcon = useCallback(onClose, [onClose]);

  return (
    <div className={`drop__down__container ${classNames?.join(' ')}`}>
      {closeIcon && (
        <div className='close__icon'>
          <IoClose onClick={handleCloseIcon} />
        </div>
      )}
      {selectList.map(selectItem => (
        <DropDownItem
          key={selectItem.label}
          value={selectItem}
          onClick={handleItemClick}
        />
      ))}
    </div>
  );
};
