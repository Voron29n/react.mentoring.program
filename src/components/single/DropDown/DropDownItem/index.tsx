import React, { Dispatch, memo } from 'react';
import './style.scss';

export interface IDropDownItem {
  label: string;
  value: string;
}

interface IDropDownItemProps {
  value: IDropDownItem;
  onClick: Dispatch<object>;
}

const DropDownItemComponent = ({ value, onClick }: IDropDownItemProps) => (
  <div className='drop__down__item upper__text' onClick={() => onClick(value)}>
    {value.label}
  </div>
);

export const DropDownItem = memo(DropDownItemComponent);
