import React, {
  Dispatch,
  memo,
  SetStateAction,
  useCallback,
  useMemo,
  useState
} from 'react';
import { Movie, MovieInputView, MovieKey } from 'components';
import {
  getInputValueOrDefault,
  prepareGenreField,
  prepareRuntimeField,
  prepareTextField
} from './utils';

interface IMovieInput {
  label: string;
  placeholder: string;
  keyName: MovieKey;
  customClasses: Array<string>;
  keyValue: string | number | Array<string>;
  setMovieItem: Dispatch<SetStateAction<Movie>>;
}

const MovieInputComponent = ({
  label,
  placeholder,
  customClasses,
  keyName,
  keyValue,
  setMovieItem
}: IMovieInput) => {
  const [isRuntimeFocus, setIsRuntimeFocus] = useState(false);

  const onMovieInputChange = useCallback(
    (value: string | number | Array<string>) => {
      setMovieItem((prevMovieItem: Movie) => {
        const editMovieItem = { ...prevMovieItem };
        editMovieItem[keyName as keyof Movie] = value;
        return editMovieItem;
      });
    },
    [keyName, setMovieItem]
  );

  const inputComponent = useMemo(() => {
    const inputValue = getInputValueOrDefault(keyName, keyValue);
    const commonProps = {
      id: keyName,
      placeholder
    };

    switch (keyName) {
      case MovieKey.GENRE:
        return Array.isArray(inputValue)
          ? prepareGenreField(inputValue, onMovieInputChange, commonProps)
          : null;
      case MovieKey.RUNTIME:
        return !Array.isArray(inputValue)
          ? prepareRuntimeField(
              isRuntimeFocus,
              inputValue,
              onMovieInputChange,
              setIsRuntimeFocus,
              commonProps
            )
          : null;
      default:
        return prepareTextField(
          keyName,
          inputValue,
          onMovieInputChange,
          commonProps
        );
    }
  }, [keyName, keyValue, placeholder, isRuntimeFocus, onMovieInputChange]);

  return (
    <>
      <MovieInputView customClasses={customClasses} label={label}>
        {inputComponent}
      </MovieInputView>
    </>
  );
};

export const MovieInput = memo(MovieInputComponent);
