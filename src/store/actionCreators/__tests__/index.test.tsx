import {
  deleteMovieDetail,
  MovieDetailActionTypes,
  setMovieDetail
} from 'store/actionCreators/movieDetail';
import {
  addMovie,
  deleteMovie,
  editMovie,
  MovieListActionTypes,
  saveMovieList
} from 'store/actionCreators/movieList';
import {
  SearchMoviesActionTypes,
  setActiveGenre,
  setActiveSortType,
  setSearchText
} from 'store/actionCreators/searchMovies';
import { testIDropdown, testMovie } from './mocks';

const searchParams: URLSearchParams = new URLSearchParams();
const setSearchParams = jest.fn();
const dispatch = jest.fn();
const testString = 'test';
describe('actionCreators movieDetail', () => {
  it('setMovieDetail', () => {
    setMovieDetail(testMovie, searchParams, setSearchParams)(dispatch);
    expect(setSearchParams).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls.length).toBe(1);
    expect(JSON.stringify(dispatch.mock.calls[0][0])).toBe(
      JSON.stringify({
        type: MovieDetailActionTypes.SET_MOVIE_DETAIL,
        payload: testMovie
      })
    );
  });

  it('deleteMovieDetail', () => {
    deleteMovieDetail(searchParams, setSearchParams)(dispatch);
    expect(setSearchParams).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls.length).toBe(1);
    expect(JSON.stringify(dispatch.mock.calls[0][0])).toBe(
      JSON.stringify({
        type: MovieDetailActionTypes.DELETE_MOVIE_DETAIL
      })
    );
  });
});

describe('actionCreators movieList', () => {
  it('addMovie', () => {
    addMovie(testMovie)(dispatch);
    expect(dispatch.mock.calls.length).toBe(1);
    expect(JSON.stringify(dispatch.mock.calls[0][0])).toBe(
      JSON.stringify({
        type: MovieListActionTypes.ADD_MOVIE,
        payload: testMovie
      })
    );
  });

  it('editMovie', () => {
    editMovie(testMovie)(dispatch);
    expect(dispatch.mock.calls.length).toBe(1);
    expect(JSON.stringify(dispatch.mock.calls[0][0])).toBe(
      JSON.stringify({
        type: MovieListActionTypes.EDIT_MOVIE,
        payload: testMovie
      })
    );
  });

  it('deleteMovie', () => {
    deleteMovie(testMovie)(dispatch);
    expect(dispatch.mock.calls.length).toBe(1);
    expect(JSON.stringify(dispatch.mock.calls[0][0])).toBe(
      JSON.stringify({
        type: MovieListActionTypes.DELETE_MOVIE,
        payload: testMovie.id
      })
    );
  });

  it('saveMovieList', () => {
    saveMovieList([testMovie])(dispatch);
    expect(dispatch.mock.calls.length).toBe(1);
    expect(JSON.stringify(dispatch.mock.calls[0][0])).toBe(
      JSON.stringify({
        type: MovieListActionTypes.SET_MOVIE_LIST,
        payload: [testMovie]
      })
    );
  });
});

describe('actionCreators searchMovies', () => {
  it('setActiveSortType', () => {
    setActiveSortType(testIDropdown, searchParams, setSearchParams)(dispatch);
    expect(setSearchParams).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls.length).toBe(1);
    expect(JSON.stringify(dispatch.mock.calls[0][0])).toBe(
      JSON.stringify({
        type: SearchMoviesActionTypes.SET_ACTIVE_SORT_TYPE,
        payload: testIDropdown
      })
    );
  });

  it('setActiveGenre', () => {
    setActiveGenre(testIDropdown, searchParams, setSearchParams)(dispatch);
    expect(setSearchParams).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls.length).toBe(1);
    expect(JSON.stringify(dispatch.mock.calls[0][0])).toBe(
      JSON.stringify({
        type: SearchMoviesActionTypes.SET_ACTIVE_GENRE,
        payload: testIDropdown
      })
    );
  });

  it('setSearchText', () => {
    setSearchText(testString)(dispatch);
    expect(dispatch.mock.calls.length).toBe(1);
    expect(JSON.stringify(dispatch.mock.calls[0][0])).toBe(
      JSON.stringify({
        type: SearchMoviesActionTypes.SET_SEARCH_TEXT,
        payload: testString
      })
    );
  });
});
