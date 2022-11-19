import React from 'react';
import { Button } from 'common/button/Button';
import './style.scss';
import { SEARCH_COMPONENT } from 'utils/const/viewComponents';

const SearchBar = () => {
  const headline = SEARCH_COMPONENT.headline;
  const placeholder = SEARCH_COMPONENT.placeholder;
  const button = SEARCH_COMPONENT.button;

  return (
    <div className="search__container">
      <div className="headline upper__text">{headline}</div>
      <input className="input" type="text" placeholder={placeholder} />
      <Button onClick={() => {}} {...button} />
    </div>
  );
};

export default SearchBar;
