import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { GenreCheckmarks } from 'components';
import { genreCheckmarksComponent } from './mocks';

const onChange = jest.fn();

describe('GenreCheckmarks component', () => {
  const { id, meta, placeholder, genreList, value } = genreCheckmarksComponent;
  let genreCheckmarksRender: RenderResult;

  beforeEach(() => {
    genreCheckmarksRender = render(
      <GenreCheckmarks
        onChange={onChange}
        id={id}
        meta={meta}
        placeholder={placeholder}
        genreList={genreList}
        value={value}
      />
    );
  });

  it('GenreCheckmarks snapshot', () => {
    expect(genreCheckmarksRender).toMatchSnapshot();
  });
});
