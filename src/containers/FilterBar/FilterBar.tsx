import React from 'react';
import './style.scss';

interface IFilterBarProps {
  children?: JSX.Element | JSX.Element[];
}

const FilterBar = ({ children }: IFilterBarProps) => {
  return (
    <div className={'filter__bar'}>
      <div className={'filter__bar__container'}>{children}</div>
    </div>
  );
};

export default FilterBar;
