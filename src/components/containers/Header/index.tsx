import React, { memo, useCallback, useContext, useEffect } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { useSearchParams } from 'react-router-dom';
import { Button, Logo, Movie, MovieDetail, SearchBar } from 'components';
import { ILightboxContext, LightboxContext, MovieActionTypes } from 'context';
import {
  MovieQueryTypeActions,
  useActions,
  useMovieService,
  useTypedSelector
} from 'hooks';
import { ADD_MOVE_BUTTON, baseApiConfig } from 'utils';
import bitmap from 'images/bitmap.png';
import './style.scss';

const HeaderStyle = {
  backgroundImage: `url(${bitmap})`
};

export const HeaderComponent = () => {
  const { movieDetail } = useTypedSelector(state => state.movieDetail);
  const { deleteMovieDetail, setMovieDetail } = useActions();
  const { handleLightboxMovieActions, setLightbox } =
    useContext<ILightboxContext>(LightboxContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const { handleConfirm } = useMovieService({
    defaultMovie: {} as Movie,
    movieAction: setMovieDetail,
    movieQueryTypeActions: MovieQueryTypeActions.GET
  });

  useEffect(() => {
    const movieId = parseInt(
      searchParams.get(baseApiConfig._searchParams.movie)
    );
    if (!!movieId) {
      handleConfirm({ ...({} as Movie), id: movieId });
    }
  }, []);

  const handleAddMovieClick = useCallback(
    () =>
      handleLightboxMovieActions({
        action: MovieActionTypes.ADD,
        setLightbox
      }),
    [setLightbox]
  );

  const handleSearchDetailClick = useCallback(() => {
    deleteMovieDetail(searchParams, setSearchParams);
  }, [searchParams, deleteMovieDetail, setSearchParams]);

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
