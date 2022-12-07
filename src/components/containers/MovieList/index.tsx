import React, { useEffect } from 'react';
import { MovieListView } from 'components';
import { useActions, useTypedSelector } from 'hooks';

export const MovieList = () => {
  const { movieList, error, loading } = useTypedSelector(
    state => state.movieList
  );
  const { activeGenre, activeSortType } = useTypedSelector(
    state => state.filterBar
  );
  const { fetchMovies } = useActions();

  useEffect(() => {
    fetchMovies(activeGenre, activeSortType);
  }, [activeGenre, activeSortType]);

  return (
    <MovieListView movieList={movieList} error={error} loading={loading} />
  );
};
