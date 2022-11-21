import React from 'react';
import { Button } from 'common';
import { SEARCH_COMPONENT } from 'utils/const';
import './style.scss';

export const SearchBar = () => {
  const { headline, placeholder, button } = SEARCH_COMPONENT;

  return (
    <div className={'search__container'}>
      <div className={'headline upper__text'}>{headline}</div>
      <input className="input" type="text" placeholder={placeholder} />
      <Button onClick={() => {}} {...button} />
    </div>
  );
};
