import { Movie } from 'components';
import { ServerMovie } from 'hooks/utils';

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

export const testServerMovie = {
  id: 0,
  title: 'testTitle',
  vote_average: 0,
  runtime: 10,
  genres: ['testGenre1', 'testGenre2'],
  release_date: '2018-02-07',
  poster_path: 'testPosterPath',
  overview: 'testOverview'
} as ServerMovie;

export const url = {
  activeGenre: 'genreTest',
  activeSortType: 'sortTypeTest',
  searchQuery: 'searchQueryTest'
};
