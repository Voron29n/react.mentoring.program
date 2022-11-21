import React, { Dispatch } from 'react';
import { GenreCheckmarks, IMovieItem, MovieItemKey } from 'components';
import { GENRE_LIST } from 'utils/const';
import { prepareRuntime } from 'utils/helpers';
import { InputAdornment, TextField } from '@mui/material';

const handleMovieInputTextChange =
  (onChange: Dispatch<any>) => (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

const handleMovieInputGenreChange =
  (onChange: Dispatch<any>) => (genreName: Array<string>) => {
    onChange(genreName);
  };

const handleMovieInputFocusRuntime =
  (setIsRuntimeFocus: Dispatch<boolean>) => () => {
    setIsRuntimeFocus(true);
  };
const handleMovieInputBlurRuntime =
  (setIsRuntimeFocus: Dispatch<boolean>) => () => {
    setIsRuntimeFocus(false);
  };

export const inputComponent =
  (onChange: Dispatch<any>, setIsRuntimeFocus: Dispatch<boolean>) =>
  (
    keyName: MovieItemKey,
    placeholder: string,
    movieItem: IMovieItem,
    isRuntimeFocus: boolean
  ) => {
    const handleTextChange = handleMovieInputTextChange(onChange);
    const handleGenreChange = handleMovieInputGenreChange(onChange);
    const handleFocusRuntime = handleMovieInputFocusRuntime(setIsRuntimeFocus);
    const handleBlurRuntime = handleMovieInputBlurRuntime(setIsRuntimeFocus);

    const commonProps = {
      id: keyName,
      placeholder
    };

    switch (keyName) {
      case MovieItemKey.GENRE:
        return (
          <GenreCheckmarks
            value={movieItem[keyName]}
            genreList={GENRE_LIST}
            onChange={handleGenreChange}
            {...commonProps}
          />
        );
      case MovieItemKey.RUNTIME:
        const runtimeValue = movieItem[keyName] ? movieItem[keyName] : 0;
        const runtimeProps = {
          value: isRuntimeFocus ? runtimeValue : prepareRuntime(runtimeValue),
          InputProps: isRuntimeFocus
            ? {
                endAdornment: (
                  <InputAdornment position="start">min</InputAdornment>
                )
              }
            : null,
          ...commonProps
        };
        return (
          <TextField
            onFocus={handleFocusRuntime}
            onBlur={handleBlurRuntime}
            onChange={handleTextChange}
            {...runtimeProps}
          />
        );
      case MovieItemKey.DATE:
        const dateValue = movieItem[keyName] ? movieItem[keyName] : '';
        return (
          <TextField
            type={'date'}
            onChange={handleTextChange}
            value={dateValue}
            {...commonProps}
          />
        );
      default:
        return (
          <TextField
            multiline={keyName === MovieItemKey.OVERVIEW}
            onChange={handleTextChange}
            value={movieItem[keyName] ? movieItem[keyName] : ''}
            {...commonProps}
          />
        );
    }
  };
