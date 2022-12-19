import React, { memo, useCallback, useMemo, useState } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { useFormikContext } from 'formik';
import { GenreCheckmarks, Movie, MovieInputView, MovieKey } from 'components';
import { GENRE_LIST, mapRuntimeToString } from 'utils';

interface IMovieInput {
  label: string;
  placeholder: string;
  keyName: MovieKey;
  customClasses: Array<string>;
}

const MovieInputMemo = ({
  label,
  placeholder,
  customClasses,
  keyName
}: IMovieInput) => {
  const [isRuntimeFocus, setIsRuntimeFocus] = useState(false);
  const { values, setValues, getFieldMeta, handleChange } =
    useFormikContext<Movie>();

  const handleFocusRuntime = () => {
    setIsRuntimeFocus(true);
  };
  const handleBlurRuntime = () => {
    setIsRuntimeFocus(false);
  };
  const handleGenresChange = useCallback(
    (genres: string[]) => {
      setValues((oldValue: Movie) => ({ ...oldValue, genres }), true);
    },
    [setValues]
  );

  const inputComponent = useMemo(() => {
    const meta = getFieldMeta(keyName);
    const commonProps = {
      name: keyName,
      id: keyName,
      placeholder
    };

    switch (keyName) {
      case MovieKey.GENRE:
        if (!Array.isArray(values[keyName])) {
          return null;
        }
        return (
          <GenreCheckmarks
            meta={meta}
            value={values.genres}
            onChange={handleGenresChange}
            genreList={GENRE_LIST}
            {...commonProps}
          />
        );
      case MovieKey.RUNTIME:
        return (
          <TextField
            onFocus={handleFocusRuntime}
            onBlur={handleBlurRuntime}
            onChange={handleChange}
            error={Boolean(meta.error)}
            helperText={meta.error}
            value={
              isRuntimeFocus
                ? values[keyName]
                : mapRuntimeToString(values[keyName])
            }
            type={isRuntimeFocus ? 'number' : 'text'}
            InputProps={
              isRuntimeFocus
                ? {
                    endAdornment: (
                      <InputAdornment position='start'>min</InputAdornment>
                    )
                  }
                : null
            }
            {...commonProps}
          />
        );
      default:
        const type =
          keyName === MovieKey.DATE
            ? 'date'
            : keyName === MovieKey.RATING
            ? 'number'
            : 'text';

        return (
          <TextField
            multiline={keyName === MovieKey.OVERVIEW}
            rows={keyName === MovieKey.OVERVIEW ? 7 : 1}
            type={type}
            onChange={handleChange}
            error={Boolean(meta.error)}
            helperText={meta.error}
            value={values[keyName]}
            {...commonProps}
          />
        );
    }
  }, [
    getFieldMeta,
    handleChange,
    handleGenresChange,
    isRuntimeFocus,
    keyName,
    placeholder,
    values
  ]);

  return (
    <>
      <MovieInputView customClasses={customClasses} label={label}>
        {inputComponent}
      </MovieInputView>
    </>
  );
};

export const MovieInput = memo(MovieInputMemo);
