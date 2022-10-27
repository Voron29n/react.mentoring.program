import React from 'react';
import bitmap from '$images/bitmap.png';
import Logo from '$common/logo/Logo';
import { Button } from '$common/button/Button';
import SearchBar from 'components/SearchBar/SearchBar';
import { ADD_MOVE_BUTTON, SEARCH_COMPONENT } from '$utils/constant';
import './style.scss';

const Header = () => {
  const style = {
    backgroundImage: `url(${bitmap})`
  };

  return (
    <header style={style} className={'header__container'}>
      <Logo />
      <Button frontData={ADD_MOVE_BUTTON} onClick={() => {}} />
      <SearchBar
        headline={SEARCH_COMPONENT.headline}
        placeholder={SEARCH_COMPONENT.placeholder}
        button={SEARCH_COMPONENT.button}
      />
    </header>
  );
};

export default Header;
