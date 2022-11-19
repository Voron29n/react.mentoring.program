import React, { Dispatch, SetStateAction, useMemo } from 'react';
import bitmap from 'images/bitmap.png';
import './style.scss';
import Logo from 'common/logo/Logo';
import { Button } from 'common/button/Button';
import { ADD_MOVE_BUTTON } from 'utils/const/buttons';
import SearchBar from 'components/SearchBar/SearchBar';
import { ILightboxProps } from 'containers/Lightbox/Lightbox';
import { handleAddMovie } from 'containers/Header/utils/utils';
import { IMovieItem } from 'components/MovieItem/MovieItem';
import { MovieDetail } from 'components/MovieDetail/MovieDetail';
import SearchIcon from 'components/SearchIcon/SearchIcon';

const HeaderStyle = {
  backgroundImage: `url(${bitmap})`
};

interface IHeader {
  movieDetail: IMovieItem;
  setMovieDetail: Dispatch<SetStateAction<IMovieItem>>;
  setMovieList: Dispatch<SetStateAction<Array<IMovieItem>>>;
  setLightbox: Dispatch<SetStateAction<ILightboxProps>>;
  setIsLightboxOpen: Dispatch<boolean>;
}

const Header = ({
  movieDetail,
  setMovieDetail,
  setMovieList,
  setLightbox,
  setIsLightboxOpen
}: IHeader) => {
  const handleAddMovieClick = useMemo(
    () => handleAddMovie(setMovieList, setLightbox, setIsLightboxOpen),
    [setIsLightboxOpen, setLightbox, setMovieList]
  );

  const handleSearchDetailClick = () => {
    setMovieDetail(null);
  };

  return (
    <header
      style={HeaderStyle}
      className={`header__container ${movieDetail ? 'movie__detail' : ''}`}
    >
      <Logo />
      {movieDetail ? (
        <SearchIcon handleClick={handleSearchDetailClick} />
      ) : (
        <Button onClick={handleAddMovieClick} {...ADD_MOVE_BUTTON} />
      )}
      {movieDetail ? <MovieDetail movieDetail={movieDetail} /> : <SearchBar />}
    </header>
  );
};

export default Header;
