import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { IMovieItem, MovieInputView, MovieItemKey } from 'components';
import { inputComponent } from './utils';

interface IMovieInput {
  label: string;
  placeholder: string;
  keyName: MovieItemKey;
  customClasses: Array<string>;
  movieItem: IMovieItem;
  setMovieItem: Dispatch<SetStateAction<IMovieItem>>;
}

export const MovieInput = ({
  label,
  placeholder,
  customClasses,
  keyName,
  movieItem,
  setMovieItem
}: IMovieInput) => {
  const [isRuntimeFocus, setIsRuntimeFocus] = useState(false);

  const onMovieInputChange = useCallback(
    (value: string | number | Array<string>) => {
      setMovieItem((prevMovieItem: IMovieItem) => {
        const editMovieItem = { ...prevMovieItem };
        editMovieItem[keyName as keyof IMovieItem] = value;
        return editMovieItem;
      });
    },
    [keyName, setMovieItem]
  );
  const childComponent = inputComponent(onMovieInputChange, setIsRuntimeFocus);

  return (
    <>
      <MovieInputView customClasses={customClasses} label={label}>
        {childComponent(keyName, placeholder, movieItem, isRuntimeFocus)}
      </MovieInputView>
    </>
  );
};
