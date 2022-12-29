import {
  MovieDetailActionTypes,
  MovieListActionTypes,
  SearchMoviesActionTypes
} from 'store/actionCreators';
import { movieDetailReducer } from 'store/reducers/movieDetail';
import { movieListReducer } from 'store/reducers/movieList';
import { searchMoviesReducer } from 'store/reducers/searchMovies';
import {
  defaultStateMovieDetail,
  defaultStateMovieList,
  defaultStateSearchMovies,
  emptyMovieList,
  otherMovie,
  testIDropdown,
  testMovie
} from './mocks';

describe('reducers movieDetail', () => {
  it('movieDetailReducer return state', () => {
    expect(
      JSON.stringify(
        movieDetailReducer(defaultStateMovieDetail, {
          type: null,
          payload: null
        })
      )
    ).toBe(JSON.stringify(defaultStateMovieDetail));
  });

  it('movieDetailReducer set movie detail', () => {
    expect(
      JSON.stringify(
        movieDetailReducer(null, {
          type: MovieDetailActionTypes.SET_MOVIE_DETAIL,
          payload: testMovie
        })
      )
    ).toBe(JSON.stringify({ movieDetail: testMovie }));
  });

  it('movieDetailReducer set movie detail', () => {
    expect(
      JSON.stringify(
        movieDetailReducer(null, {
          type: MovieDetailActionTypes.DELETE_MOVIE_DETAIL
        })
      )
    ).toBe(JSON.stringify({ movieDetail: null }));
  });
});

describe('reducers movieList', () => {
  it('movieListReducer return state', () => {
    expect(
      JSON.stringify(
        movieListReducer(defaultStateMovieList, { type: null, payload: null })
      )
    ).toBe(JSON.stringify(defaultStateMovieList));
  });

  it('movieListReducer set movie list', () => {
    expect(
      JSON.stringify(
        movieListReducer(null, {
          type: MovieListActionTypes.SET_MOVIE_LIST,
          payload: [testMovie]
        })
      )
    ).toBe(JSON.stringify({ movieList: [testMovie] }));
  });

  it('movieListReducer add movie', () => {
    expect(
      JSON.stringify(
        movieListReducer(emptyMovieList, {
          type: MovieListActionTypes.ADD_MOVIE,
          payload: testMovie
        })
      )
    ).toBe(JSON.stringify({ movieList: [testMovie] }));
  });

  it('movieListReducer delete movie', () => {
    expect(
      JSON.stringify(
        movieListReducer(defaultStateMovieList, {
          type: MovieListActionTypes.DELETE_MOVIE,
          payload: testMovie.id
        })
      )
    ).toBe(JSON.stringify({ movieList: [] }));
  });

  it('movieListReducer edit movie', () => {
    expect(
      JSON.stringify(
        movieListReducer(defaultStateMovieList, {
          type: MovieListActionTypes.EDIT_MOVIE,
          payload: otherMovie
        })
      )
    ).toBe(JSON.stringify({ movieList: [otherMovie] }));
  });
});

describe('reducers searchMovies', () => {
  const testString = 'test';

  it('searchMoviesReducer return state', () => {
    expect(
      JSON.stringify(
        searchMoviesReducer(defaultStateSearchMovies, {
          type: null,
          payload: null
        })
      )
    ).toBe(JSON.stringify(defaultStateSearchMovies));
  });

  it('searchMoviesReducer set search text', () => {
    expect(
      JSON.stringify(
        searchMoviesReducer(defaultStateSearchMovies, {
          type: SearchMoviesActionTypes.SET_SEARCH_TEXT,
          payload: testString
        })
      )
    ).toBe(
      JSON.stringify({ ...defaultStateSearchMovies, searchQuery: testString })
    );
  });

  it('searchMoviesReducer set active genre', () => {
    expect(
      JSON.stringify(
        searchMoviesReducer(defaultStateSearchMovies, {
          type: SearchMoviesActionTypes.SET_ACTIVE_GENRE,
          payload: testIDropdown
        })
      )
    ).toBe(
      JSON.stringify({
        ...defaultStateSearchMovies,
        activeGenre: testIDropdown
      })
    );
  });

  it('searchMoviesReducer set active sort type', () => {
    expect(
      JSON.stringify(
        searchMoviesReducer(defaultStateSearchMovies, {
          type: SearchMoviesActionTypes.SET_ACTIVE_SORT_TYPE,
          payload: testIDropdown
        })
      )
    ).toBe(
      JSON.stringify({
        ...defaultStateSearchMovies,
        activeSortType: testIDropdown
      })
    );
  });
});
