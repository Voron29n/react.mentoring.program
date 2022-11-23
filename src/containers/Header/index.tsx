import React, { Dispatch, SetStateAction, useMemo } from 'react';
import { IMovieItem, MovieDetail, SearchBar } from 'components';
import { ILightboxProps } from 'containers';
import { Button, Logo } from 'common/components';
import { IoSearchOutline } from 'react-icons/io5';
import { ADD_MOVE_BUTTON } from 'common/const';
import { handleAddMovie } from './utils';
import bitmap from 'images/bitmap.png';
import './style.scss';

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

export const Header = ({
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
        <>
          <div className='search__icon'>
            <IoSearchOutline onClick={handleSearchDetailClick} />
          </div>
          <MovieDetail movieDetail={movieDetail} />
        </>
      ) : (
        <>
          <Button onClick={handleAddMovieClick} {...ADD_MOVE_BUTTON} />
          <SearchBar />
        </>
      )}
    </header>
  );
};
