import React, { memo, useCallback } from 'react';
import { Button, Logo, MovieDetail, SearchBar } from 'components';
import { ADD_MOVE_BUTTON } from 'utils';
import { handleAddMovie } from './utils';
import { useActions, useTypedSelector } from 'hooks';
import { IoSearchOutline } from 'react-icons/io5';
import bitmap from 'images/bitmap.png';
import './style.scss';

const HeaderStyle = {
  backgroundImage: `url(${bitmap})`
};

export const HeaderComponent = () => {
  const { movieDetail } = useTypedSelector(state => state.movieDetail);
  const { openLightbox, addMovies, deleteMovieDetail } = useActions();

  const handleAddMovieClick = useCallback(
    () => handleAddMovie(addMovies, openLightbox),
    [addMovies, openLightbox]
  );

  const handleSearchDetailClick = useCallback(() => {
    deleteMovieDetail();
  }, [deleteMovieDetail]);

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

export const Header = memo(HeaderComponent);
