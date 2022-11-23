import React from 'react';
import './style.scss';

interface IFilterBarProps {
  children?: JSX.Element | JSX.Element[];
}

export const FilterBar = ({ children }: IFilterBarProps) => (
  <div className='filter__bar'>
    <div className='filter__bar__container'>{children}</div>
  </div>
);
