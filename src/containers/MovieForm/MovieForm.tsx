import React, { useCallback, useState } from 'react';
import { IMovieItem } from 'components/MovieItem/MovieItem';
import MovieFormView from 'containers/MovieForm/MovieFormView/MovieFormView';
import MovieInput from 'components/MovieInput/MovieInput';
import { MOVIE_FORM } from 'utils/formConstant';
import { MovieInputSize } from 'components/MovieInput/MovieInputView/MovieInputView';

interface IMovieForm {
  headline: string;
  editMovieItem?: IMovieItem;
  onSubmit: (movieItem: IMovieItem) => void;
}

const MovieForm = ({
  onSubmit,
  headline,
  editMovieItem = {} as IMovieItem
}: IMovieForm) => {
  const [movieItem, setMovieItem] = useState<IMovieItem>(editMovieItem);

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
        movieItem={movieItem}
        {...formItem}
      />
    ));
  };

  return (
    <>
      <MovieFormView
        smallInputs={filterInputsBySize(MovieInputSize.SMALL)}
        largeInputs={filterInputsBySize(MovieInputSize.LARGE)}
        headline={headline}
        handleReset={handleReset}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default MovieForm;
