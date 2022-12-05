import React, { Dispatch, SetStateAction } from 'react';
import { GenreCheckmarks, MovieKey } from 'components';
import { GENRE_LIST, mapRuntimeToString } from 'utils';
import { InputAdornment, TextField } from '@mui/material';

export function getInputValueOrDefault(
  keyName: MovieKey,
  keyValue: string | number | Array<string>
): string | number | Array<string> {
  if (keyValue !== undefined) {
    return keyValue;
  }
  switch (keyName) {
    case MovieKey.GENRE:
      return [];
    case MovieKey.RATING:
    case MovieKey.RUNTIME:
      return 0;
    default:
      return '';
  }
}

const handleTextChange =
  (onChange: (value: any) => void) =>
  (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

export function prepareGenreField(
  keyValue: Array<string>,
  onChange: (value: any) => void,
  commonProps: { id: MovieKey; placeholder: string }
): JSX.Element {
  const handleGenreChange = () => (genreName: Array<string>) => {
    onChange(genreName);
  };

  return (
    <GenreCheckmarks
      value={keyValue}
      genreList={GENRE_LIST}
      onChange={handleGenreChange}
      {...commonProps}
    />
  );
}

export function prepareRuntimeField(
  isRuntimeFocus: boolean,
  keyValue: string | number,
  onChange: (value: any) => void,
  setIsRuntimeFocus: Dispatch<SetStateAction<boolean>>,
  commonProps: { id: MovieKey; placeholder: string }
): JSX.Element {
  const handleChangeRuntime = handleTextChange(onChange);

  const handleFocusRuntime = () => {
    setIsRuntimeFocus(true);
  };
  const handleBlurRuntime = () => {
    setIsRuntimeFocus(false);
  };

  const runtimeProps = {
    value: isRuntimeFocus ? keyValue : mapRuntimeToString(keyValue),
    type: isRuntimeFocus ? 'number' : '',
    InputProps: isRuntimeFocus
      ? {
          endAdornment: <InputAdornment position='start'>min</InputAdornment>
        }
      : null,
    ...commonProps
  };
  return (
    <TextField
      onFocus={handleFocusRuntime}
      onBlur={handleBlurRuntime}
      onChange={handleChangeRuntime}
      {...runtimeProps}
    />
  );
}

export function prepareTextField(
  keyName:
    | MovieKey.TITLE
    | MovieKey.DATE
    | MovieKey.RATING
    | MovieKey.MOVIE_URL
    | MovieKey.OVERVIEW,
  keyValue: string | number | Array<string>,
  onChange: (value: any) => void,
  commonProps: { id: MovieKey; placeholder: string }
): JSX.Element {
  const handleCommonChange = handleTextChange(onChange);

  return (
    <TextField
      multiline={keyName === MovieKey.OVERVIEW}
      type={keyName === MovieKey.DATE ? 'date' : null}
      onChange={handleCommonChange}
      value={keyValue ? keyValue : ''}
      {...commonProps}
    />
  );
}
