import { Movie } from 'components';

export const testMovies = [
  {
    id: 0,
    title: 'testTitle',
    voteAverage: 0,
    runtime: 10,
    genres: ['testGenre1', 'testGenre2'],
    releaseDate: '2018-02-07',
    posterPath: 'testPosterPath',
    overview: 'testOverview'
  },
  {
    id: 1,
    title: 'testTitle 1',
    voteAverage: 0,
    runtime: 10,
    genres: ['testGenre1', 'testGenre2'],
    releaseDate: '2018-02-07',
    posterPath: 'testPosterPath',
    overview: 'testOverview'
  }
] as Array<Movie>;
