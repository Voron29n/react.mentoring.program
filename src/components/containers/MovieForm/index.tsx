import React, { useCallback, useState } from 'react';
import { MovieFormView, MovieInput, MovieInputSize, Movie } from 'components';
import { MOVIE_FORM } from 'utils';

interface IMovieForm {
  headline: string;
  editMovieItem?: Movie;
  onSubmit: (movieItem: Movie) => void;
}

export const MovieForm = ({
  onSubmit,
  headline,
  editMovieItem = {} as Movie
}: IMovieForm) => {
  const [movieItem, setMovieItem] = useState<Movie>(editMovieItem);

  const handleReset = useCallback(() => {
    setMovieItem(editMovieItem);
  }, [editMovieItem]);

  const handleSubmit = useCallback(() => {
    onSubmit(movieItem);
  }, [movieItem, onSubmit]);

  const filterInputsBySize = (inputSize: MovieInputSize) => {
    return MOVIE_FORM.filter(({ size }) => size === inputSize).map(formItem => (
      <MovieInput
        key={formItem.keyName}
        setMovieItem={setMovieItem}
        keyValue={movieItem[formItem.keyName as keyof Movie]}
        {...formItem}
      />
    ));
  };

  return (
    <MovieFormView
      smallInputs={filterInputsBySize(MovieInputSize.SMALL)}
      largeInputs={filterInputsBySize(MovieInputSize.LARGE)}
      headline={headline}
      handleReset={handleReset}
      handleSubmit={handleSubmit}
    />
  );
};
