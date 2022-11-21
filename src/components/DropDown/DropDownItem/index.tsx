import React, { Dispatch } from 'react';
import './style.scss';

interface IDropDownItem {
  label: string;
}

interface IDropDownItemProps {
  value: IDropDownItem;
  handleClick: Dispatch<object>;
}

const DropDownItem = ({ value, handleClick }: IDropDownItemProps) => (
  <div
    className={'drop__down__item upper__text'}
    onClick={() => handleClick(value)}
  >
    {value.label}
  </div>
);

export { DropDownItem, IDropDownItem };
