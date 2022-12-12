import React from 'react';
import {
  Congratulations,
  FetchErrorMessage,
  Movie,
  MovieForm,
  Spinner
} from 'components';
import { MovieQueryTypeActions, useActions, useMovieService } from 'hooks';
import { CONGRATULATIONS_ADD_MOVIE } from 'utils';

const defaultMovie = {
  id: 999999,
  title: '',
  releaseDate: '',
  posterPath: '',
  overview: '',
  runtime: 0,
  voteAverage: 0,
  genres: []
} as Movie;

export const AddMovie = () => {
  const { addMovie } = useActions();
  const { isError, isLoading, isSuccess, isConfirmed, handleConfirm } =
    useMovieService({
      defaultMovie: defaultMovie,
      movieAction: addMovie,
      movieQueryTypeActions: MovieQueryTypeActions.ADD
    });

  if (!isConfirmed) {
    return (
      <MovieForm
        headline={'Add movie'}
        onSubmit={handleConfirm}
        movie={defaultMovie}
      />
    );
  }

  if (isSuccess) {
  }

  const error = isError ? <FetchErrorMessage /> : null;
  const spinner = isLoading ? <Spinner /> : null;
  const successContent = isSuccess ? (
    <Congratulations {...CONGRATULATIONS_ADD_MOVIE} />
  ) : null;

  return <>{error || spinner || successContent}</>;
};
