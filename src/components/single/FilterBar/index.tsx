import React from 'react';
import { GenreBar, SortBar } from 'components';
import './style.scss';

export const FilterBar = () => (
  <div className='filter__bar'>
    <div className='filter__bar__container'>
      <GenreBar />
      <SortBar />
    </div>
  </div>
);
