import React from 'react';
import { Button, IButtonFontProps } from '$common/button/Button';
import './style.scss';

interface ISearchProps {
  headline: string;
  placeholder: string;
  button: IButtonFontProps;
}

const SearchBar = ({ headline, placeholder, button }: ISearchProps) => {
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
