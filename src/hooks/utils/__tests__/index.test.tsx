import fetchMock from 'jest-fetch-mock';
import {
  fetchReq,
  generateMoviesUrl,
  isServerMovie,
  transformMovieMap
} from 'hooks/utils';
import { baseApiConfig } from 'utils';
import { testMovie, testServerMovie, url } from './mocks';

describe('movieData utils', () => {
  it('isServerMovie with Movie object', () => {
    const isServerMovieValue = isServerMovie(testMovie);
    expect(isServerMovieValue).toBe(false);
  });

  it('isServerMovie with Movie object', () => {
    const isServerMovieValue = isServerMovie(testServerMovie);
    expect(isServerMovieValue).toBe(true);
  });

  it('transformMovieMap Movie to ServerMovie object', () => {
    const serverMovie = transformMovieMap(testMovie);
    expect(serverMovie.toString()).toBe(testServerMovie.toString());
  });

  it('transformMovieMap ServerMovie to Movie object', () => {
    const movie = transformMovieMap(testServerMovie);
    expect(movie.toString()).toBe(testMovie.toString());
  });
});

describe('queries utils', () => {
  const responseData = [testServerMovie];

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('fetchReq ok', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: responseData }));
    const res = await fetchReq({
      url: `test`,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const { data } = await res.json();
    expect(data.toString()).toBe(responseData.toString());
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('fetch failed', async () => {
    fetchMock.mockReject(Error('Bad Request'));
    await expect(
      fetchReq({
        url: `test`,
        headers: {
          'Content-Type': 'application/json'
        }
      })
    ).rejects.toThrow(Error);
  });

  it('generateMoviesUrl works', () => {
    const { activeGenre, activeSortType, searchQuery } = url;
    const { searchParams }: URL = generateMoviesUrl(
      activeGenre,
      activeSortType,
      searchQuery
    );

    expect(searchParams.get(baseApiConfig._searchParams.filter)).toBe(
      activeGenre
    );
    expect(searchParams.get(baseApiConfig._searchParams.sortBy)).toBe(
      activeSortType
    );
    expect(searchParams.get(baseApiConfig._searchParams.searchQuery)).toBe(
      searchQuery
    );
  });
});
