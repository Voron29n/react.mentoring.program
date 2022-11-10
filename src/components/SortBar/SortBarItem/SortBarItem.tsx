import React from 'react';
import './style.scss';

export interface ISortBarItem {
  isActive: boolean;
  label: string;
  handleClick?: (label: string) => void;
}

export const SortBarItem = ({ isActive, label, handleClick }: ISortBarItem) => {
  return (
    <div
      className={`sort__bar__item upper__text ${!isActive ? 'drop__down' : ''}`}
      onClick={() => handleClick?.(label)}
    >
      {label}
    </div>
  );
};
