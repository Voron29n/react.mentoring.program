import React, { useEffect } from 'react';
import { UseQueryResult } from '@tanstack/react-query';
import { Movie, MovieListView } from 'components';
import { useActions, useQueryMovieList, useTypedSelector } from 'hooks';

export const MovieList = () => {
  const { movieList: storeMovieList } = useTypedSelector(
    state => state.movieList
  );
  const { activeGenre, activeSortType, searchQuery } = useTypedSelector(
    state => state.searchMovies
  );
  const { saveMovieList } = useActions();

  const {
    isSuccess,
    isError,
    isLoading,
    data: queryMovieList
  }: UseQueryResult<Array<Movie>> = useQueryMovieList(
    activeGenre.value,
    activeSortType.value,
    searchQuery
  );

  useEffect(() => {
    if (isSuccess) {
      saveMovieList(queryMovieList);
    }
  }, [isSuccess]);

  return (
    <MovieListView
      movieList={storeMovieList}
      isError={isError}
      isLoading={isLoading}
    />
  );
};
