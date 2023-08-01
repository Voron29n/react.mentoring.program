import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { mapRuntimeToString } from 'utils';
import { MovieDetail } from '../index';
import { testMovie } from './mocks';

describe('MovieDetail component', () => {
  let movieDetailRender: RenderResult;

  beforeEach(() => {
    movieDetailRender = render(<MovieDetail movieDetail={testMovie} />);
  });

  it('renders', () => {
    const genres = testMovie.genres.join(', ');
    const releaseYear = new Date(testMovie.releaseDate).getFullYear();
    const runtime = mapRuntimeToString(testMovie.runtime);

    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      testMovie.posterPath
    );
    expect(screen.getByRole('img')).toHaveAttribute('alt', testMovie.title);
    expect(screen.getByText(testMovie.title)).toBeInTheDocument();
    expect(screen.getByText(testMovie.voteAverage)).toBeInTheDocument();
    expect(screen.getByText(genres)).toBeInTheDocument();
    expect(screen.getByText(releaseYear)).toBeInTheDocument();
    expect(screen.getByText(runtime)).toBeInTheDocument();
  });

  it('MovieDetail snapshot', () => {
    expect(movieDetailRender).toMatchSnapshot();
  });
});
