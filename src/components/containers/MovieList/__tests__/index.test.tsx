import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, RenderResult } from '@testing-library/react';
import * as hooks from 'hooks';
import { MoviesActionCreators } from 'store/actionCreators';
import { testSearch } from 'store/actionCreators/__tests__/mocks';
import { MovieList } from '../index';
import { testIDropdown, testMovie } from './mocks';

const mockStore = configureMockStore([thunk]);
const saveMovieList = jest.fn();

describe('MovieList component', () => {
  const queryClient = new QueryClient();
  let movieViewRender: RenderResult;

  beforeEach(() => {
    jest.mock('../MovieListView', () => <div>Test</div>);
    jest.mock('hooks', () => ({
      useQueryMovieList: jest.fn().mockReturnValue({
        data: [testMovie],
        isSuccess: true,
        isLoading: false,
        error: {}
      })
    }));
    jest.spyOn(hooks, 'useActions').mockReturnValue({
      ...MoviesActionCreators,
      saveMovieList
    });
    const store = mockStore({
      movieList: {
        movieList: [testMovie]
      },
      searchMovies: {
        activeGenre: testIDropdown,
        activeSortType: testIDropdown,
        searchQuery: testSearch
      }
    });
    movieViewRender = render(
      <QueryClientProvider client={queryClient}>
        <ReduxProvider store={store}>
          <MovieList />
        </ReduxProvider>
      </QueryClientProvider>
    );
  });

  it('MovieList snapshot', () => {
    expect(movieViewRender).toMatchSnapshot();
  });
});
