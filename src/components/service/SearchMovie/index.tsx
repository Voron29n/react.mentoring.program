import React from 'react';
import {
  ErrorBoundary,
  FilterBar,
  Footer,
  Header,
  MovieList
} from 'components';

export const SearchMovie = () => (
  <>
    <Header />
    <FilterBar />
    <ErrorBoundary>
      <MovieList />
    </ErrorBoundary>
    <Footer />
  </>
);
