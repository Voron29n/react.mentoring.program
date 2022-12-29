import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { handleSelectedDropdownItemTest } from './utils.test';
import { MovieView } from '../index';
import {
  nonMovieDetail,
  otherSelectedMovieDetailCN,
  otherTestMovie,
  selectedMovieDetailCN,
  testMovie
} from './mocks';

const handleClick = jest.fn();
const handleSelectedDropdownItem = jest.fn();
const mockStore = configureMockStore([thunk]);

describe('MovieView component with selected movie as movieDetail', () => {
  let movieViewRender: RenderResult;

  beforeEach(() => {
    const store = mockStore({
      movieDetail: {
        movieDetail: testMovie
      }
    });
    movieViewRender = render(
      <ReduxProvider store={store}>
        <MovieView
          movieItem={testMovie}
          handleSelectedDropdownItem={handleSelectedDropdownItem}
          handleClick={handleClick}
        />
      </ReduxProvider>
    );
  });

  it('renders', () => {
    const releaseYear = new Date(testMovie.releaseDate).getFullYear();
    const genres = testMovie.genres.join(', ');

    expect(
      movieViewRender.container.querySelector('.movie__item__container')
    ).toHaveClass(selectedMovieDetailCN);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      testMovie.posterPath
    );
    expect(screen.getByRole('img')).toHaveAttribute('alt', testMovie.title);
    expect(screen.getByText(testMovie.title)).toBeInTheDocument();
    expect(screen.getByText(releaseYear)).toBeInTheDocument();
    expect(screen.getByText(genres)).toBeInTheDocument();
  });

  it('handleClick works', async () => {
    await userEvent.click(screen.getByRole('img') as HTMLImageElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('handleCloseActions works', async () => {
    const { container } = movieViewRender;
    await userEvent.hover(container.querySelector('.movie__item__container'));

    const actionsImg = screen.getAllByRole('img')[1] as HTMLImageElement;
    await userEvent.click(actionsImg);

    expect(screen.getByRole('list')).toBeInTheDocument();
    await userEvent.click(
      container.querySelector('.close__icon').firstElementChild
    );
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('handleSelectedDropdownItem works', async () => {
    await handleSelectedDropdownItemTest(movieViewRender, 0);
    expect(handleSelectedDropdownItem).toHaveBeenCalledTimes(1);
  });

  it('MovieView snapshot', () => {
    expect(movieViewRender).toMatchSnapshot();
  });
});

describe('MovieView component with other selected movie as movieDetail', () => {
  let movieViewRender: RenderResult;

  beforeEach(() => {
    const store = mockStore({
      movieDetail: {
        movieDetail: otherTestMovie
      }
    });
    movieViewRender = render(
      <ReduxProvider store={store}>
        <MovieView
          movieItem={testMovie}
          handleSelectedDropdownItem={handleSelectedDropdownItem}
          handleClick={handleClick}
        />
      </ReduxProvider>
    );
  });

  it('renders', () => {
    expect(
      movieViewRender.container.querySelector('.movie__item__container')
    ).toHaveClass(otherSelectedMovieDetailCN);
  });

  it('MovieView snapshot', () => {
    expect(movieViewRender).toMatchSnapshot();
  });
});

describe('MovieView component without movieDetail in store', () => {
  let movieViewRender: RenderResult;

  beforeEach(() => {
    const store = mockStore({
      movieDetail: {
        movieDetail: null
      }
    });
    movieViewRender = render(
      <ReduxProvider store={store}>
        <MovieView
          movieItem={testMovie}
          handleSelectedDropdownItem={handleSelectedDropdownItem}
          handleClick={handleClick}
        />
      </ReduxProvider>
    );
  });

  it('renders', () => {
    expect(
      movieViewRender.container.querySelector('.movie__item__container')
    ).not.toHaveClass(...nonMovieDetail);
  });

  it('MovieView snapshot', () => {
    expect(movieViewRender).toMatchSnapshot();
  });
});
