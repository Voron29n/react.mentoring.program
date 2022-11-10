import React, { useState } from 'react';
import Header from 'components/Header/Header';
import FilterBar from 'containers/FilterBar/FilterBar';
import { Footer } from 'components/Footer/Footer';
import MovieListErrorBoundary from 'components/ErrorBoundaries/MovieListErrorBoundary';
import GenreBar from 'components/GenreBar/GenreBar';
import SortBar from 'components/SortBar/SortBar';
import { Lightbox } from 'containers/Lightbox/Lightbox';
import './style.scss';
import MovieList from 'containers/MovieList/MovieList';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { filterMovieList, getMovieListMockData } from 'utils/helper';
import { GENRE_BAR, SORT_BAR } from 'utils/constant';
import { IDropDownItem } from 'components/DropDown/DropDownItem/DropDownItem';
import LightboxErrorBoundary from 'components/ErrorBoundaries/LightboxErrorBoundary';

const DEFAULT_GENRE_BAR = GENRE_BAR[0];
const DEFAULT_SORT_TYPE = SORT_BAR.list[0];

const App = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [activeGenre, setActiveGenre] =
    useState<IDropDownItem>(DEFAULT_GENRE_BAR);
  const [activeSortType, setActiveSortType] =
    useState<IDropDownItem>(DEFAULT_SORT_TYPE);
  const [movieList, setMovieList] = useState(getMovieListMockData);

  const actualMovieList = filterMovieList(
    movieList,
    activeGenre,
    activeSortType,
    DEFAULT_GENRE_BAR
  );

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Header
          setMovieList={setMovieList}
          setLightbox={setLightbox}
          setIsLightboxOpen={setIsLightboxOpen}
        />
        <MovieListErrorBoundary>
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
          />
        </MovieListErrorBoundary>
        <Footer />
        {isLightboxOpen && lightbox && (
          <LightboxErrorBoundary>
            <Lightbox {...lightbox} setLightboxOpen={setIsLightboxOpen} />
          </LightboxErrorBoundary>
        )}
      </LocalizationProvider>
    </>
  );
};
export default App;
