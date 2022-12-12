import React, { useContext } from 'react';
import {
  ErrorBoundary,
  FilterBar,
  Footer,
  Header,
  Lightbox,
  MovieList
} from 'components';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ILightboxContext, LightboxContext } from 'context';
import './style.scss';

export const App = () => {
  const { lightbox } = useContext<ILightboxContext>(LightboxContext);

  return (
    <>
      <Header />
      <ErrorBoundary>
        <FilterBar />
        <MovieList />
      </ErrorBoundary>
      <Footer />
      {!!lightbox && <Lightbox {...lightbox} />}
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};
