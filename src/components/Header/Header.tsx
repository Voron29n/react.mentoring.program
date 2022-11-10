import React, { Dispatch } from 'react';
import bitmap from 'images/bitmap.png';
import './style.scss';
import Logo from 'common/logo/Logo';
import { Button } from 'common/button/Button';
import { ADD_MOVE_BUTTON } from 'utils/constant';
import SearchBar from 'components/SearchBar/SearchBar';
import { ILightboxProps } from 'containers/Lightbox/Lightbox';
import { handleAddMovie } from 'components/Header/utils/utils';

const HeaderStyle = {
  backgroundImage: `url(${bitmap})`
};

interface IHeader {
  setMovieList: Dispatch<any>;
  setLightbox: Dispatch<ILightboxProps>;
  setIsLightboxOpen: Dispatch<boolean>;
}

const Header = ({ setMovieList, setLightbox, setIsLightboxOpen }: IHeader) => {
  const handleAddMovieClick = handleAddMovie(
    setMovieList,
    setLightbox,
    setIsLightboxOpen
  );

  return (
    <header style={HeaderStyle} className={'header__container'}>
      <Logo />
      <Button onClick={handleAddMovieClick} {...ADD_MOVE_BUTTON} />
      <SearchBar />
    </header>
  );
};

export default Header;
