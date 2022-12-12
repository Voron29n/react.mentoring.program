import React, { memo, useCallback, useContext } from 'react';
import { Button, Logo, MovieDetail, SearchBar } from 'components';
import { ILightboxContext, LightboxContext, MovieActionTypes } from 'context';
import { useActions, useTypedSelector } from 'hooks';
import { ADD_MOVE_BUTTON } from 'utils';
import { IoSearchOutline } from 'react-icons/io5';
import bitmap from 'images/bitmap.png';
import './style.scss';

const HeaderStyle = {
  backgroundImage: `url(${bitmap})`
};

export const HeaderComponent = () => {
  const { movieDetail } = useTypedSelector(state => state.movieDetail);
  const { deleteMovieDetail } = useActions();
  const { handleLightboxMovieActions, setLightbox } =
    useContext<ILightboxContext>(LightboxContext);

  const handleAddMovieClick = useCallback(
    () =>
      handleLightboxMovieActions({
        action: MovieActionTypes.ADD,
        setLightbox
      }),
    [setLightbox]
  );

  const handleSearchDetailClick = useCallback(() => {
    deleteMovieDetail();
  }, [deleteMovieDetail]);

  return (
    <header
      style={HeaderStyle}
      className={`header__container sticky__position ${
        movieDetail ? 'movie__detail' : ''
      }`}
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
