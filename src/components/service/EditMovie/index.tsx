import React from 'react';
import { MovieQueryTypeActions, useActions, useMovieService } from 'hooks';
import {
  Congratulations,
  FetchErrorMessage,
  Movie,
  MovieForm,
  Spinner
} from 'components';
import { CONGRATULATIONS_EDIT_MOVIE } from 'utils';

interface IEditMovieProps {
  editedMovie: Movie;
}

export const EditMovie = ({ editedMovie }: IEditMovieProps) => {
  const { editMovie } = useActions();
  const { isError, isLoading, isSuccess, isConfirmed, handleConfirm } =
    useMovieService({
      defaultMovie: editedMovie,
      movieAction: editMovie,
      movieQueryTypeActions: MovieQueryTypeActions.EDIT
    });

  if (!isConfirmed) {
    return (
      <MovieForm
        onSubmit={handleConfirm}
        headline={'Edit movie'}
        movie={editedMovie}
      />
    );
  }

  const error = isError ? <FetchErrorMessage /> : null;
  const spinner = isLoading ? <Spinner /> : null;
  const successContent = isSuccess ? (
    <Congratulations {...CONGRATULATIONS_EDIT_MOVIE} />
  ) : null;

  return <>{error || spinner || successContent}</>;
};
