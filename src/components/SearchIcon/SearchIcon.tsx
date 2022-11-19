import searchButton from 'images/searchButton.svg';
import React from 'react';
import './style.scss';

interface ISearchIcon {
  handleClick: () => void;
}

const SearchIcon = ({ handleClick }: ISearchIcon) => {
  return (
    <div className="search__icon">
      <img alt="search__icon" src={searchButton} onClick={handleClick} />
    </div>
  );
};

export default SearchIcon;
