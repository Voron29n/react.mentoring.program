import { Movie } from 'components';

export const selectedMovieDetailCN = 'select__item';
export const otherSelectedMovieDetailCN = 'opacity__item';
export const nonMovieDetail = [
  selectedMovieDetailCN,
  otherSelectedMovieDetailCN
];

export const testMovie = {
  id: 0,
  title: 'testTitle',
  voteAverage: 0,
  runtime: 10,
  genres: ['testGenre1', 'testGenre2'],
  releaseDate: '2018-02-07',
  posterPath: 'testPosterPath',
  overview: 'testOverview'
} as Movie;

export const otherTestMovie = {
  ...testMovie,
  id: 1
} as Movie;
