import React from 'react';
import {
  ErrorBoundary,
  FilterBar,
  Footer,
  Header,
  Lightbox,
  MovieList
} from 'components';
import { useTypedSelector } from 'hooks';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import './style.scss';

const App = () => {
  const { lightbox, isLightboxOpen } = useTypedSelector(
    state => state.lightbox
  );

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Header />
        <ErrorBoundary>
          <FilterBar />
          <MovieList />
        </ErrorBoundary>
        <Footer />
        {isLightboxOpen && lightbox && <Lightbox {...lightbox} />}
      </LocalizationProvider>
    </>
  );
};
export default App;
