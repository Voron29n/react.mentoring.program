import React from 'react';
import './style.scss';
import { GenreBar, SortBar } from 'components';

export const FilterBar = () => (
  <div className='filter__bar'>
    <div className='filter__bar__container'>
      <GenreBar />
      <SortBar />
    </div>
  </div>
);
