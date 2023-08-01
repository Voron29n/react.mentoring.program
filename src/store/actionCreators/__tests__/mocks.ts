import { IDropDownItem, Movie } from 'components';

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

export const otherMovie = { ...testMovie, title: 'testTitle2' };

export const defaultStateMovieDetail = {
  movieDetail: testMovie
};

export const defaultStateMovieList = {
  movieList: [testMovie]
};

export const emptyMovieList = {
  movieList: [] as Array<Movie>
};

export const testSearch = 'testSearch';

export const testIDropdown = {
  value: 'test',
  label: 'test'
} as IDropDownItem;

export const defaultStateSearchMovies = {
  searchQuery: 'testSearchQuery',
  activeGenre: {
    value: 'testActiveGenre',
    label: 'testActiveGenre'
  } as IDropDownItem,
  activeSortType: {
    value: 'testActiveSortType',
    label: 'testActiveSortType'
  } as IDropDownItem
};
