import React, { useEffect } from 'react';
import { Movie, MovieListView } from 'components';
import { useActions, useQueryMovieList, useTypedSelector } from 'hooks';
import { UseQueryResult } from '@tanstack/react-query';

export const MovieList = () => {
  const { movieList: storeMovieList } = useTypedSelector(
    state => state.movieList
  );
  const { activeGenre, activeSortType } = useTypedSelector(
    state => state.filterBar
  );
  const { saveMovieList } = useActions();

  const {
    isSuccess,
    isError,
    isLoading,
    data: queryMovieList
  }: UseQueryResult<Array<Movie>> = useQueryMovieList(
    activeGenre,
    activeSortType
  );

  useEffect(() => {
    if (isSuccess) {
      saveMovieList(queryMovieList);
    }
  }, [isSuccess, queryMovieList]);

  return (
    <MovieListView
      movieList={storeMovieList}
      isError={isError}
      isLoading={isLoading}
    />
  );
};
