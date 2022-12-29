import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render, RenderResult, screen } from '@testing-library/react';
import { MovieListView } from 'components';
import { LightboxContextProvider } from 'context/lightbox';
import { testMovies } from './mocks';

describe('MovieListView component', () => {
  const mockStore = configureMockStore([thunk]);
  const setMovieDetailMock = jest.fn();
  let movieListViewRender: RenderResult;

  beforeEach(() => {
    jest.mock('hooks', () => ({
      ...(jest.requireActual('hooks') as any),
      useActions: {
        setMovieDetail: setMovieDetailMock
      }
    }));
    const store = mockStore({
      movieDetail: {
        movieDetail: null
      }
    });
    movieListViewRender = render(
      <MemoryRouter initialEntries={['']}>
        <ReduxProvider store={store}>
          <LightboxContextProvider>
            <MovieListView
              movieList={testMovies}
              isError={false}
              isLoading={false}
            />
          </LightboxContextProvider>
        </ReduxProvider>
      </MemoryRouter>
    );
  });

  it('renders', () => {
    const { container } = movieListViewRender;
    expect(screen.getByText(testMovies.length)).toBeInTheDocument();
    expect(container.querySelectorAll('.movie__list > div').length).toBe(
      testMovies.length
    );
  });

  it('MovieListView snapshot', () => {
    expect(movieListViewRender).toMatchSnapshot();
  });
});

describe('MovieListView component with error', () => {
  let movieListViewRender: RenderResult;

  beforeEach(() => {
    movieListViewRender = render(
      <MovieListView movieList={testMovies} isError={true} isLoading={false} />
    );
  });

  it('renders', () => {
    const { container } = movieListViewRender;
    expect(container.querySelector('.movie__count')).not.toBeInTheDocument();
    expect(container.querySelector('.movie__list')).not.toBeInTheDocument();
    expect(container.querySelector('.spinner-box')).not.toBeInTheDocument();
  });

  it('MovieListView snapshot', () => {
    expect(movieListViewRender).toMatchSnapshot();
  });
});

describe('MovieListView component with loading', () => {
  let movieListViewRender: RenderResult;

  beforeEach(() => {
    movieListViewRender = render(
      <MovieListView movieList={testMovies} isError={false} isLoading={true} />
    );
  });

  it('renders', () => {
    const { container } = movieListViewRender;
    expect(container.querySelector('.movie__count')).not.toBeInTheDocument();
    expect(container.querySelector('.movie__list')).not.toBeInTheDocument();
    expect(container.querySelector('.spinner-box')).toBeInTheDocument();
  });

  it('MovieListView snapshot', () => {
    expect(movieListViewRender).toMatchSnapshot();
  });
});
