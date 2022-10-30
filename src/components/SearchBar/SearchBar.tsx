import React from 'react';
import { Button } from 'common/button/Button';
import './style.scss';
import { SEARCH_COMPONENT } from 'utils/constant';

const SearchBar = () => {
  const headline = SEARCH_COMPONENT.headline;
  const placeholder = SEARCH_COMPONENT.placeholder;
  const button = SEARCH_COMPONENT.button;

  return (
    <div className={'search__container'}>
      <div className={'search__headline upper__text'}>{headline}</div>
      <input
        className={'search__input'}
        type="text"
        placeholder={placeholder}
      />
      <Button frontData={button} onClick={() => {}} />
    </div>
  );
};

export default SearchBar;
