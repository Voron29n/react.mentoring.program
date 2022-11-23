import React, { useMemo, useState } from 'react';
import {
  ErrorBoundary,
  Footer,
  GenreBar,
  IDropDownItem,
  IMovieItem,
  SortBar
} from 'components';
import {
  FilterBar,
  Header,
  ILightboxProps,
  Lightbox,
  MovieList
} from 'containers';
import { filterMovieList, mapMockDataToMovieList } from 'services';
import { GENRE_BAR, SORT_BAR } from 'common/const';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import './style.scss';

const DEFAULT_GENRE_BAR = GENRE_BAR[0];
const DEFAULT_SORT_TYPE = SORT_BAR.list[0];

const App = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightbox, setLightbox] = useState<ILightboxProps>(null);
  const [activeGenre, setActiveGenre] =
    useState<IDropDownItem>(DEFAULT_GENRE_BAR);
  const [activeSortType, setActiveSortType] =
    useState<IDropDownItem>(DEFAULT_SORT_TYPE);
  const [movieList, setMovieList] = useState<Array<IMovieItem>>(
    mapMockDataToMovieList
  );
  const [movieDetail, setMovieDetail] = useState<IMovieItem>(null);

  const actualMovieList = useMemo(
    () =>
      filterMovieList(
        movieList,
        activeGenre,
        activeSortType,
        DEFAULT_GENRE_BAR
      ),
    [activeGenre, activeSortType, movieList]
  );

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Header
          movieDetail={movieDetail}
          setMovieDetail={setMovieDetail}
          setMovieList={setMovieList}
          setLightbox={setLightbox}
          setIsLightboxOpen={setIsLightboxOpen}
        />
        <ErrorBoundary>
          <FilterBar>
            <GenreBar
              activeGenre={activeGenre}
              setActiveGenre={setActiveGenre}
            />
            <SortBar
              activeSortType={activeSortType}
              setActiveSortType={setActiveSortType}
            />
          </FilterBar>
          <MovieList
            movieList={actualMovieList}
            setMovieList={setMovieList}
            setLightbox={setLightbox}
            setIsLightboxOpen={setIsLightboxOpen}
            setMovieDetail={setMovieDetail}
          />
        </ErrorBoundary>
        <Footer />
        {isLightboxOpen && lightbox && (
          <ErrorBoundary>
            <Lightbox {...lightbox} setLightboxOpen={setIsLightboxOpen} />
          </ErrorBoundary>
        )}
      </LocalizationProvider>
    </>
  );
};
export default App;
